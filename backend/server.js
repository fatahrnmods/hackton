require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Configure allowed origins
const getAllowedOrigins = () => {
  const origins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000'
  ];
  
  // Add Codespaces domain if in dev
  if (process.env.NODE_ENV !== 'production') {
    origins.push(/\.app\.github\.dev$/); // Regex to match any github.dev subdomain
  }
  
  // Add production domain if specified
  if (process.env.FRONTEND_URL) {
    origins.push(process.env.FRONTEND_URL);
  }
  
  return origins;
};

// Custom CORS origin checker function
const corsOriginChecker = (origin, callback) => {
  const allowed = getAllowedOrigins();
  
  // Allow requests with no origin (like mobile apps or curl requests)
  if (!origin) {
    return callback(null, true);
  }
  
  // Check against allowed origins
  for (let allowedOrigin of allowed) {
    if (allowedOrigin instanceof RegExp) {
      if (allowedOrigin.test(origin)) {
        return callback(null, true);
      }
    } else {
      if (allowedOrigin === origin) {
        return callback(null, true);
      }
    }
  }
  
  console.log('CORS blocked origin:', origin);
  return callback(null, false);
};

const io = new Server(server, {
  cors: {
    origin: corsOriginChecker,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowEIO3: true
  },
  transports: ['websocket', 'polling'],
  allowEIO3: true,
  pingInterval: 25000,
  pingTimeout: 20000
});

// Middleware
app.use(cors({
  origin: corsOriginChecker,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400
}));
app.use(express.json());

// Database Connection
let mongoConnected = false;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackton-sparepart', {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => {
    mongoConnected = true;
    console.log('✅ MongoDB connected');
  })
  .catch(err => {
    mongoConnected = false;
    console.log('⚠️  MongoDB connection error - Using mock data mode:', err.message);
  });

// Make MongoDB connection status available globally
global.mongoConnected = mongoConnected;
setInterval(() => {
  global.mongoConnected = mongoConnected;
}, 5000);

// Routes
// Root API info
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hackton Sparepart AI Backend',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      compatibility: '/api/compatibility',
      pricing: '/api/pricing',
      stores: '/api/stores',
      builds: '/api/builds',
      consultant: '/api/consultant',
      health: '/health'
    }
  });
});

app.use('/api/compatibility', require('./src/controllers/compatibilityController'));
app.use('/api/pricing', require('./src/controllers/pricingController'));
app.use('/api/stores', require('./src/controllers/storeController'));
app.use('/api/builds', require('./src/controllers/buildController'));
app.use('/api/consultant', require('./src/controllers/consultantController'));

// Socket.IO Events
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);
  
  socket.on('chat-message', (data) => {
    io.emit('chat-message', data);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
