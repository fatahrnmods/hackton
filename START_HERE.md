# 🎯 START HERE - Project Overview

Welcome to **Hackton - AI-Powered Computer Spareparts Marketplace**!

This document will guide you through what has been built and how to get started.

---

## 📌 What is This Project?

A complete, full-stack web application that:
- ✅ Helps users build PCs with AI validation
- ✅ Shows real-time prices from multiple marketplaces
- ✅ Connects users with local sparepart shops (UMKM)
- ✅ Provides AI consultant for recommendations
- ✅ Finds nearest stores based on geolocation

**Theme:** "Usaha Lokal & AI Inklusif"

---

## 🚀 Quick Start (Pick One)

### Option 1: Auto Install (Recommended)

**Windows:**
```bash
install.bat
```

**Mac/Linux:**
```bash
bash install.sh
```

### Option 2: Manual Install

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### Configure & Run

Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_key_here
```

Run both:
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

**Open:** http://localhost:5173

---

## 📚 Documentation Map

| Document | What | When to Read |
|----------|------|--------------|
| **QUICK_REFERENCE.md** | Quick commands & links | First time |
| **README.md** | Project summary | Overview |
| **SETUP_GUIDE.md** | Installation steps | Before running |
| **API_DOCUMENTATION.md** | API endpoints | Testing backend |
| **PROJECT_STRUCTURE.md** | File organization | Understanding code |
| **PROGRESS.md** | Development status | Checking tasks |
| **ROADMAP.md** | Future plans | After launch |
| **LAUNCH_CHECKLIST.md** | Pre-demo tasks | Before presentation |
| **COMPLETION_SUMMARY.md** | What's built | After setup |

---

## 🎯 Main Features

### 1. 🖥️ PC Build Creator
- Select components
- See total cost
- Check compatibility
- Save for later

**Location:** `/builder` page

### 2. ✓ Compatibility Checker
- CPU ↔ Motherboard match
- RAM compatibility
- Power supply check
- Real-time validation

**Location:** `/builder` page (right side)

### 3. 💰 Dynamic Pricing
- Compare prices across marketplaces
- See average cost
- Budget tracking
- Real-time updates

**Location:** Integrated in build creator

### 4. 🤖 AI Consultant
- Chat with friendly AI
- Get recommendations
- Ask anything about PC parts
- Tutorial generation

**Location:** `/consultant` page

### 5. 📍 Store Finder
- Geolocation detection
- Find nearest shops
- See technicians available
- Check operating hours

**Location:** `/stores` page

### 6. 👨‍🔧 Technician Connection
- Request consultation
- Connect with experts
- Local support
- Problem solving

**Location:** Via consultant page

---

## 🛠️ Tech Stack

```
Frontend:    React + Vite + TailwindCSS
Backend:     Node.js + Express + Socket.io
Database:    MongoDB
AI:          Gemini API
```

---

## 📁 Project Structure

```
hackton-sparepart-ai/
├── backend/              # Server & APIs
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Database schemas
│   │   └── utils/        # Algorithms
│   └── package.json
│
├── frontend/             # React App
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page layouts
│   │   └── services/     # API calls
│   └── package.json
│
└── [Documentation files]
```

---

## ✨ 6 Major Features

### Feature 1: Compatibility Checker ✓
```
How: User inputs components → AI validates → Shows issues/warnings
Where: /builder page
Technology: Custom algorithms in compatibility.js
```

### Feature 2: Dynamic Pricing 💰
```
How: Scrapes 4 marketplaces → Calculates average → Suggests price
Where: Build creator component
Technology: Web scraping + pricing algorithms
```

### Feature 3: Nearest Store Finder 📍
```
How: Gets user location → Calculates distances → Shows nearest
Where: /stores page
Technology: Geolocation + Haversine formula
```

### Feature 4: PC Build Creator 🖥️
```
How: User adds parts → System calculates total → Can save
Where: /builder page
Technology: React state management + API calls
```

### Feature 5: AI Consultant 🤖
```
How: User asks question → AI responds → Gives recommendations
Where: /consultant page
Technology: Gemini API + chat interface
```

### Feature 6: UMKM Support 🏪
```
How: Connects users with local shops → Shows inventory → Technician help
Where: /stores page
Technology: Store database + matching algorithm
```

---

## 🎓 How to Use Each Feature

### Build a PC (Step-by-Step)

1. **Open** http://localhost:5173
2. **Click** "Mulai Build" button
3. **Navigate** to `/builder` page
4. **Fill** PC build form:
   - Judul Build
   - Budget
   - Tujuan (gaming/workstation/office)
5. **Add components** one by one
6. **See total cost** calculated
7. **Click "Simpan Build"** to save

### Check Compatibility

1. **Go to** `/builder` page
2. **Scroll right** to compatibility checker
3. **Fill in** your components
4. **Click** "Cek Kompatibilitas"
5. **See results** - compatible or issues?

### Chat with AI

1. **Go to** `/consultant` page
2. **Type question** about PC parts
3. **AI responds** with helpful advice
4. **Keep chatting** to get recommendations

### Find Nearest Stores

1. **Go to** `/stores` page
2. **Allow geolocation** permission
3. **Click** "Cari Toko Terdekat"
4. **See stores** sorted by distance
5. **Click store** for details

---

## 🔌 API Endpoints (17 Total)

### Compatibility (2)
```
POST   /api/compatibility/check
GET    /api/compatibility/recommendations/:purpose/:budget
```

### Pricing (3)
```
POST   /api/pricing/calculate
GET    /api/pricing/market-comparison/:partName
POST   /api/pricing/bulk-calculate
```

### Stores (3)
```
POST   /api/stores/nearest
GET    /api/stores/:storeId
POST   /api/stores/search
```

### Builds (5)
```
POST   /api/builds/create
GET    /api/builds/:buildId
GET    /api/builds/user/:userId
PUT    /api/builds/:buildId
DELETE /api/builds/:buildId
```

### Consultant (4)
```
POST   /api/consultant/chat
POST   /api/consultant/recommend-build
POST   /api/consultant/generate-tutorial
POST   /api/consultant/technician-connection
```

---

## 🧪 Test It Out

### Test Backend APIs
Use **Postman** or **cURL**:

```bash
# Test compatibility
curl -X POST http://localhost:5000/api/compatibility/check \
  -H "Content-Type: application/json" \
  -d '{"components":{"cpu":{"socket":"LGA1700"},"motherboard":{"socket":"LGA1700"}}}'
```

### Test Frontend
Open http://localhost:5173 and try:
1. Click through all pages
2. Fill out build form
3. Test compatibility checker
4. Try AI consultant chat
5. Find stores near you

---

## 📊 What's Included

### Code Files
- 15 backend files
- 11 frontend files
- Total: 37 files

### Documentation
- 9 comprehensive guides
- Installation scripts
- API examples
- Code comments

### Features
- 6 major features
- 17 API endpoints
- 10+ React components
- Mock data included

### Ready-to-Use
- Complete backend API
- Full frontend UI
- Database models
- Mock data
- Error handling
- Real-time support

---

## ❓ Common Questions

### Q: Do I need MongoDB installed?
**A:** Yes. Download from mongodb.com or use MongoDB Atlas cloud service.

### Q: What's Gemini API key?
**A:** AI engine. Get free at ai.google.dev

### Q: Can I run just frontend?
**A:** Yes, but backend APIs won't work. Need both for full functionality.

### Q: How do I deploy this?
**A:** Frontend to Vercel, Backend to Heroku. See ROADMAP.md

### Q: Is authentication included?
**A:** Not yet. Can be added next phase.

### Q: Can I add payment?
**A:** Yes! Add payment gateway to build checkout flow.

---

## 🎯 Learning Path

**Day 1: Setup & Explore**
- Install project
- Run both servers
- Browse all pages
- Test features

**Day 2: Understand Code**
- Read PROJECT_STRUCTURE.md
- Review backend controllers
- Check frontend components
- Understand API flow

**Day 3: Modify & Extend**
- Make UI changes
- Test API endpoints
- Add new features
- Deploy locally

---

## 🚀 Next Steps

1. **Install** - Follow Quick Start above
2. **Explore** - Click through all pages
3. **Test** - Use API test commands
4. **Read** - Check documentation
5. **Modify** - Make it your own
6. **Deploy** - Share with world!

---

## 📞 Need Help?

### Check These First:
1. **QUICK_REFERENCE.md** - Common commands
2. **SETUP_GUIDE.md** - Installation issues
3. **API_DOCUMENTATION.md** - API questions
4. **LAUNCH_CHECKLIST.md** - Demo preparation

### Common Issues:
- MongoDB not connecting? Start mongod
- API key error? Add to .env
- Port in use? Change in .env
- Frontend won't load? Check backend running

---

## 🎊 You're All Set!

Everything is ready to go. Just:

```bash
# Install
install.bat  (Windows)  OR  bash install.sh  (Mac/Linux)

# Configure
Edit backend/.env

# Run
Terminal 1: cd backend && npm run dev
Terminal 2: cd frontend && npm run dev

# Access
Open http://localhost:5173
```

---

## 🌟 Key Files to Know

| File | Purpose |
|------|---------|
| `backend/server.js` | Server entry point |
| `frontend/src/App.jsx` | Main React app |
| `QUICK_REFERENCE.md` | Quick help |
| `API_DOCUMENTATION.md` | API guide |
| `SETUP_GUIDE.md` | Installation |

---

## 🎓 Key Concepts

**Compatibility:** Checking if PC parts work together  
**Dynamic Pricing:** Real-time price from marketplaces  
**Geolocation:** Finding nearest physical stores  
**AI Consultant:** Gemini API for recommendations  
**UMKM:** Supporting local businesses  

---

## ✅ Features Ready Today

| Feature | Ready | UI | Backend | DB |
|---------|-------|----|---------|----|
| Compatibility | ✅ | ✅ | ✅ | ✅ |
| Pricing | ✅ | ✅ | ✅ | ✅ |
| Store Finder | ✅ | ✅ | ✅ | ✅ |
| Build Creator | ✅ | ✅ | ✅ | ✅ |
| AI Consultant | ✅ | ✅ | ✅ | - |
| Store Management | ✅ | - | ✅ | ✅ |

---

**Ready to build amazing things?** 🚀

Follow Quick Start above and let's go!

---

*Last Updated: November 26, 2024*  
*Project: hackton-sparepart-ai*  
*Status: MVP Complete & Demo Ready*
