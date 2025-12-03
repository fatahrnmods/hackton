// src/services/gemini.js

const GEMINI_API_KEY = localStorage.getItem('GEMINI_API_KEY') || '';

// Mock delays to simulate API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const setApiKey = (key) => {
  localStorage.setItem('GEMINI_API_KEY', key);
};

export const getApiKey = () => localStorage.getItem('GEMINI_API_KEY');

export const chatWithGemini = async (message, history = []) => {
  // In a real app, this would call the Google Generative AI API
  // using `GEMINI_API_KEY`.

  await delay(1500); // Simulate network latency

  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('rakit') || lowerMsg.includes('build')) {
    return "Untuk rekomendasi rakitan PC, silakan beritahu budget dan kebutuhan penggunaan Anda (misal: Gaming, Rendering, atau Office). Saya akan bantu pilihkan komponen terbaik.";
  }

  if (lowerMsg.includes('harga') || lowerMsg.includes('price')) {
    return "Saya bisa memprediksi harga pasar. Silakan gunakan fitur 'Cek Harga' di menu utama untuk hasil yang lebih akurat berdasarkan data terkini.";
  }

  return "Saya adalah AI asisten Toko Sparepart. Saya bisa membantu Anda mencari komponen yang cocok, mengecek kompatibilitas, atau memberikan estimasi harga. Ada yang bisa dibantu?";
};

export const analyzePCBuild = async (components) => {
  await delay(2000);

  // Mock logic for compatibility
  const issues = [];
  const suggestions = [];

  if (components.cpu && components.motherboard) {
    if (components.cpu.includes('Intel') && components.motherboard.includes('AMD')) {
      issues.push("Kompatibilitas Kritis: CPU Intel tidak cocok dengan Motherboard socket AMD.");
    }
  }

  if (!components.gpu) {
    suggestions.push("Saran: Tambahkan GPU dedicated jika PC ini untuk gaming berat.");
  }

  if (issues.length === 0) {
    return {
      status: 'Compatible',
      message: "Rakitan terlihat aman! Semua komponen kompatibel.",
      score: 95,
      suggestions
    };
  } else {
    return {
      status: 'Incompatible',
      message: "Ditemukan masalah kompatibilitas.",
      issues,
      suggestions,
      score: 40
    };
  }
};

export const estimateMarketPrice = async (productName, specs) => {
  await delay(1800);

  // Random variance for demo
  const basePrice = 1000000;
  const variance = Math.floor(Math.random() * 500000);

  return {
    estimatedPrice: basePrice + variance,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    confidence: '85%',
    marketData: "Berdasarkan rata-rata penjualan 30 hari terakhir di marketplace lokal."
  };
};
