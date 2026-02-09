# Panduan Deployment Politeknik Prestasi Prima

Dokumen ini menjelaskan cara melakukan deployment aplikasi web Poltek menggunakan script universal `deploy.sh`.

## Persiapan
Pastikan Anda memiliki akses terminal (Git Bash di Windows, atau Terminal di Linux/Mac/VPS).

## Cara Penggunaan Script
Jalankan perintah berikut di root project:

```bash
./deploy.sh
```

Anda akan diberikan 2 pilihan utama:

### 1. Shared Hosting / cPanel (Static Mode)
Pilih opsi ini jika Anda menggunakan hosting biasa (cPanel, Niagahoster, Hostinger, dll) yang tidak support Node.js/VPS.

**Apa yang terjadi:**
- Script akan mengatur `next.config.ts` ke mode `static export`.
- Gambar akan diset ke `unoptimized` agar tetap muncul tanpa server Node.js.
- Project dibuild ke folder `out`.
- File `.htaccess` otomatis dibuat (agar URL bersih tanpa `.html`).
- Hasil akhirnya dikompres menjadi **`deploy_package.zip`**.

**Cara Upload:**
1. Login ke cPanel -> File Manager -> `public_html`.
2. Upload file `deploy_package.zip`.
3. Extract file tersebut.
4. Selesai! Website sudah live.

---

### 2. VPS / Dedicated Server (SSR Mode)
Pilih opsi ini jika Anda menggunakan VPS (Ubuntu/Debian) dan memiliki akses root/SSH.

**Apa yang terjadi:**
- Script akan menginstall dependencies.
- Project dibuild dalam mode Production SSR (Server Side Rendering) untuk performa maksimal.
- Script otomatis mengecek dan menginstall **PM2** (Process Manager).
- Aplikasi dijalankan/direstart menggunakan PM2 dengan nama `poltek-app`.
- Aplikasi akan berjalan di port `3000` (atau port yang didefinisikan).

**Konfigurasi Nginx (Opsional tapi Disarankan):**
Untuk menghubungkan domain Anda ke port 3000, gunakan Nginx sebagai reverse proxy.

```nginx
server {
    listen 80;
    server_name domain-anda.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Troubleshooting
- Jika permission denied saat menjalan script: `chmod +x deploy.sh`
- Jika `zip` not found di script: Install zip (`apt install zip` di Ubuntu) atau zip folder `out` secara manual.
