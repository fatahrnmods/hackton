# Panduan Setup & Menjalankan Proyek

## Prerequisites
- Node.js 16 atau lebih tinggi
- MongoDB (lokal atau MongoDB Atlas)
- Gemini API Key (dari Google AI Studio)

## Instalasi & Konfigurasi

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Buat file .env
cp .env.example .env

# Edit .env dan sesuaikan:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_api_key_here
NODE_ENV=development
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Frontend sudah dikonfigurasi untuk proxy ke backend di http://localhost:5000
```

## Menjalankan Proyek

### Terminal 1: Backend Server

```bash
cd backend
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### Terminal 2: Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## Akses Aplikasi

Buka browser dan kunjungi: **http://localhost:5173**

## Fitur yang Bisa Ditest

### 1. **Compatibility Checker**
- Navigasi ke `/builder`
- Input spesifikasi CPU, Motherboard, RAM, PSU
- Klik "Cek Kompatibilitas"
- Sistem akan menampilkan hasil kompatibilitas

### 2. **PC Build Creator**
- Di halaman `/builder`
- Input judul build, budget, dan tujuan (gaming/workstation/office)
- Tambah komponen dengan kategori, nama, dan harga
- Lihat total cost dan bandingkan dengan budget
- Simpan build

### 3. **AI Consultant**
- Navigasi ke `/consultant`
- Chat dengan AI tentang pertanyaan PC parts
- AI akan memberikan rekomendasi ramah

### 4. **Nearest Store Finder**
- Navigasi ke `/stores`
- Klik "Cari Toko Terdekat"
- Sistem akan menggunakan geolocation Anda
- Tampilkan toko terdekat dengan info detail

## Struktur File Penting

```
backend/
├── server.js                           # Entry point
├── src/
│   ├── controllers/
│   │   ├── compatibilityController.js  # Logic cek kompatibilitas
│   │   ├── pricingController.js        # Logic dynamic pricing
│   │   ├── storeController.js          # Logic store finder
│   │   ├── buildController.js          # CRUD build
│   │   └── consultantController.js     # AI consultant logic
│   ├── utils/
│   │   ├── compatibility.js            # Algorithm kompatibilitas
│   │   ├── geminiClient.js             # Integrasi Gemini API
│   │   ├── locationService.js          # Geolocation & routing
│   │   └── scraper.js                  # Web scraping
│   └── models/
│       ├── Part.js                     # Schema sparepart
│       ├── Store.js                    # Schema toko
│       └── Build.js                    # Schema PC build

frontend/
├── src/
│   ├── components/
│   │   ├── AIConsultant.jsx            # Komponen chat bot
│   │   ├── CompatibilityChecker.jsx    # Komponen checker
│   │   ├── NearestStoresFinder.jsx     # Komponen store finder
│   │   └── PCBuildCreator.jsx          # Komponen build creator
│   ├── pages/
│   │   ├── HomePage.jsx                # Halaman utama
│   │   ├── BuilderPage.jsx             # Halaman builder
│   │   ├── ConsultantPage.jsx          # Halaman consultant
│   │   └── StoresPage.jsx              # Halaman stores
│   ├── services/
│   │   └── api.js                      # API client layer
│   ├── App.jsx                         # Main app component
│   └── main.jsx                        # React root
```

## API Testing

### Test Compatibility Check
```bash
curl -X POST http://localhost:5000/api/compatibility/check \
  -H "Content-Type: application/json" \
  -d '{
    "components": {
      "cpu": { "name": "Intel i5-13600K", "socket": "LGA1700" },
      "motherboard": { "name": "ASUS TUF", "socket": "LGA1700" }
    }
  }'
```

### Test Price Calculation
```bash
curl -X POST http://localhost:5000/api/pricing/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "partId": "1",
    "marketPrices": [
      { "marketplace": "shopee", "price": 1200000 },
      { "marketplace": "lazada", "price": 1250000 }
    ]
  }'
```

### Test Nearest Stores
```bash
curl -X POST http://localhost:5000/api/stores/nearest \
  -H "Content-Type: application/json" \
  -d '{
    "latitude": -6.2088,
    "longitude": 106.8456,
    "maxDistance": 50
  }'
```

## Troubleshooting

### MongoDB Connection Error
- Pastikan MongoDB running: `mongod`
- Atau gunakan MongoDB Atlas dan update `MONGODB_URI` di .env

### Gemini API Key Error
- Dapatkan API key dari https://ai.google.dev
- Pastikan key sudah di-set di .env file

### Port Already in Use
- Backend menggunakan port 5000
- Frontend menggunakan port 5173
- Jika port sudah digunakan, ubah di config

### CORS Error
- Sudah dikonfigurasi di backend untuk allow origin http://localhost:5173

## Build untuk Production

### Frontend
```bash
cd frontend
npm run build
# Output di: dist/
```

### Backend
```bash
cd backend
npm start
```

## Environment Variables yang Dibutuhkan

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

### Frontend
Frontend menggunakan proxy otomatis ke backend yang sudah dikonfigurasi di `vite.config.js`

## Fitur yang Masih Bisa Dikembangkan

1. **Authentication** - Tambah JWT auth
2. **Payment Gateway** - Integrasi Stripe/PayPal
3. **Database Seed** - Initial data untuk testing
4. **Email Notifications** - Kirim notif ke user
5. **Analytics** - Track user behavior
6. **Admin Dashboard** - Manage parts, stores, pricing
7. **Mobile App** - React Native version
8. **Deployment** - Deploy ke cloud (Vercel, Heroku, AWS)

---

**Happy Coding! 🚀**
