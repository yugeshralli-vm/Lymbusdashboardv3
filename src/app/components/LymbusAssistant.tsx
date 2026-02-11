import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Bot, User, ChevronRight } from 'lucide-react';

export const LymbusAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am Lymbus AI. How can I help you analyze your hospital performance today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    "Compare Cardiology across locations",
    "Why is North Center rate low?",
    "Show top 5 complaints this week"
  ];

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { id: Date.now(), type: 'user', text }];
    setMessages(newMessages);
    setInputValue('');

    // Mock AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: `I'm analyzing the data for "${text}". Based on recent records, I see a 12% correlation between wait times and the decrease in satisfaction scores.`
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <Motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[100] bg-brand-blue [data-theme='rainbow']_&:bg-gradient-to-tr [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:to-[#0078C1] text-white p-4 rounded-full shadow-2xl shadow-brand-blue/40 flex items-center gap-2 group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="font-bold text-sm pr-2">Ask Lymbus AI</span>
      </Motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110]"
            />
            <Motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-6 right-6 w-screen max-w-[calc(100vw-32px)] sm:w-[400px] h-[600px] bg-card rounded-[32px] shadow-2xl z-[120] border border-brand-border flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-brand-blue [data-theme='rainbow']_&:bg-gradient-to-r [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:via-[#008D36] [data-theme='rainbow']_&:to-[#0078C1] p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Lymbus AI Assistant</h3>
                    <p className="text-xs text-white/60">Powered by Hospital Data</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                      m.type === 'user' 
                        ? 'bg-brand-blue text-white rounded-tr-none' 
                        : 'bg-brand-bg text-brand-dark rounded-tl-none border border-brand-border'
                    }`}>
                      {m.type === 'bot' && <Bot size={18} className="shrink-0 mt-1" />}
                      <p className="text-sm leading-relaxed">{m.text}</p>
                      {m.type === 'user' && <User size={18} className="shrink-0 mt-1" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input & Suggestions */}
              <div className="p-6 bg-brand-bg/50 border-t border-brand-border">
                <div className="flex flex-wrap gap-2 mb-4">
                  {suggestions.map((s, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(s)}
                      className="text-[10px] font-bold text-brand-blue bg-card border border-brand-blue/20 px-3 py-1.5 rounded-full hover:bg-brand-blue hover:text-white transition-all flex items-center gap-1"
                    >
                      {s} <ChevronRight size={10} />
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask anything about performance..."
                    className="w-full bg-card border border-brand-border rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                  <button 
                    onClick={() => handleSend()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:bg-brand-blue/90 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
