#!/bin/bash

# ==========================================
#  UNIVERSAL DEPLOY SCRIPT (VPS & Shared Hosting)
#  Politeknik Prestasi Prima
# ==========================================

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}   UNIVERSAL DEPLOYMENT MANAGER               ${NC}"
echo -e "${BLUE}==============================================${NC}"
echo -e "Where are you deploying this application?"
echo -e "1) ${YELLOW}Shared Hosting / cPanel${NC} (Static HTML Export)"
echo -e "2) ${YELLOW}VPS / Dedicated Server${NC} (Node.js + SSR + PM2)"
echo -e "3) Exit"
read -p "Select an option [1-3]: " DEPLOY_MODE

# ==========================================
#  SHARED HOSTING FLOW (Static)
# ==========================================
if [ "$DEPLOY_MODE" == "1" ]; then
    echo -e "\n${BLUE}>>> Initiating Shared Hosting Deployment (Static)...${NC}"
    
    # Clean previous builds
    rm -rf out .next
    
    echo -e "${YELLOW}Building for Static Export...${NC}"
    # Use the specific ENV variable to trigger static config in next.config.ts
    export DEPLOY_TARGET="static"
    npm run build
    
    if [ ! -d "out" ]; then
        echo -e "${RED}Error: Build failed! 'out' directory not found.${NC}"
        exit 1
    fi
    
    # Generate .htaccess for proper routing on Apache/cPanel
    echo -e "${YELLOW}Generating .htaccess configuration...${NC}"
    cat > out/.htaccess <<EOL
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{THE_REQUEST} ^[A-Z]{3,}\s([^.]+)\.html [NC]
  RewriteRule ^ %1 [R=301,L]
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]
  ErrorDocument 404 /404.html
</IfModule>
EOL

    # Package files
    echo -e "${YELLOW}Compressing files...${NC}"
    if command -v zip &> /dev/null; then
        rm -f deploy_package.zip
        cd out
        zip -r "../deploy_package.zip" . * .htaccess
        cd ..
        echo -e "${GREEN}SUCCESS! Upload 'deploy_package.zip' to your cPanel public_html folder.${NC}"
    else
        echo -e "${YELLOW}Zip command not found. Please verify the 'out' folder manually.${NC}"
    fi

# ==========================================
#  VPS FLOW (Node.js / PM2)
# ==========================================
elif [ "$DEPLOY_MODE" == "2" ]; then
    echo -e "\n${BLUE}>>> Initiating VPS Deployment (Node.js/SSR)...${NC}"
    
    APP_NAME="poltek-app"
    
    # Install Dependencies
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install --legacy-peer-deps
    
    # Build
    echo -e "${YELLOW}Building for Production (SSR)...${NC}"
    # Ensure DEPLOY_TARGET is NOT set to 'static'
    unset DEPLOY_TARGET
    npm run build
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed.${NC}"
        exit 1
    fi
    
    # PM2 Management
    if command -v pm2 &> /dev/null; then
        echo -e "${YELLOW}Managing PM2 process...${NC}"
        pm2 describe $APP_NAME > /dev/null
        if [ $? -eq 0 ]; then
            pm2 reload $APP_NAME
            echo -e "${GREEN}App '$APP_NAME' reloaded successfully.${NC}"
        else
            pm2 start npm --name "$APP_NAME" -- start
            echo -e "${GREEN}App '$APP_NAME' started successfully.${NC}"
        fi
        pm2 save
    else
        echo -e "${RED}PM2 not found!${NC} Installing PM2..."
        npm install -g pm2
        pm2 start npm --name "$APP_NAME" -- start
        pm2 save
        echo -e "${GREEN}PM2 installed and app started.${NC}"
    fi
    
    echo -e "${GREEN}Deployment Complete! Your app is running.${NC}"

else
    echo "Exiting..."
    exit 0
fi
