const { GoogleGenerativeAI } = require('@google-cloud/generative-ai');

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = client.getGenerativeModel({ model: 'gemini-pro' });

/**
 * Generate AI consultant response
 */
const generateConsultantResponse = async (userMessage, context = {}) => {
  try {
    const systemPrompt = `You are a friendly and knowledgeable PC spareparts consultant. 
You understand:
- PC component specifications and compatibility
- Pros and cons of different parts
- Budget optimization for different use cases
- How to guide beginners in PC building
- Local store recommendations and technician consultations

Be humble, helpful, and always explain things in simple terms. 
When recommending parts, consider the user's budget and use case.
If technical consultation is needed, recommend connecting with a local technician.`;

    const conversationHistory = context.history || [];
    
    let prompt = `${systemPrompt}\n\nUser: ${userMessage}`;
    
    if (conversationHistory.length > 0) {
      prompt = `${systemPrompt}\n\nConversation History:\n${conversationHistory.join('\n')}\n\nUser: ${userMessage}`;
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      success: true,
      message: text,
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Gemini API error:', error);
    return {
      success: false,
      message: 'Maaf, saya sedang mengalami kesulitan. Silakan coba lagi.',
      error: error.message
    };
  }
};

/**
 * Generate PC build recommendations
 */
const generateBuildRecommendation = async (budget, purpose, preferences = {}) => {
  try {
    const prompt = `You are a PC building expert. Generate a detailed PC build recommendation with:
- Budget: ${budget} IDR
- Purpose: ${purpose}
- Preferences: ${JSON.stringify(preferences)}

Provide:
1. Recommended components (CPU, GPU, RAM, Storage, PSU, Case, Cooler)
2. Estimated total cost
3. Performance expectations
4. Pros and cons of this build
5. Alternative options if budget allows

Format the response as JSON with clear component details.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      success: true,
      recommendation: text,
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Build recommendation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate step-by-step PC build tutorial
 */
const generateBuildTutorial = async (components) => {
  try {
    const componentsList = components.map(c => `${c.category}: ${c.name}`).join('\n');
    
    const prompt = `Create a detailed, beginner-friendly step-by-step tutorial for building a PC with these components:

${componentsList}

Include:
1. Pre-building checklist
2. Step-by-step assembly instructions (numbered)
3. Safety precautions
4. Common mistakes to avoid
5. Testing and first boot instructions
6. Tips for optimization

Make it easy to follow for someone with no prior PC building experience.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      success: true,
      tutorial: text,
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Tutorial generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = {
  generateConsultantResponse,
  generateBuildRecommendation,
  generateBuildTutorial
};
