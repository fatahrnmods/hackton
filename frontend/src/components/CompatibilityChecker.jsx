import React, { useState } from 'react';
import { compatibilityService } from '../services/api';

const CompatibilityChecker = () => {
  const [components, setComponents] = useState({
    cpu: { name: '', socket: '' },
    motherboard: { name: '', socket: '' },
    ram: { name: '', type: '' },
    gpu: { name: '', interface: '' },
    psu: { wattage: 0 }
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (category, field, value) => {
    setComponents(prev => ({
      ...prev,
      [category]: { ...prev[category], [field]: value }
    }));
  };

  const handleCheck = async () => {
    setLoading(true);
    try {
      const response = await compatibilityService.checkCompatibility(components);
      setResult(response.data.compatibility);
    } catch (error) {
      console.error('Compatibility check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🔍 Cek Kompatibilitas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* CPU */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">CPU</label>
          <input
            type="text"
            placeholder="Nama CPU (e.g., Intel i5-13600K)"
            value={components.cpu.name}
            onChange={(e) => handleInputChange('cpu', 'name', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Socket (e.g., LGA1700)"
            value={components.cpu.socket}
            onChange={(e) => handleInputChange('cpu', 'socket', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Motherboard */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Motherboard</label>
          <input
            type="text"
            placeholder="Nama Motherboard"
            value={components.motherboard.name}
            onChange={(e) => handleInputChange('motherboard', 'name', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Socket (e.g., LGA1700)"
            value={components.motherboard.socket}
            onChange={(e) => handleInputChange('motherboard', 'socket', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* RAM */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">RAM</label>
          <input
            type="text"
            placeholder="Kapasitas & Tipe (e.g., 32GB DDR5)"
            value={components.ram.name}
            onChange={(e) => handleInputChange('ram', 'name', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* PSU */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Power Supply</label>
          <input
            type="number"
            placeholder="Wattage (e.g., 750)"
            value={components.psu.wattage}
            onChange={(e) => handleInputChange('psu', 'wattage', Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <button
        onClick={handleCheck}
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {loading ? 'Mengecek...' : '✓ Cek Kompatibilitas'}
      </button>

      {/* Result */}
      {result && (
        <div className={`mt-6 p-4 rounded-lg ${result.isCompatible ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <h3 className={`font-bold mb-3 ${result.isCompatible ? 'text-green-800' : 'text-red-800'}`}>
            {result.isCompatible ? '✓ Kompatibel!' : '✗ Tidak Kompatibel'}
          </h3>
          
          {result.issues.length > 0 && (
            <div className="mb-3">
              <p className="font-semibold text-red-700 mb-1">Masalah:</p>
              <ul className="list-disc list-inside space-y-1">
                {result.issues.map((issue, idx) => (
                  <li key={idx} className="text-red-700">{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {result.warnings.length > 0 && (
            <div>
              <p className="font-semibold text-yellow-700 mb-1">Peringatan:</p>
              <ul className="list-disc list-inside space-y-1">
                {result.warnings.map((warning, idx) => (
                  <li key={idx} className="text-yellow-700">{warning}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompatibilityChecker;
