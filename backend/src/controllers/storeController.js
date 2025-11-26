const express = require('express');
const router = express.Router();
const { findNearestStores, isStoreOpen } = require('../utils/locationService');

/**
 * POST /api/stores/nearest
 * Find nearest stores from user location
 */
router.post('/nearest', async (req, res) => {
  try {
    const { latitude, longitude, maxDistance = 50 } = req.body;
    
    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'User location required' });
    }

    // Mock stores data - in production, fetch from MongoDB
    const mockStores = [
      {
        _id: '1',
        name: 'PC Store Jaya',
        location: {
          latitude: -6.2088,
          longitude: 106.8456,
          address: 'Jl. Sudirman No. 10',
          city: 'Jakarta',
          province: 'DKI Jakarta'
        },
        phone: '021-123456',
        rating: 4.5,
        services: ['consultation', 'installation']
      },
      {
        _id: '2',
        name: 'Komputer Semarang',
        location: {
          latitude: -7.0056,
          longitude: 110.4114,
          address: 'Jl. Ahmad Yani No. 5',
          city: 'Semarang',
          province: 'Jawa Tengah'
        },
        phone: '024-234567',
        rating: 4.3,
        services: ['consultation', 'repair']
      }
    ];

    const userLocation = { latitude, longitude };
    const nearestStores = findNearestStores(userLocation, mockStores, maxDistance);

    // Add store open status
    const storesWithStatus = nearestStores.map(store => ({
      ...store,
      isOpen: isStoreOpen(store)
    }));

    res.json({
      success: true,
      count: storesWithStatus.length,
      stores: storesWithStatus
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/stores/:storeId
 * Get store details
 */
router.get('/:storeId', async (req, res) => {
  try {
    const { storeId } = req.params;
    
    // Mock store data - in production, fetch from MongoDB
    const mockStore = {
      _id: storeId,
      name: 'PC Store Jaya',
      owner: 'UMKM Elektronik Jaya',
      location: {
        latitude: -6.2088,
        longitude: 106.8456,
        address: 'Jl. Sudirman No. 10',
        city: 'Jakarta',
        province: 'DKI Jakarta'
      },
      phone: '021-123456',
      email: 'info@pcstore.id',
      website: 'www.pcstore.id',
      inventory: [
        { partId: '1', quantity: 5, price: 1200000 },
        { partId: '2', quantity: 3, price: 2500000 }
      ],
      services: ['consultation', 'installation', 'repair'],
      technicians: [
        { name: 'Budi', expertise: ['CPU', 'Cooling'], phone: '021-9876543' },
        { name: 'Adi', expertise: ['GPU', 'Storage'], phone: '021-9876544' }
      ],
      rating: 4.5,
      reviews: 234
    };

    res.json({
      success: true,
      store: mockStore
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/stores/search
 * Search stores by location or name
 */
router.post('/search', async (req, res) => {
  try {
    const { query, city } = req.body;
    
    // Mock search results
    const results = {
      total: 2,
      stores: [
        {
          name: 'PC Store Jaya',
          city: city || 'Jakarta',
          rating: 4.5,
          services: ['consultation', 'installation']
        }
      ]
    };

    res.json({
      success: true,
      results
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
