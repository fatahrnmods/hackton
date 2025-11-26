const express = require('express');
const router = express.Router();

/**
 * POST /api/builds/create
 * Create new PC build
 */
router.post('/create', async (req, res) => {
  try {
    const { userId, title, budget, purpose, components } = req.body;
    
    if (!userId || !title || !budget) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const totalCost = components.reduce((sum, c) => sum + (c.price || 0), 0);

    const newBuild = {
      userId,
      title,
      budget,
      purpose,
      components,
      totalCost,
      savedAt: new Date()
    };

    res.json({
      success: true,
      build: newBuild,
      message: 'Build created successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/builds/:buildId
 * Get build details
 */
router.get('/:buildId', async (req, res) => {
  try {
    const { buildId } = req.params;
    
    // Mock build data
    const mockBuild = {
      _id: buildId,
      userId: 'user123',
      title: 'Gaming PC Build',
      budget: 15000000,
      purpose: 'gaming',
      components: [
        { category: 'CPU', partName: 'Intel i5-13600K', price: 2500000 },
        { category: 'GPU', partName: 'RTX 4060', price: 3200000 },
        { category: 'RAM', partName: '32GB DDR5', price: 1800000 },
        { category: 'Storage', partName: '1TB NVMe SSD', price: 800000 },
        { category: 'PSU', partName: '750W Gold', price: 1200000 },
        { category: 'Case', partName: 'NZXT H510', price: 1500000 }
      ],
      totalCost: 11000000,
      compatibility: {
        isCompatible: true,
        issues: [],
        warnings: []
      },
      savedAt: new Date()
    };

    res.json({
      success: true,
      build: mockBuild
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/builds/user/:userId
 * Get all builds by user
 */
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const mockBuilds = [
      {
        _id: 'build1',
        title: 'Gaming PC',
        purpose: 'gaming',
        totalCost: 15000000,
        savedAt: new Date()
      },
      {
        _id: 'build2',
        title: 'Workstation',
        purpose: 'workstation',
        totalCost: 20000000,
        savedAt: new Date()
      }
    ];

    res.json({
      success: true,
      builds: mockBuilds
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/builds/:buildId
 * Update build
 */
router.put('/:buildId', async (req, res) => {
  try {
    const { buildId } = req.params;
    const { title, budget, components } = req.body;

    const totalCost = components.reduce((sum, c) => sum + (c.price || 0), 0);

    res.json({
      success: true,
      message: 'Build updated',
      totalCost
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/builds/:buildId
 * Delete build
 */
router.delete('/:buildId', async (req, res) => {
  try {
    const { buildId } = req.params;

    res.json({
      success: true,
      message: 'Build deleted'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
