import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Components
import AIConsultant from './components/AIConsultant';
import CompatibilityChecker from './components/CompatibilityChecker';
import NearestStoresFinder from './components/NearestStoresFinder';
import PCBuildCreator from './components/PCBuildCreator';

// Pages
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import ConsultantPage from './pages/ConsultantPage';
import StoresPage from './pages/StoresPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">🖥️ Hackton Sparepart AI</h1>
              <div className="flex gap-4">
                <a href="/" className="hover:text-blue-200 transition">Home</a>
                <a href="/builder" className="hover:text-blue-200 transition">Builder</a>
                <a href="/consultant" className="hover:text-blue-200 transition">Consultant</a>
                <a href="/stores" className="hover:text-blue-200 transition">Stores</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<BuilderPage />} />
            <Route path="/consultant" element={<ConsultantPage />} />
            <Route path="/stores" element={<StoresPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>© 2024 Hackton Sparepart AI - Memberdayakan UMKM Lokal dengan Teknologi AI</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
