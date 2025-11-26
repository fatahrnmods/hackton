# Hackton - AI-Powered Computer Spareparts Marketplace

Platform e-commerce sparepart komputer berbasis AI yang mendukung UMKM lokal dengan fitur compatibility check cerdas, dynamic pricing, dan AI consultant yang friendly.

## Fitur Utama

1. **Smart Compatibility Checker** - Validasi kompatibilitas part PC secara otomatis
2. **Dynamic Pricing** - Harga dinamis berdasarkan data market (Shopee, Lazada, Tokopedia, Blibli)
3. **Nearest Store Finder** - Arahkan pengguna ke toko fisik terdekat
4. **Step-by-Step PC Build Tutorial** - Panduan rakit PC untuk pemula
5. **AI Consultant** - Chatbot yang ramah dan memahami spesifikasi PC
6. **Technician Consultation** - Koneksi ke teknisi profesional

## Tech Stack

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **AI/LLM:** Gemini API
- **Web Scraping:** Cheerio + Axios

## Project Structure

```
hackton-sparepart-ai/
├── backend/              # Node.js API Server
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Database models
│   │   ├── utils/        # Helper functions
│   │   └── middleware/   # Express middleware
│   ├── package.json
│   └── server.js
├── frontend/             # React Application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API calls
│   │   ├── hooks/        # Custom hooks
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Backend `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_gemini_api_key
```

## Hackathon Theme
**"Usaha Lokal & AI Inklusif"** - Memberdayakan UMKM lokal dengan teknologi AI yang inklusif dan mudah digunakan.
