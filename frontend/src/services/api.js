import axios from 'axios';
import io from 'socket.io-client';

// Determine API base URL based on environment
const getApiBaseUrl = () => {
  // Check if running in development
  if (process.env.NODE_ENV === 'development') {
    // If we have a custom API URL, use it
    if (process.env.REACT_APP_API_URL) {
      return process.env.REACT_APP_API_URL;
    }
    
    // If running in Codespaces or similar, construct URL dynamically
    const hostname = window.location.hostname;
    if (hostname.includes('app.github.dev')) {
      // Extract the base domain and replace port
      const backendUrl = hostname.replace(/5173/, '5000');
      return `https://${backendUrl}/api`;
    }
    
    // Default to localhost
    return 'http://localhost:5000/api';
  }
  
  // Production: use relative path or environment variable
  return process.env.REACT_APP_API_URL || '/api';
};

const getSocketUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.REACT_APP_SOCKET_URL) {
      return process.env.REACT_APP_SOCKET_URL;
    }
    
    const hostname = window.location.hostname;
    if (hostname.includes('app.github.dev')) {
      const backendUrl = hostname.replace(/5173/, '5000');
      return `https://${backendUrl}`;
    }
    
    return 'http://localhost:5000';
  }
  
  return process.env.REACT_APP_SOCKET_URL || window.location.origin;
};

const API_BASE_URL = getApiBaseUrl();
const SOCKET_URL = getSocketUrl();

// Log untuk debugging
if (typeof window !== 'undefined') {
  console.log('🔧 API Configuration:');
  console.log('  Hostname:', window.location.hostname);
  console.log('  API Base URL:', API_BASE_URL);
  console.log('  Socket URL:', SOCKET_URL);
}

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
});

// Add response interceptor untuk logging errors
api.interceptors.response.use(
  response => response,
  error => {
    console.error('❌ API Error:', {
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      status: error.response?.status,
      message: error.message
    });
    return Promise.reject(error);
  }
);

const socket = io(SOCKET_URL, {
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
