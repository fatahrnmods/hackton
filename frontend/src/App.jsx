import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import PCBuilder from './pages/PCBuilder';
import PriceEstimator from './pages/PriceEstimator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/builder" element={<PCBuilder />} />
          <Route path="/pricing" element={<PriceEstimator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
