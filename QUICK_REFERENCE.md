# 📖 Quick Reference Card

## 🚀 Start Project (3 Steps)

### Step 1: Install
```bash
# Windows
install.bat

# Linux/Mac
bash install.sh
```

### Step 2: Configure
Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_key_here
NODE_ENV=development
```

### Step 3: Run
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

**Access:** http://localhost:5173

---

## 📱 Frontend Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Feature showcase |
| Builder | `/builder` | Create PC builds |
| Consultant | `/consultant` | Chat with AI |
| Stores | `/stores` | Find nearby stores |

---

## 🔌 API Base URL
```
http://localhost:5000/api
```

---

## 🧪 Test API Endpoints

### Compatibility Check
```bash
curl -X POST http://localhost:5000/api/compatibility/check \
  -H "Content-Type: application/json" \
  -d '{
    "components": {
      "cpu": {"name": "Intel i5", "socket": "LGA1700"},
      "motherboard": {"name": "ASUS TUF", "socket": "LGA1700"}
    }
  }'
```

### Find Stores
```bash
curl -X POST http://localhost:5000/api/stores/nearest \
  -H "Content-Type: application/json" \
  -d '{
    "latitude": -6.2088,
    "longitude": 106.8456,
    "maxDistance": 50
  }'
```

### Chat with AI
```bash
curl -X POST http://localhost:5000/api/consultant/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Saya ingin gaming PC budget 10 juta"
  }'
```

---

## 📂 Key Files to Know

### Backend Core
```
backend/server.js                    ← Start here
backend/src/controllers/             ← Add routes
backend/src/utils/compatibility.js   ← Core logic
```

### Frontend Core
```
frontend/src/App.jsx                 ← Main app
frontend/src/pages/HomePage.jsx      ← Edit landing
frontend/src/components/             ← Add UI
```

---

## 🎨 Tech Stack Quick View

```
Frontend:  React + Vite + TailwindCSS
Backend:   Node.js + Express + Socket.io
Database:  MongoDB + Mongoose
AI:        Gemini API
Scraping:  Cheerio + Axios
```

---

## 🐛 Common Issues

### Problem: MongoDB Connection Error
```bash
# Solution: Start MongoDB
mongod
# Or use MongoDB Atlas (update .env)
```

### Problem: Gemini API Error
```bash
# Solution: Add valid API key to .env
GEMINI_API_KEY=your_actual_key
```

### Problem: Port 5000 Already in Use
```bash
# Solution: Change PORT in backend/.env
PORT=5001
```

### Problem: CORS Error
```bash
# Solution: Already configured in server.js
# Just ensure frontend is at http://localhost:5173
```

---

## 📊 Data Structures

### Part
```javascript
{
  name: "Intel i5-13600K",
  category: "CPU",
  prices: [{marketplace, price, availability}],
  averagePrice: 2500000,
  compatibility: {cpus: [], gpus: [], rams: []}
}
```

### Build
```javascript
{
  userId: "user123",
  title: "Gaming PC",
  budget: 15000000,
  components: [{category, partName, price}],
  totalCost: 11000000,
  compatibility: {isCompatible, issues, warnings}
}
```

### Store
```javascript
{
  name: "PC Store Jaya",
  location: {latitude, longitude, address},
  services: ["consultation", "installation"],
  technicians: [{name, expertise, phone}],
  rating: 4.5
}
```

---

## 🎯 Feature Checklist

- [x] Compatibility Checker
- [x] Dynamic Pricing
- [x] Store Finder
- [x] Build Creator
- [x] AI Consultant
- [x] Location Services
- [x] Mock Data
- [x] Error Handling
- [x] Responsive UI
- [x] API Documentation

---

## 📚 Documentation Files

1. **README.md** - Project overview (start here!)
2. **SETUP_GUIDE.md** - Installation & running
3. **API_DOCUMENTATION.md** - API reference
4. **PROJECT_STRUCTURE.md** - File organization
5. **PROGRESS.md** - Development status
6. **ROADMAP.md** - Future plans
7. **LAUNCH_CHECKLIST.md** - Pre-demo checklist

---

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hackton-sparepart
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

### Frontend
Proxy automatically configured in vite.config.js

---

## 🧩 Component Structure

### Main Components
- `AIConsultant` - Chat interface
- `CompatibilityChecker` - Form validation
- `NearestStoresFinder` - Map + stores
- `PCBuildCreator` - Build form

### Helper Services
- `api.js` - Axios client
- `useAPI.js` - React hooks
- `socket` - Real-time communication

---

## 🔍 Testing Features

### Manual Testing Checklist
- [ ] Add components to build
- [ ] Check compatibility
- [ ] See price calculation
- [ ] Find nearby stores
- [ ] Chat with AI
- [ ] Save build
- [ ] View recommendations

### API Testing with Postman
1. Import API endpoints
2. Set base URL: `http://localhost:5000/api`
3. Test each endpoint
4. Verify responses

---

## 🚢 Deployment Commands

### Build Frontend
```bash
cd frontend
npm run build
# Output: dist/ folder
```

### Run Production Backend
```bash
cd backend
npm start
```

---

## 💡 Development Tips

### Hot Reload
Both Vite and Nodemon are configured for hot reload during development.

### Database Inspection
Use MongoDB Compass to view/edit data:
```
mongodb://localhost:27017
```

### API Documentation
Visit `http://localhost:5000/health` to verify backend is running.

### Console Debugging
- Browser: F12 → Console tab
- Backend: Check terminal output

---

## 🎓 Learning Path

1. Start with `README.md`
2. Follow `SETUP_GUIDE.md`
3. Review `PROJECT_STRUCTURE.md`
4. Explore `API_DOCUMENTATION.md`
5. Check `backend/server.js`
6. Review `frontend/src/App.jsx`
7. Try each component

---

## 🤝 Team Collaboration

### Backend Development
```bash
cd backend
# Make changes
# Test with Postman
# Commit to git
```

### Frontend Development
```bash
cd frontend
# Make changes
# See hot reload
# Commit to git
```

### Integration
Backend + Frontend communicate via:
- HTTP requests (Axios)
- WebSocket (Socket.io)

---

## 📈 Performance Tips

### Frontend
- Use React DevTools
- Check Lighthouse score
- Monitor bundle size

### Backend
- Use MongoDB Compass for queries
- Check API response times
- Monitor memory usage

---

## 🆘 Quick Help

### Need to...
| Task | Command |
|------|---------|
| Start backend | `cd backend && npm run dev` |
| Start frontend | `cd frontend && npm run dev` |
| Install dependencies | `npm install` (in each folder) |
| Build for production | `npm run build` |
| View API docs | Open `API_DOCUMENTATION.md` |
| Check status | Open browser to `http://localhost:5173` |
| View database | Use MongoDB Compass |
| Kill server | Ctrl+C in terminal |

---

## 🎯 Next Steps After Launch

1. ✅ **Setup Complete** - All infrastructure ready
2. ⏳ **Database Setup** - Connect MongoDB
3. ⏳ **API Testing** - Verify all endpoints
4. ⏳ **Frontend Testing** - Test all pages
5. ⏳ **Integration Testing** - Test end-to-end flows
6. ⏳ **Demo Preparation** - Prepare demo data
7. ⏳ **Presentation** - Show judges the app!

---

## 📞 Contact & Support

For issues or questions:
1. Check documentation files
2. Review API_DOCUMENTATION.md
3. Check PROGRESS.md for status
4. Review LAUNCH_CHECKLIST.md

---

**Happy Hacking! 🚀**

*Last Updated: November 26, 2024*
*Project: hackton-sparepart-ai*
*Theme: Usaha Lokal & AI Inklusif*
