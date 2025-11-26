import React, { useState } from 'react';
import { consultantService } from '../services/api';

const AIConsultant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo! Saya adalah konsultan AI sparepart PC Anda. Ada yang bisa saya bantu? 😊' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);

    try {
      const response = await consultantService.chat(input, { history: messages });
      
      // Add assistant response
      if (response.success) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response.response.message 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-96 bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">🤖 AI Consultant</h2>
        <p className="text-sm opacity-90">Tanya soal sparepart PC Anda</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
              <span className="animate-pulse">Mengetik...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Tanya apapun tentang PC..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          disabled={loading}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default AIConsultant;
