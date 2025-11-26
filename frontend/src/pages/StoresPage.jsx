import React from 'react';
import NearestStoresFinder from '../components/NearestStoresFinder';

const StoresPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🏪 Temukan Toko Terdekat</h1>
        <p className="text-gray-600 text-lg">
          Cari toko sparepart komputer terdekat dari lokasi Anda. Kami menampilkan toko UMKM lokal 
          dengan rating terbaik dan layanan lengkap.
        </p>
      </div>
      <NearestStoresFinder />
    </div>
  );
};

export default StoresPage;
