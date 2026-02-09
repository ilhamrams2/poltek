#!/bin/bash

# ==========================================
#  Politeknik Prestasi Prima - VPS Production Deploy Script
#  For Ubuntu/Debian/CentOS VPS with Node.js & PM2
# ==========================================

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

APP_NAME="poltek-app"
PORT=3000

echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}   STARTING VPS PRODUCTION DEPLOYMENT         ${NC}"
echo -e "${BLUE}==============================================${NC}"

# 1. Environment Check
echo -e "\n${YELLOW}[1/4] Checking System Requirements...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed! Please install Node.js first.${NC}"
    exit 1
fi

if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}PM2 is not installed. Installing PM2 globally...${NC}"
    npm install -g pm2
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ PM2 Installed Successfully${NC}"
    else
        echo -e "${RED}Error: Failed to install PM2. Try running with sudo.${NC}"
        exit 1
    fi
fi
echo -e "${GREEN}✓ Environment Ready${NC}"

# 2. Dependency Installation
echo -e "\n${YELLOW}[2/4] Installing Dependencies...${NC}"
# Use 'npm ci' for faster, reliable builds if package-lock exists, else 'npm install'
if [ -f "package-lock.json" ]; then
    npm ci --legacy-peer-deps
else
    npm install --legacy-peer-deps
fi
echo -e "${GREEN}✓ Dependencies Installed${NC}"

# 3. Build Application
echo -e "\n${YELLOW}[3/4] Building Next.js Application...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Build failed! Aborting deployment.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build Successful${NC}"

# 4. Start/Restart with PM2
echo -e "\n${YELLOW}[4/4] Starting Application with PM2...${NC}"

# Check if app is already running
pm2 describe $APP_NAME > /dev/null
if [ $? -eq 0 ]; then
    echo "Reloading existing application..."
    pm2 reload $APP_NAME
else
    echo "Starting application for the first time..."
    pm2 startnpm --name "$APP_NAME" -- start
    # Alternative raw command if npm script has issues:
    # pm2 start node_modules/next/dist/bin/next --name "$APP_NAME" -- start
fi

# Save PM2 list so it restarts on reboot
pm2 save

echo -e "\n${BLUE}==============================================${NC}"
echo -e "${GREEN}   DEPLOYMENT COMPLETE!   ${NC}"
echo -e "${BLUE}==============================================${NC}"
echo -e "Your app is running on port ${YELLOW}$PORT${NC}"
echo -e "Use 'pm2 status' to check status"
echo -e "Use 'pm2 logs $APP_NAME' to view logs"
echo -e "${BLUE}==============================================${NC}"
