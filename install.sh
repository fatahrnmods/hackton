#!/bin/bash

# Installation script untuk hackton-sparepart-ai

echo "=========================================="
echo "Hackton Sparepart AI - Installation Script"
echo "=========================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 16 or higher."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo "✓ NPM version: $(npm -v)"
echo ""

# Backend Setup
echo "Setting up Backend..."
cd backend
echo "📦 Installing backend dependencies..."
npm install

if [ ! -f .env ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit backend/.env and add your Gemini API key"
fi

cd ..
echo "✓ Backend setup complete"
echo ""

# Frontend Setup
echo "Setting up Frontend..."
cd frontend
echo "📦 Installing frontend dependencies..."
npm install
cd ..
echo "✓ Frontend setup complete"
echo ""

echo "=========================================="
echo "✓ Installation Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and add GEMINI_API_KEY"
echo "2. Edit backend/.env and add MONGODB_URI"
echo "3. Run backend: cd backend && npm run dev"
echo "4. Run frontend: cd frontend && npm run dev"
echo "5. Open http://localhost:5173 in browser"
echo ""
echo "Happy coding! 🚀"
