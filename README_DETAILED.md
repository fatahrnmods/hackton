# Hackton - AI-Powered Computer Spareparts Marketplace

Platform e-commerce sparepart komputer berbasis AI yang mendukung UMKM lokal dengan fitur compatibility check cerdas, dynamic pricing, dan AI consultant yang friendly.

## 🎯 Tema Hackathon
**"Usaha Lokal & AI Inklusif"** - Memberdayakan UMKM lokal dengan teknologi AI yang inklusif dan mudah digunakan.

## ✨ Fitur Utama

### 1. **Smart Compatibility Checker** ✓
- Validasi kompatibilitas komponen PC secara otomatis
- Deteksi masalah socket, RAM type, power supply
- Rekomendasi alternatif komponen

### 2. **Dynamic Pricing** 💰
- Harga dinamis berdasarkan data real-time market
- Integrasi data dari Shopee, Lazada, Tokopedia, Blibli
- Koreksi data bias secara manual

### 3. **Nearest Store Finder** 📍
- Geolocation-based store search
- Routing optimization untuk pickup/delivery
- Info teknisi dan layanan di setiap toko
- Operating hours & availability checker

### 4. **Step-by-Step PC Build Tutorial** 📖
- Panduan rakit PC yang user-friendly untuk pemula
- Video integration (optional)
- Safety precautions & best practices

### 5. **Friendly AI Consultant** 🤖
- Powered by Gemini API
- Memahami spesifikasi PC dan kelebihan/kekurangan setiap part
- Budget optimization recommendations
- Real-time chat support

### 6. **Technician Consultation** 👨‍🔧
- Koneksi dengan teknisi lokal profesional
- Service request management
- Expert recommendation engine

## 🛠️ Tech Stack

```
Frontend:
- React 18 + Vite
- TailwindCSS for styling
- React Router for navigation
- Axios for API calls
- Socket.io-client for real-time features

Backend:
- Node.js + Express
- MongoDB for database
- Socket.io for real-time communication
- @google-cloud/generative-ai (Gemini API)
- Cheerio + Axios for web scraping
- Mongoose for ODM

AI/ML:
- Gemini API for LLM features
- Custom compatibility algorithms
- Dynamic pricing engine
```

## 📁 Project Structure

```
hackton-sparepart-ai/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── compatibilityController.js    # Cek kompatibilitas
│   │   │   ├── pricingController.js          # Dynamic pricing
│   │   │   ├── storeController.js            # Store finder
│   │   │   ├── buildController.js            # Build CRUD
│   │   │   └── consultantController.js       # AI consultant
│   │   ├── services/
│   │   │   └── (business logic layer)
│   │   ├── models/
│   │   │   ├── Part.js                       # Sparepart schema
│   │   │   ├── Store.js                      # Store schema
│   │   │   └── Build.js                      # PC Build schema
│   │   ├── utils/
│   │   │   ├── scraper.js                    # Web scraping
│   │   │   ├── compatibility.js              # Compatibility logic
│   │   │   ├── geminiClient.js               # Gemini API integration
│   │   │   └── locationService.js            # Geolocation & routing
│   │   └── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIConsultant.jsx              # Chat interface
│   │   │   ├── CompatibilityChecker.jsx      # Checker component
│   │   │   ├── NearestStoresFinder.jsx       # Store finder
│   │   │   └── PCBuildCreator.jsx            # Build creator
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── BuilderPage.jsx
│   │   │   ├── ConsultantPage.jsx
│   │   │   └── StoresPage.jsx
│   │   ├── services/
│   │   │   └── api.js                        # API service layer
│   │   ├── hooks/
│   │   │   └── useAPI.js                     # Custom hooks
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (local atau Atlas)
- Gemini API key

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env dan masukkan:
# - MONGODB_URI
# - GEMINI_API_KEY
# - PORT (default: 5000)

# Run development server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
# Akses di http://localhost:5173
```

## 📡 API Endpoints

### Compatibility API
```
POST   /api/compatibility/check
GET    /api/compatibility/recommendations/:purpose/:budget
```

### Pricing API
```
POST   /api/pricing/calculate
GET    /api/pricing/market-comparison/:partName
POST   /api/pricing/bulk-calculate
```

### Store API
```
POST   /api/stores/nearest
GET    /api/stores/:storeId
POST   /api/stores/search
```

### Build API
```
POST   /api/builds/create
GET    /api/builds/:buildId
GET    /api/builds/user/:userId
PUT    /api/builds/:buildId
DELETE /api/builds/:buildId
```

### Consultant API
```
POST   /api/consultant/chat
POST   /api/consultant/recommend-build
POST   /api/consultant/generate-tutorial
POST   /api/consultant/technician-connection
```

## 🔑 Key Features Implementation

### Compatibility Check Algorithm
- Socket validation (CPU ↔ Motherboard)
- RAM type checking (DDR4/DDR5)
- Power supply calculation
- PCIe version compatibility

### Dynamic Pricing Strategy
- Average price dari multiple sources
- Margin calculation (15% default)
- Real-time market data scraping
- Price history tracking

### Location Services
- Haversine formula untuk distance calculation
- Nearest neighbor routing algorithm
- Operating hours checker
- Store availability status

### AI Consultant Features
- Natural language processing via Gemini API
- Context-aware responses
- Build recommendations
- Step-by-step tutorials
- Technician connection

## 📊 Data Models

### Part Schema
- name, category, brand, model
- specifications (cores, RAM, speed, etc)
- prices (marketplace breakdown)
- compatibility info
- reviews & ratings

### Store Schema
- location (latitude, longitude, address)
- inventory
- services offered
- technicians info
- operating hours
- rating & reviews

### Build Schema
- userId, title, budget, purpose
- components array
- compatibility check result
- tutorial steps
- shared with users list

## 🔐 Security Considerations
- Environment variables untuk sensitive data
- Input validation & sanitization
- Rate limiting untuk API calls
- CORS configuration
- Error handling

## 🎓 Pembelajaran & Inovasi

Platform ini mendemonstrasikan:
1. **AI Integration** - Gemini API untuk NLP & recommendations
2. **Data Scraping** - Real-time market data collection
3. **Location-based Services** - Geolocation & routing
4. **Real-time Communication** - Socket.io for live updates
5. **UMKM Empowerment** - Supporting local businesses

## 💡 Future Enhancements

- [ ] Machine learning model untuk price prediction
- [ ] Computer vision untuk part recognition
- [ ] Payment gateway integration
- [ ] User authentication & profiles
- [ ] Order tracking system
- [ ] Review & rating system
- [ ] Inventory management for stores
- [ ] Mobile app (React Native)

## 🤝 Contributing

This is a hackathon project. Contributions welcome!

## 📝 License

MIT

---

**Dibuat dengan ❤️ untuk Hackathon "Usaha Lokal & AI Inklusif"**
