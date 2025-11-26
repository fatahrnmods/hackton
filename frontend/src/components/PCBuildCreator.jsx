import React, { useState } from 'react';
import { buildService } from '../services/api';

const PCBuildCreator = () => {
  const [formData, setFormData] = useState({
    title: '',
    budget: 0,
    purpose: 'gaming',
    components: []
  });

  const [newComponent, setNewComponent] = useState({
    category: 'CPU',
    name: '',
    price: 0
  });

  const [loading, setLoading] = useState(false);

  const categories = ['CPU', 'Motherboard', 'GPU', 'RAM', 'Storage', 'PSU', 'Case', 'Cooling'];

  const addComponent = () => {
    if (newComponent.name && newComponent.price > 0) {
      setFormData(prev => ({
        ...prev,
        components: [...prev.components, { ...newComponent }]
      }));
      setNewComponent({ category: 'CPU', name: '', price: 0 });
    }
  };

  const removeComponent = (idx) => {
    setFormData(prev => ({
      ...prev,
      components: prev.components.filter((_, i) => i !== idx)
    }));
  };

  const handleSaveBuild = async () => {
    if (!formData.title || formData.components.length === 0) {
      alert('Isi judul dan tambahkan komponen');
      return;
    }

    setLoading(true);
    try {
      const response = await buildService.createBuild({
        userId: 'user123', // In production, get from auth
        title: formData.title,
        budget: formData.budget,
        purpose: formData.purpose,
        components: formData.components
      });

      if (response.data.success) {
        alert('Build berhasil disimpan!');
        setFormData({ title: '', budget: 0, purpose: 'gaming', components: [] });
      }
    } catch (error) {
      console.error('Failed to save build:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalCost = formData.components.reduce((sum, c) => sum + c.price, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🖥️ Buat Build PC</h2>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Judul Build</label>
        <input
          type="text"
          placeholder="Contoh: Gaming PC Budget Friendly"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Budget (IDR)</label>
          <input
            type="number"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Tujuan</label>
          <select
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="gaming">Gaming</option>
            <option value="workstation">Workstation</option>
            <option value="office">Office</option>
          </select>
        </div>
      </div>

      {/* Add Component Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Tambah Komponen</h3>
        <div className="grid grid-cols-3 gap-3 mb-3">
          <select
            value={newComponent.category}
            onChange={(e) => setNewComponent({ ...newComponent, category: e.target.value })}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nama Part"
            value={newComponent.name}
            onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="number"
            placeholder="Harga"
            value={newComponent.price}
            onChange={(e) => setNewComponent({ ...newComponent, price: Number(e.target.value) })}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          onClick={addComponent}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          + Tambah Komponen
        </button>
      </div>

      {/* Components List */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Komponen yang Dipilih</h3>
        <div className="space-y-2">
          {formData.components.map((comp, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded">
              <div>
                <div className="font-semibold text-gray-800">{comp.category}: {comp.name}</div>
                <div className="text-sm text-gray-600">Rp {comp.price.toLocaleString()}</div>
              </div>
              <button
                onClick={() => removeComponent(idx)}
                className="text-red-600 hover:text-red-800 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="border-t-2 pt-4 mb-6">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total Cost:</span>
          <span className="text-blue-600">Rp {totalCost.toLocaleString()}</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Budget: Rp {formData.budget.toLocaleString()}
          {totalCost > formData.budget && (
            <span className="text-red-600 ml-2">⚠️ Melebihi budget</span>
          )}
        </div>
      </div>

      <button
        onClick={handleSaveBuild}
        disabled={loading}
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
      >
        {loading ? 'Menyimpan...' : '💾 Simpan Build'}
      </button>
    </div>
  );
};

export default PCBuildCreator;
