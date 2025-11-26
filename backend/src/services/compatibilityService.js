const compatibilityService = {
  validateComponents: (components) => {
    if (!components) throw new Error('Components required');
    
    const requiredFields = ['cpu', 'motherboard'];
    for (let field of requiredFields) {
      if (!components[field]) {
        throw new Error(`${field} information required`);
      }
    }
    
    return true;
  },

  analyzeCompatibility: (components) => {
    // Logic untuk analisis kompatibilitas
    return {
      isCompatible: true,
      issues: [],
      warnings: []
    };
  }
};

module.exports = compatibilityService;
