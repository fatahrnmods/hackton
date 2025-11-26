require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackton-sparepart')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
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
