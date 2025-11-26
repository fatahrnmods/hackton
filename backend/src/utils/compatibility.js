/**
 * Check compatibility between PC components
 */

const compatibilityRules = {
  cpu_socket: {
    'Intel 13th': ['LGA1700'],
    'Intel 12th': ['LGA1700'],
    'AMD Ryzen 5000': ['AM4'],
    'AMD Ryzen 7000': ['AM5']
  },
  ram_type: {
    'LGA1700': 'DDR5',
    'AM5': 'DDR5',
    'AM4': 'DDR4'
  },
  power_requirements: {
    'RTX 4090': 850,
    'RTX 4080': 750,
    'RTX 4070': 700,
    'RTX 4060': 550
  }
};

const checkCPUCompatibility = (cpu, motherboard) => {
  if (!cpu.socket || !motherboard.socket) {
    return { compatible: false, reason: 'Socket information missing' };
  }
  
  if (cpu.socket === motherboard.socket) {
    return { compatible: true, reason: 'CPU and motherboard socket match' };
  }
  
  return { 
    compatible: false, 
    reason: `CPU socket ${cpu.socket} doesn't match motherboard socket ${motherboard.socket}` 
  };
};

const checkRAMCompatibility = (ram, motherboard) => {
  if (!ram.type || !motherboard.socket) {
    return { compatible: false, reason: 'RAM or motherboard information missing' };
  }
  
  const expectedRamType = compatibilityRules.ram_type[motherboard.socket];
  
  if (ram.type === expectedRamType) {
    return { compatible: true, reason: 'RAM type matches motherboard' };
  }
  
  return { 
    compatible: false, 
    reason: `RAM type ${ram.type} not compatible with motherboard socket ${motherboard.socket}` 
  };
};

const checkPowerSupply = (components, psuWattage) => {
  let totalPower = 0;
  
  components.forEach(comp => {
    if (compatibilityRules.power_requirements[comp.model]) {
      totalPower += compatibilityRules.power_requirements[comp.model];
    }
  });
  
  const recommendedPower = totalPower * 1.2; // 20% overhead
  
  if (psuWattage >= recommendedPower) {
    return { compatible: true, reason: 'PSU power sufficient', totalRequired: totalPower, recommended: recommendedPower };
  }
  
  return { 
    compatible: false, 
    reason: `PSU wattage (${psuWattage}W) insufficient. Recommended: ${Math.ceil(recommendedPower)}W`,
    totalRequired: totalPower,
    recommended: recommendedPower
  };
};

const checkGPUCompatibility = (gpu, pcie) => {
  if (!gpu.interface || !pcie) {
    return { compatible: false, reason: 'GPU or PCIe information missing' };
  }
  
  // Modern GPUs compatible with PCIe 3.0+
  const minPCIeVersion = 3;
  
  if (pcie >= minPCIeVersion) {
    return { compatible: true, reason: `GPU compatible with PCIe ${pcie}.0` };
  }
  
  return { 
    compatible: false, 
    reason: `GPU requires PCIe ${minPCIeVersion}.0 or higher. Motherboard has PCIe ${pcie}.0` 
  };
};

const validateBuild = (build) => {
  const issues = [];
  const warnings = [];
  
  try {
    // Check CPU-Motherboard compatibility
    if (build.cpu && build.motherboard) {
      const cpuCheck = checkCPUCompatibility(build.cpu, build.motherboard);
      if (!cpuCheck.compatible) issues.push(cpuCheck.reason);
    }
    
    // Check RAM compatibility
    if (build.ram && build.motherboard) {
      const ramCheck = checkRAMCompatibility(build.ram, build.motherboard);
      if (!ramCheck.compatible) issues.push(ramCheck.reason);
    }
    
    // Check GPU compatibility
    if (build.gpu && build.motherboard) {
      const gpuCheck = checkGPUCompatibility(build.gpu, build.motherboard.pcie);
      if (!gpuCheck.compatible) issues.push(gpuCheck.reason);
    }
    
    // Check power supply
    if (build.psu) {
      const psuCheck = checkPowerSupply([build.gpu, build.cpu], build.psu.wattage);
      if (!psuCheck.compatible) {
        issues.push(psuCheck.reason);
      } else if (psuCheck.recommended > build.psu.wattage * 0.8) {
        warnings.push(`Consider upgrading to ${Math.ceil(psuCheck.recommended)}W PSU for better efficiency`);
      }
    }
    
    return {
      isCompatible: issues.length === 0,
      issues,
      warnings
    };
  } catch (error) {
    return {
      isCompatible: false,
      issues: ['Error validating build: ' + error.message],
      warnings: []
    };
  }
};

module.exports = {
  checkCPUCompatibility,
  checkRAMCompatibility,
  checkPowerSupply,
  checkGPUCompatibility,
  validateBuild
};
