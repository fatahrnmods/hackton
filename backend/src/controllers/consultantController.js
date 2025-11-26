const express = require('express');
const router = express.Router();
const {
  generateConsultantResponse,
  generateBuildRecommendation,
  generateBuildTutorial
} = require('../utils/geminiClient');

/**
 * POST /api/consultant/chat
 * Chat with AI consultant
 */
router.post('/chat', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    const response = await generateConsultantResponse(message, context);

    res.json({
      success: true,
      response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/consultant/recommend-build
 * Get AI build recommendation
 */
router.post('/recommend-build', async (req, res) => {
  try {
    const { budget, purpose, preferences } = req.body;
    
    if (!budget || !purpose) {
      return res.status(400).json({ error: 'Budget and purpose required' });
    }

    const recommendation = await generateBuildRecommendation(budget, purpose, preferences);

    res.json({
      success: true,
      recommendation
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/consultant/generate-tutorial
 * Generate step-by-step build tutorial
 */
router.post('/generate-tutorial', async (req, res) => {
  try {
    const { components } = req.body;
    
    if (!Array.isArray(components) || components.length === 0) {
      return res.status(400).json({ error: 'Components array required' });
    }

    const tutorial = await generateBuildTutorial(components);

    res.json({
      success: true,
      tutorial
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/consultant/technician-connection
 * Request connection to local technician
 */
router.post('/technician-connection', async (req, res) => {
  try {
    const { userLocation, serviceNeeded, buildInfo } = req.body;
    
    if (!userLocation || !serviceNeeded) {
      return res.status(400).json({ error: 'Location and service needed' });
    }

    const connectionRequest = {
      requestId: 'REQ-' + Date.now(),
      serviceNeeded,
      buildInfo,
      location: userLocation,
      status: 'pending',
      createdAt: new Date(),
      message: 'Permintaan konsultasi teknisi Anda telah dibuat. Teknisi lokal terdekat akan menghubungi Anda segera.'
    };

    res.json({
      success: true,
      request: connectionRequest
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
