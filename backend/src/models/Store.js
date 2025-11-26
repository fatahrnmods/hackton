const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: String,
  owner: String, // UMKM name
  location: {
    latitude: Number,
    longitude: Number,
    address: String,
    city: String,
    province: String
  },
  phone: String,
  email: String,
  website: String,
  inventory: [
    {
      partId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  services: [String], // 'consultation', 'installation', 'repair'
  technicians: [
    {
      name: String,
      expertise: [String],
      phone: String
    }
  ],
  operatingHours: {
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String }
  },
  rating: Number,
  reviews: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Store', storeSchema);
