const express = require('express');
const router = express.Router();
const { calculateAveragePrice } = require('../utils/scraper');

/**
 * POST /api/pricing/calculate
 * Calculate dynamic price based on market data
 */
router.post('/calculate', async (req, res) => {
  try {
    const { partId, marketPrices } = req.body;
    
    if (!marketPrices || !Array.isArray(marketPrices)) {
      return res.status(400).json({ error: 'Market prices required' });
    }

    const averagePrice = calculateAveragePrice(marketPrices);
    
    // Dynamic pricing algorithm
    // Base price = average
    // Apply factors: demand, stock availability, store margin
    const dynamicPrice = {
      basePrice: averagePrice,
      margin: Math.round(averagePrice * 0.15), // 15% margin
      sellingPrice: Math.round(averagePrice * 1.15),
      marketplaceBreakdown: marketPrices.reduce((acc, p) => {
        acc[p.marketplace] = p.price;
        return acc;
      }, {}),
      timestamp: new Date()
    };

    res.json({
      success: true,
      pricing: dynamicPrice
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/pricing/market-comparison/:partName
 * Get price comparison across marketplaces
 */
router.get('/market-comparison/:partName', async (req, res) => {
  try {
    const { partName } = req.params;
    
    // Mock data - in production, call scraper service
    const mockComparison = {
      partName,
      marketplaces: {
        shopee: { price: 1200000, availability: true },
        lazada: { price: 1250000, availability: true },
        tokopedia: { price: 1180000, availability: true },
        blibli: { price: 1300000, availability: false }
      },
      lowestPrice: 1180000,
      lowestMarketplace: 'tokopedia',
      timestamp: new Date()
    };

    res.json({
      success: true,
      comparison: mockComparison
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/pricing/bulk-calculate
 * Calculate pricing for multiple parts
 */
router.post('/bulk-calculate', async (req, res) => {
  try {
    const { parts } = req.body;
    
    if (!Array.isArray(parts)) {
      return res.status(400).json({ error: 'Array of parts required' });
    }

    const results = parts.map(part => ({
      partId: part.id,
      basePrice: calculateAveragePrice(part.marketPrices),
      sellingPrice: Math.round(calculateAveragePrice(part.marketPrices) * 1.15)
    }));

    res.json({
      success: true,
      pricing: results,
      totalEstimate: results.reduce((sum, p) => sum + p.sellingPrice, 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
