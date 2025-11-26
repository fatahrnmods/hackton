const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: String,
  category: String, // CPU, GPU, RAM, Storage, etc.
  brand: String,
  model: String,
  specification: {
    cores: Number,
    threads: Number,
    frequency: String,
    tdp: Number,
    memory: String,
    speed: String,
    interface: String
  },
  prices: [
    {
      marketplace: String, // Shopee, Lazada, Tokopedia, Blibli
      price: Number,
      timestamp: Date,
      availability: Boolean
    }
  ],
  averagePrice: Number,
  compatibility: {
    cpus: [String],
    gpus: [String],
    rams: [String],
    storages: [String],
    psus: [String]
  },
  reviews: Number,
  rating: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Part', partSchema);
