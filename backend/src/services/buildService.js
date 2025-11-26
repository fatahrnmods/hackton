const buildService = {
  validateBuild: (buildData) => {
    const required = ['userId', 'title', 'components'];
    for (let field of required) {
      if (!buildData[field]) {
        throw new Error(`${field} is required`);
      }
    }
    return true;
  },

  calculateTotalCost: (components) => {
    return components.reduce((sum, comp) => sum + (comp.price || 0), 0);
  },

  estimateBuildTime: (components) => {
    // Estimasi waktu untuk membangun PC
    const minutes = components.length * 30;
    const hours = Math.ceil(minutes / 60);
    return `${hours} hours`;
  }
};

module.exports = buildService;
