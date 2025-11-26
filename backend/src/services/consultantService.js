const consultantService = {
  formatChatMessage: (role, content) => {
    return {
      role,
      content,
      timestamp: new Date()
    };
  },

  validateChatInput: (message) => {
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty');
    }
    if (message.length > 1000) {
      throw new Error('Message too long');
    }
    return true;
  }
};

module.exports = consultantService;
