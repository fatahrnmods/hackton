# 📦 Complete Project Structure

## Project: AI-Powered Computer Spareparts Marketplace
**Theme:** "Usaha Lokal & AI Inklusif"  
**Status:** ✅ MVP Ready for Hackathon

---

## 📁 Directory Structure

```
hackton-sparepart-ai/
│
├── 📄 README.md                          # Project overview
├── 📄 README_DETAILED.md                 # Comprehensive documentation
├── 📄 SETUP_GUIDE.md                     # Installation & running guide
├── 📄 API_DOCUMENTATION.md               # Complete API reference
├── 📄 PROGRESS.md                        # Development progress & checklist
├── 📄 ROADMAP.md                         # Project roadmap & strategy
├── 📄 install.sh                         # Linux/Mac installation script
├── 📄 install.bat                        # Windows installation script
│
├── 📁 backend/                           # Node.js/Express API Server
│   ├── 📄 server.js                      # Express server entry point
│   ├── 📄 package.json                   # Dependencies & scripts
│   ├── 📄 .env.example                   # Environment template
│   ├── 📄 .gitignore                     # Git ignore rules
│   │
│   └── src/
│       │
│       ├── controllers/                  # Route handlers
│       │   ├── compatibilityController.js   # Cek kompatibilitas
│       │   ├── pricingController.js        # Dynamic pricing
│       │   ├── storeController.js          # Store finder
│       │   ├── buildController.js          # PC build CRUD
│       │   └── consultantController.js     # AI consultant
│       │
│       ├── services/                    # Business logic layer
│       │   ├── compatibilityService.js
│       │   ├── pricingService.js
│       │   ├── storeService.js
│       │   ├── buildService.js
│       │   └── consultantService.js
│       │
│       ├── models/                      # MongoDB schemas
│       │   ├── Part.js                  # Sparepart model
│       │   ├── Store.js                 # Store model
│       │   └── Build.js                 # PC Build model
│       │
│       ├── utils/                       # Utility functions
│       │   ├── compatibility.js         # Compatibility algorithms
│       │   ├── geminiClient.js          # Gemini API integration
│       │   ├── locationService.js       # Geolocation & routing
│       │   ├── scraper.js               # Web scraping utilities
│       │   └── mockData.js              # Mock data for testing
│       │
│       └── middleware/
│           └── errorHandler.js          # Error handling middleware
│
├── 📁 frontend/                          # React + Vite Application
│   ├── 📄 index.html                    # HTML entry point
│   ├── 📄 package.json                  # Dependencies & scripts
│   ├── 📄 vite.config.js                # Vite configuration
│   ├── 📄 tailwind.config.js            # TailwindCSS config
│   ├── 📄 postcss.config.js             # PostCSS config
│   ├── 📄 .eslintrc.cjs                 # ESLint configuration
│   ├── 📄 .gitignore                    # Git ignore rules
│   ├── 📄 public/                       # Static files
│   │
│   └── src/
│       ├── 📄 App.jsx                   # Main app component
│       ├── 📄 main.jsx                  # React entry point
│       ├── 📄 index.css                 # Global styles
│       │
│       ├── components/                  # Reusable components
│       │   ├── AIConsultant.jsx         # Chat bot interface
│       │   ├── CompatibilityChecker.jsx # Compatibility checker
│       │   ├── NearestStoresFinder.jsx  # Store finder
│       │   └── PCBuildCreator.jsx       # Build creator
│       │
│       ├── pages/                       # Page components
│       │   ├── HomePage.jsx             # Landing page
│       │   ├── BuilderPage.jsx          # Builder page
│       │   ├── ConsultantPage.jsx       # Consultant page
│       │   └── StoresPage.jsx           # Stores page
│       │
│       ├── services/                    # API service layer
│       │   └── api.js                   # API client & Socket.io
│       │
│       └── hooks/                       # Custom React hooks
│           └── useAPI.js                # API hooks
```

---

## 📋 Files Summary

### Root Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Quick project overview & features |
| `README_DETAILED.md` | In-depth documentation with examples |
| `SETUP_GUIDE.md` | Installation steps & running instructions |
| `API_DOCUMENTATION.md` | Complete API reference with examples |
| `PROGRESS.md` | Development checklist & status |
| `ROADMAP.md` | Project vision & future plans |
| `install.sh` | Auto-install script (Linux/Mac) |
| `install.bat` | Auto-install script (Windows) |

### Backend Files (Node.js + Express)

#### Server Setup
- `server.js` - Express app initialization with Socket.io

#### Controllers (5 files)
- `compatibilityController.js` - Check part compatibility
- `pricingController.js` - Dynamic pricing calculations
- `storeController.js` - Store location & search
- `buildController.js` - PC build management
- `consultantController.js` - AI consultant features

#### Services (6 files)
- Service layer for each feature domain
- Encapsulates business logic
- Called by controllers

#### Models (3 files)
- `Part.js` - Sparepart schema
- `Store.js` - Store/UMKM schema
- `Build.js` - PC build schema

#### Utils (5 files)
- `compatibility.js` - Compatibility validation algorithms
- `geminiClient.js` - Gemini LLM API integration
- `locationService.js` - Geolocation & route optimization
- `scraper.js` - Multi-marketplace web scraping
- `mockData.js` - Test data

#### Middleware
- `errorHandler.js` - Global error handling

### Frontend Files (React + Vite)

#### Components (4 files)
- `AIConsultant.jsx` - Chatbot interface with messaging
- `CompatibilityChecker.jsx` - Form to check PC compatibility
- `NearestStoresFinder.jsx` - Geolocation-based store finder
- `PCBuildCreator.jsx` - Build configuration & management

#### Pages (4 files)
- `HomePage.jsx` - Landing page with feature showcase
- `BuilderPage.jsx` - PC builder & compatibility check
- `ConsultantPage.jsx` - AI consultant chat interface
- `StoresPage.jsx` - Store finder page

#### Core Files
- `App.jsx` - Main app with routing
- `main.jsx` - React root entry
- `index.css` - Global TailwindCSS styles
- `api.js` - Axios + Socket.io client
- `useAPI.js` - Custom React hooks for API calls

---

## 🔧 Technologies Used

### Backend
```
Runtime:      Node.js
Framework:    Express.js
Database:     MongoDB + Mongoose
Realtime:     Socket.io
AI/LLM:       Google Gemini API
Scraping:     Cheerio + Axios
```

### Frontend
```
Framework:    React 18
Build Tool:   Vite
Styling:      TailwindCSS
Routing:      React Router v6
HTTP Client:  Axios
Realtime:     Socket.io Client
```

---

## 📊 Feature Breakdown

### 1. Compatibility Checker ✅
**Files:**
- `backend/src/utils/compatibility.js` - Algorithm
- `backend/src/controllers/compatibilityController.js` - API
- `frontend/src/components/CompatibilityChecker.jsx` - UI

**Features:**
- CPU ↔ Motherboard socket validation
- RAM type compatibility check
- Power supply requirement calculation
- GPU PCIe compatibility
- Real-time validation

### 2. Dynamic Pricing 💰
**Files:**
- `backend/src/services/pricingService.js` - Logic
- `backend/src/controllers/pricingController.js` - API
- `backend/src/utils/scraper.js` - Data collection

**Features:**
- Multi-marketplace price scraping
- Average price calculation
- Margin configuration
- Bulk pricing calculation

### 3. Nearest Store Finder 📍
**Files:**
- `backend/src/utils/locationService.js` - Algorithms
- `backend/src/controllers/storeController.js` - API
- `frontend/src/components/NearestStoresFinder.jsx` - UI

**Features:**
- Geolocation detection
- Distance calculation (Haversine formula)
- Store routing optimization
- Operating hours checking
- Technician matching

### 4. PC Build Creator 🖥️
**Files:**
- `backend/src/services/buildService.js` - Logic
- `backend/src/controllers/buildController.js` - API
- `frontend/src/components/PCBuildCreator.jsx` - UI

**Features:**
- Component selection & management
- Price calculation
- Budget tracking
- Build persistence
- Compatibility integration

### 5. AI Consultant 🤖
**Files:**
- `backend/src/utils/geminiClient.js` - API integration
- `backend/src/controllers/consultantController.js` - Routes
- `frontend/src/components/AIConsultant.jsx` - UI

**Features:**
- Real-time chat interface
- AI-powered recommendations
- Tutorial generation
- Technician connection
- Context-aware responses

### 6. Store Management 🏪
**Files:**
- `backend/src/models/Store.js` - Schema
- `backend/src/services/storeService.js` - Logic
- `backend/src/controllers/storeController.js` - API

**Features:**
- UMKM store profiles
- Inventory tracking
- Technician roster
- Service offerings
- Rating system

---

## 🚀 Quick Start

### Installation
```bash
# Automatic installation
# Windows
install.bat

# Linux/Mac
bash install.sh
```

### Manual Installation
```bash
# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your config

# Frontend
cd frontend
npm install
```

### Running
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev

# Open browser: http://localhost:5173
```

---

## 📡 API Endpoints

### Compatibility
```
POST   /api/compatibility/check
GET    /api/compatibility/recommendations/:purpose/:budget
```

### Pricing
```
POST   /api/pricing/calculate
GET    /api/pricing/market-comparison/:partName
POST   /api/pricing/bulk-calculate
```

### Stores
```
POST   /api/stores/nearest
GET    /api/stores/:storeId
POST   /api/stores/search
```

### Builds
```
POST   /api/builds/create
GET    /api/builds/:buildId
GET    /api/builds/user/:userId
PUT    /api/builds/:buildId
DELETE /api/builds/:buildId
```

### Consultant
```
POST   /api/consultant/chat
POST   /api/consultant/recommend-build
POST   /api/consultant/generate-tutorial
POST   /api/consultant/technician-connection
```

---

## ✨ Key Achievements

✅ **Complete API Structure** - 20+ endpoints  
✅ **Responsive UI** - Mobile-friendly design  
✅ **AI Integration** - Gemini API ready  
✅ **Real-time Features** - Socket.io setup  
✅ **Scalable Architecture** - Service layer pattern  
✅ **Comprehensive Docs** - 5 documentation files  
✅ **Mock Data** - Ready for testing  
✅ **Error Handling** - Global error middleware  

---

## 🎯 For Hackathon Judges

### Innovation Highlights
1. **AI-Powered Compatibility** - Prevents costly PC building mistakes
2. **Local Business Support** - Connects consumers with UMKM
3. **Real-time Market Data** - Dynamic pricing from multiple sources
4. **Inclusive UX** - Beginner-friendly interface with AI guidance
5. **Location Intelligence** - Optimized store routing

### Code Quality
- Clean architecture with separation of concerns
- Comprehensive error handling
- Reusable components & services
- Well-documented codebase
- Scalable design patterns

### Completeness
- Frontend & Backend fully implemented
- Database models ready
- All major features coded
- Extensive documentation
- Demo-ready application

---

## 🔐 Security Considerations

- Environment variables for sensitive data
- Input validation & sanitization
- CORS properly configured
- Error messages don't leak sensitive info
- Ready for authentication layer addition

---

## 📈 Performance Targets

- API response time: < 500ms
- Frontend load time: < 3s
- Lighthouse score: > 90
- Compatibility check accuracy: > 95%

---

## 🎓 Learning Resources

Each component includes:
- Clear code comments
- Type hints (JSDoc)
- Error messages
- Usage examples
- Integration patterns

---

**Status:** MVP Complete ✅  
**Ready for:** Hackathon Demo & Deployment  
**Last Updated:** November 26, 2024

---

Generated automatically for the Hackaton hackton-sparepart-ai project.
