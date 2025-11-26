import React from 'react';

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Hackton Sparepart AI</h1>
        <p className="text-xl opacity-90 mb-8">
          Platform e-commerce sparepart komputer berbasis AI yang mendukung UMKM lokal
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/builder" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
            🖥️ Mulai Build
          </a>
          <a href="/consultant" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition">
            🤖 Tanya AI
          </a>
          <a href="/stores" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition">
            🏪 Cari Toko
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">✨ Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathon Theme Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 Tema Hackathon</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong className="text-blue-600">"Usaha Lokal & AI Inklusif"</strong>
          </p>
          <p>
            Kami membangun solusi yang tidak hanya inovatif secara teknologi, tetapi juga memberdayakan 
            UMKM lokal untuk berkembang di era digital. Platform kami dirancang untuk inklusif dan mudah digunakan 
            oleh semua kalangan.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
            <p className="text-blue-900">
              💡 <strong>Visi:</strong> Menghubungkan pembeli dengan UMKM lokal melalui teknologi AI yang cerdas, 
              sehingga semua orang bisa membangun PC impian mereka dengan mudah dan terjangkau.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🛠️ Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Node.js + Express</li>
              <li>• MongoDB</li>
              <li>• Socket.io (Real-time)</li>
              <li>• Gemini API (LLM)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React + Vite</li>
              <li>• TailwindCSS</li>
              <li>• React Router</li>
              <li>• Axios</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: '✓',
    title: 'Cek Kompatibilitas',
    description: 'AI yang cerdas mengecek kompatibilitas komponen PC Anda secara real-time'
  },
  {
    icon: '💰',
    title: 'Dynamic Pricing',
    description: 'Harga dinamis berdasarkan data real-time dari Shopee, Lazada, Tokopedia, Blibli'
  },
  {
    icon: '📍',
    title: 'Toko Terdekat',
    description: 'Temukan toko sparepart terdekat dari lokasi Anda dengan rating terbaik'
  },
  {
    icon: '🤖',
    title: 'AI Consultant',
    description: 'Konsultasikan kebutuhan Anda dengan AI yang ramah dan berpengalaman'
  },
  {
    icon: '📖',
    title: 'Tutorial Rakit PC',
    description: 'Panduan step-by-step yang mudah dipahami untuk pemula'
  },
  {
    icon: '👨‍🔧',
    title: 'Konsultasi Teknisi',
    description: 'Terhubung dengan teknisi profesional lokal untuk bantuan teknis'
  }
];

export default HomePage;
