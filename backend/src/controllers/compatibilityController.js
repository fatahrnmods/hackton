const express = require('express');
const router = express.Router();
const { validateBuild } = require('../utils/compatibility');

/**
 * POST /api/compatibility/check
 * Check compatibility of PC components
 */
router.post('/check', async (req, res) => {
  try {
    const { components } = req.body;
    
    if (!components) {
      return res.status(400).json({ error: 'Components data required' });
    }

    const result = validateBuild(components);
    
    res.json({
      success: true,
      compatibility: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/compatibility/recommendations/:purpose/:budget
 * Get component recommendations based on purpose and budget
 */
router.get('/recommendations/:purpose/:budget', async (req, res) => {
  try {
    const { purpose, budget } = req.params;
    
    // Basic recommendations based on purpose and budget
    const recommendations = {
      gaming: {
        budget: `Under ${budget} IDR`,
        cpu: 'Intel i5 13th Gen / AMD Ryzen 5 5500',
        gpu: 'RTX 4060 / RX 6600',
        ram: '16GB DDR5',
        storage: '512GB SSD',
        psu: '650W'
      },
      workstation: {
        budget: `Under ${budget} IDR`,
        cpu: 'Intel i7 / AMD Ryzen 7',
        gpu: 'RTX 4070 / RX 6700',
        ram: '32GB DDR5',
        storage: '1TB SSD + 2TB HDD',
        psu: '850W'
      },
      office: {
        budget: `Under ${budget} IDR`,
        cpu: 'Intel i3 / AMD Ryzen 3',
        gpu: 'Integrated',
        ram: '8GB DDR4',
        storage: '256GB SSD',
        psu: '400W'
      }
    };

    const result = recommendations[purpose.toLowerCase()] || recommendations.office;
    
    res.json({
      success: true,
      purpose,
      budget,
      recommendations: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
