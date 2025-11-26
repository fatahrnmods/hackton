/**
 * Location and Store routing service
 */

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Find nearest stores from user location
 */
const findNearestStores = (userLocation, stores, maxDistance = 50) => {
  const storesWithDistance = stores.map(store => {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      store.location.latitude,
      store.location.longitude
    );
    
    return {
      ...store,
      distance,
      estimatedTravelTime: Math.round(distance / 40 * 60) // Assuming 40 km/h average speed
    };
  });

  return storesWithDistance
    .filter(store => store.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
};

/**
 * Optimize delivery/pickup route
 */
const optimizeRoute = (origin, destinations) => {
  // Simple nearest neighbor algorithm
  const visited = new Set();
  const route = [origin];
  let current = origin;
  let totalDistance = 0;

  while (visited.size < destinations.length) {
    let nearest = null;
    let nearestDistance = Infinity;

    destinations.forEach((dest, idx) => {
      if (!visited.has(idx)) {
        const distance = calculateDistance(
          current.latitude,
          current.longitude,
          dest.latitude,
          dest.longitude
        );
        
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = { ...dest, index: idx };
        }
      }
    });

    if (nearest) {
      visited.add(nearest.index);
      route.push(nearest);
      totalDistance += nearestDistance;
      current = nearest;
    }
  }

  return {
    route,
    totalDistance,
    estimatedTime: Math.round(totalDistance / 40 * 60)
  };
};

/**
 * Check store availability based on operating hours
 */
const isStoreOpen = (store, currentTime = new Date()) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = days[currentTime.getDay()];
  
  const hours = store.operatingHours[dayName];
  if (!hours) return false;

  const [openHour, openMin] = hours.open.split(':').map(Number);
  const [closeHour, closeMin] = hours.close.split(':').map(Number);

  const currentHour = currentTime.getHours();
  const currentMin = currentTime.getMinutes();
  const currentTotalMin = currentHour * 60 + currentMin;
  const openTotalMin = openHour * 60 + openMin;
  const closeTotalMin = closeHour * 60 + closeMin;

  return currentTotalMin >= openTotalMin && currentTotalMin < closeTotalMin;
};

module.exports = {
  calculateDistance,
  findNearestStores,
  optimizeRoute,
  isStoreOpen
};
