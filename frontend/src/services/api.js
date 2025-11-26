import axios from 'axios';
import io from 'socket.io-client';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
});

const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5
});

export const compatibilityService = {
  checkCompatibility: (components) => 
    api.post('/compatibility/check', { components }),
  
  getRecommendations: (purpose, budget) =>
    api.get(`/compatibility/recommendations/${purpose}/${budget}`)
};

export const pricingService = {
  calculatePrice: (partId, marketPrices) =>
    api.post('/pricing/calculate', { partId, marketPrices }),
  
  getMarketComparison: (partName) =>
    api.get(`/pricing/market-comparison/${partName}`),
  
  bulkCalculate: (parts) =>
    api.post('/pricing/bulk-calculate', { parts })
};

export const storeService = {
  findNearestStores: (latitude, longitude, maxDistance) =>
    api.post('/stores/nearest', { latitude, longitude, maxDistance }),
  
  getStoreDetails: (storeId) =>
    api.get(`/stores/${storeId}`),
  
  searchStores: (query, city) =>
    api.post('/stores/search', { query, city })
};

export const buildService = {
  createBuild: (buildData) =>
    api.post('/builds/create', buildData),
  
  getBuild: (buildId) =>
    api.get(`/builds/${buildId}`),
  
  getUserBuilds: (userId) =>
    api.get(`/builds/user/${userId}`),
  
  updateBuild: (buildId, updates) =>
    api.put(`/builds/${buildId}`, updates),
  
  deleteBuild: (buildId) =>
    api.delete(`/builds/${buildId}`)
};

export const consultantService = {
  chat: (message, context) =>
    api.post('/consultant/chat', { message, context }),
  
  recommendBuild: (budget, purpose, preferences) =>
    api.post('/consultant/recommend-build', { budget, purpose, preferences }),
  
  generateTutorial: (components) =>
    api.post('/consultant/generate-tutorial', { components }),
  
  requestTechnician: (userLocation, serviceNeeded, buildInfo) =>
    api.post('/consultant/technician-connection', { userLocation, serviceNeeded, buildInfo })
};

export { socket };
export default api;
