const storeService = {
  getStoresByLocation: (latitude, longitude, maxDistance) => {
    // Logic untuk mendapatkan stores berdasarkan location
    return [];
  },

  getStoreInventory: (storeId) => {
    // Logic untuk mendapatkan inventory store
    return [];
  },

  checkStoreAvailability: (storeId, partId) => {
    // Check apakah part tersedia di store
    return { available: true, quantity: 5, price: 1200000 };
  }
};

module.exports = storeService;
