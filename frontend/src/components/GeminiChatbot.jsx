import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { chatWithGemini } from '../services/gemini';

const GeminiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Halo! Saya Neo, asisten AI Anda. Ada yang bisa saya bantu soal sparepart komputer?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await chatWithGemini(userMsg, messages);
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Maaf, saya sedang mengalami gangguan koneksi." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] glass rounded-2xl shadow-2xl z-50 flex flex-col border border-tokyo-secondary/30 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-tokyo-bg-dark/80 border-b border-tokyo-primary/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="text-tokyo-secondary animate-pulse" size={18} />
                <h3 className="font-bold text-tokyo-primary">Neo Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-tokyo-fg hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'bg-tokyo-primary text-tokyo-bg font-medium rounded-tr-none'
                        : 'bg-tokyo-dark text-tokyo-fg border border-tokyo-primary/20 rounded-tl-none'
                    }`}
                  >
                     <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-tokyo-dark px-4 py-2 rounded-2xl rounded-tl-none border border-tokyo-primary/20">
                    <span className="animate-pulse text-tokyo-primary text-xs">AI sedang mengetik...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-tokyo-bg-dark border-t border-tokyo-primary/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya soal sparepart..."
                className="flex-1 bg-tokyo-bg border border-tokyo-primary/20 rounded-full px-4 py-2 text-sm text-tokyo-fg focus:outline-none focus:border-tokyo-primary focus:ring-1 focus:ring-tokyo-primary"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-tokyo-primary rounded-full text-tokyo-bg hover:bg-tokyo-secondary transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-tr from-tokyo-primary to-tokyo-secondary rounded-full shadow-[0_0_20px_rgba(122,162,247,0.5)] z-50 text-tokyo-bg"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};

export default GeminiChatbot;
