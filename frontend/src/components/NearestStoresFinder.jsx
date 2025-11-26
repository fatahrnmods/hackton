import React, { useState, useEffect } from 'react';
import { storeService } from '../services/api';

const NearestStoresFinder = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => console.error('Geolocation error:', error)
      );
    }
  }, []);

  const findNearestStores = async () => {
    if (!userLocation) {
      alert('Lokasi tidak tersedia. Aktifkan lokasi Anda.');
      return;
    }

    setLoading(true);
    try {
      const response = await storeService.findNearestStores(
        userLocation.latitude,
        userLocation.longitude,
        50
      );
      setStores(response.data.stores);
    } catch (error) {
      console.error('Failed to find stores:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🏪 Toko Terdekat</h2>

      <button
        onClick={findNearestStores}
        disabled={loading}
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 mb-6 transition"
      >
        {loading ? 'Mencari...' : '📍 Cari Toko Terdekat'}
      </button>

      <div className="space-y-4">
        {stores.map((store) => (
          <div key={store._id} className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{store.name}</h3>
                <p className="text-sm text-gray-600">{store.location.address}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-600">{store.distance?.toFixed(1)} km</div>
                <div className="text-sm text-yellow-600">⭐ {store.rating}/5</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
              <div>📱 {store.phone}</div>
              <div>🕒 {store.isOpen ? '✓ Buka' : '✗ Tutup'}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {store.services?.map((service) => (
                <span key={service} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm font-semibold">
              Lihat Detail & Hubungi
            </button>
          </div>
        ))}
      </div>

      {stores.length === 0 && !loading && (
        <div className="text-center text-gray-600 py-8">
          Klik tombol di atas untuk mencari toko terdekat
        </div>
      )}
    </div>
  );
};

export default NearestStoresFinder;
