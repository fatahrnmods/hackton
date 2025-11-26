const mongoose = require('mongoose');

const buildSchema = new mongoose.Schema({
  userId: String,
  title: String,
  budget: Number,
  purpose: String, // gaming, workstation, office, etc.
  components: [
    {
      category: String,
      partId: mongoose.Schema.Types.ObjectId,
      partName: String,
      price: Number,
      specifications: String
    }
  ],
  totalCost: Number,
  compatibility: {
    isCompatible: Boolean,
    issues: [String],
    warnings: [String]
  },
  tutorial: {
    steps: [
      {
        step: Number,
        title: String,
        description: String,
        videoUrl: String,
        tips: [String]
      }
    ]
  },
  savedAt: { type: Date, default: Date.now },
  sharedWith: [String] // User IDs
});

module.exports = mongoose.model('Build', buildSchema);
