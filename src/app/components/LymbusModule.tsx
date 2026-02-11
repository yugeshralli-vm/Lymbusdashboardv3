import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ChevronRight, 
  Zap, 
  MessageCircle, 
  BarChart3, 
  BrainCircuit,
  Volume2,
  Copy,
  RotateCcw,
  History,
  Plus,
  MoreVertical,
  ChevronLeft,
  Layout
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Cell 
} from 'recharts';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  chartData?: {
    type: 'bar' | 'line';
    data: any[];
    dataKey: string;
    labelKey: string;
    color?: string;
  };
}

interface Session {
  id: string;
  title: string;
  lastUpdate: Date;
  messages: Message[];
}

export const LymbusModule = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      title: 'Cardiology NPS Analysis',
      lastUpdate: new Date(),
      messages: [
        { 
          id: '1', 
          type: 'bot', 
          text: "Hello! I'm Lymbus AI. I've analyzed the Cardiology department's feedback as requested.", 
          timestamp: new Date(),
          chartData: {
            type: 'bar',
            dataKey: 'value',
            labelKey: 'name',
            data: [
              { name: 'Mon', value: 78 },
              { name: 'Tue', value: 82 },
              { name: 'Wed', value: 65 },
              { name: 'Thu', value: 45 },
              { name: 'Fri', value: 52 },
            ]
          }
        }
      ]
    }
  ]);
  const [activeSessionId, setActiveSessionId] = useState('1');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeSession = sessions.find(s => s.id === activeSessionId) || sessions[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeSession.messages, isTyping]);

  const handleNewChat = () => {
    const newId = Date.now().toString();
    const newSession: Session = {
      id: newId,
      title: 'New Analysis',
      lastUpdate: new Date(),
      messages: [{
        id: '1',
        type: 'bot',
        text: "How can I help you analyze your clinical data today?",
        timestamp: new Date()
      }]
    };
    setSessions([newSession, ...sessions]);
    setActiveSessionId(newId);
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date()
    };

    const updatedSessions = sessions.map(s => {
      if (s.id === activeSessionId) {
        return {
          ...s,
          lastUpdate: new Date(),
          title: s.messages.length === 1 ? text.substring(0, 30) + (text.length > 30 ? '...' : '') : s.title,
          messages: [...s.messages, userMessage]
        };
      }
      return s;
    });

    setSessions(updatedSessions);
    setInputValue('');
    setIsTyping(true);

    // Mock AI Data Response Logic
    setTimeout(() => {
      let responseText = `I've processed the request for "${text}". `;
      let chartData: Message['chartData'] | undefined;
      
      if (text.toLowerCase().includes('cardiology') || text.toLowerCase().includes('nps')) {
        responseText += "The data reveals a sharp decline in NPS on Thursday morning. Here is the trend for this week:";
        chartData = {
          type: 'line',
          dataKey: 'nps',
          labelKey: 'day',
          color: 'var(--chart-1)',
          data: [
            { day: 'Mon', nps: 82 },
            { day: 'Tue', nps: 85 },
            { day: 'Wed', nps: 81 },
            { day: 'Thu', nps: 42 },
            { day: 'Fri', nps: 58 },
          ]
        };
      } else if (text.toLowerCase().includes('wait') || text.toLowerCase().includes('time')) {
        responseText += "Comparing wait times across major departments reveals Oncology has the highest variance currently.";
        chartData = {
          type: 'bar',
          dataKey: 'mins',
          labelKey: 'dept',
          color: 'var(--chart-2)',
          data: [
            { dept: 'ER', mins: 45 },
            { dept: 'Cardio', mins: 22 },
            { dept: 'Onco', mins: 85 },
            { dept: 'Physio', mins: 12 },
            { dept: 'Peds', mins: 34 },
          ]
        };
      } else {
        responseText += "Analysis complete. I recommend reviewing the East Wing's evening shift coverage based on the recent satisfaction metrics.";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: responseText,
        timestamp: new Date(),
        chartData
      };

      setSessions(prev => prev.map(s => {
        if (s.id === activeSessionId) {
          return { ...s, messages: [...s.messages, botMessage] };
        }
        return s;
      }));
      setIsTyping(false);
    }, 1500);
  };

  const suggestions = [
    { text: "Trend for Cardiology NPS", icon: BrainCircuit },
    { text: "Department wait times", icon: BarChart3 },
    { text: "Predict next month's rate", icon: Zap }
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] lg:h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Session History Sidebar */}
      <AnimatePresence initial={false}>
        {showHistory && (
          <Motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-card border-r border-brand-border flex flex-col shrink-0"
          >
            <div className="p-6 border-b border-brand-border">
              <button 
                onClick={handleNewChat}
                className="w-full flex items-center justify-center gap-2 bg-brand-bg hover:bg-brand-blue/5 text-brand-blue border border-brand-blue/20 p-3 rounded-xl font-bold transition-all"
              >
                <Plus size={18} /> New Analysis
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              <h3 className="px-3 text-[10px] font-bold text-brand-gray/50 uppercase tracking-widest mb-2 mt-2">Recent Sessions</h3>
              {sessions.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveSessionId(s.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left group ${
                    activeSessionId === s.id ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'hover:bg-brand-bg text-brand-dark'
                  }`}
                >
                  <MessageCircle size={18} className={activeSessionId === s.id ? 'text-white' : 'text-brand-blue'} />
                  <div className="flex-1 truncate">
                    <p className="text-xs font-bold truncate">{s.title}</p>
                    <p className={`text-[10px] ${activeSessionId === s.id ? 'text-white/60' : 'text-brand-gray/60'}`}>
                      {s.lastUpdate.toLocaleDateString()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-brand-bg/10 relative">
        {/* Toggle History Sidebar */}
        <button 
          onClick={() => setShowHistory(!showHistory)}
          className="absolute left-4 top-4 z-10 w-10 h-10 bg-card border border-brand-border rounded-xl flex items-center justify-center text-brand-gray hover:text-brand-blue transition-colors shadow-sm"
        >
          {showHistory ? <ChevronLeft size={20} /> : <History size={20} />}
        </button>

        <div className="flex flex-col h-full max-w-4xl mx-auto w-full p-4 lg:p-6">
          {/* Header Info */}
          <div className="flex items-center justify-between mb-4 pl-12 lg:pl-14">
            <div>
              <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                <Sparkles size={18} className="text-brand-blue" />
                {activeSession.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100 uppercase tracking-wider">
                System Live
              </div>
              <button className="p-2 hover:bg-white rounded-lg text-brand-gray">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-card rounded-[32px] border border-brand-border shadow-sm overflow-hidden flex flex-col mb-4">
            <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8 scrollbar-thin scrollbar-thumb-brand-bg scrollbar-track-transparent">
              {activeSession.messages.map((m) => (
                <Motion.div 
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-4 max-w-[90%] lg:max-w-[80%] ${m.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${
                      m.type === 'user' ? 'bg-brand-dark text-white' : 'bg-brand-bg text-brand-blue'
                    }`}>
                      {m.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className="space-y-3">
                      <div className={`p-4 lg:p-5 rounded-[24px] text-sm leading-relaxed ${
                        m.type === 'user' 
                          ? 'bg-brand-blue text-white rounded-tr-none shadow-md shadow-brand-blue/10' 
                          : 'bg-brand-bg text-brand-dark rounded-tl-none border border-brand-border/50'
                      }`}>
                        {m.text}

                        {/* Chart Component Integration */}
                        {m.chartData && (
                          <div className="mt-4 bg-card rounded-2xl p-4 border border-brand-border/30 w-full relative min-h-[220px]">
                            <p className="text-[10px] font-bold text-brand-gray/50 uppercase tracking-widest mb-4">Data Visualization</p>
                            {isMounted && (
                              <ResponsiveContainer 
                                width="100%" 
                                height={220}
                                minWidth={0} 
                                minHeight={100} 
                                id={`chart-${m.id}`}
                              >
                                {m.chartData.type === 'bar' ? (
                                <BarChart data={m.chartData.data}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                  <XAxis 
                                    dataKey={m.chartData.labelKey} 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fontSize: 10, fill: '#666' }} 
                                  />
                                  <YAxis hide />
                                  <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    cursor={{ fill: '#f8faff' }}
                                  />
                                  <Bar dataKey={m.chartData.dataKey} radius={[4, 4, 0, 0]}>
                                    {m.chartData.data.map((_, index) => (
                                      <Cell key={`cell-${index}`} fill={index === 2 ? 'var(--chart-1)' : 'var(--accent)'} />
                                    ))}
                                  </Bar>
                                </BarChart>
                              ) : (
                                <LineChart data={m.chartData.data}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                                  <XAxis 
                                    dataKey={m.chartData.labelKey} 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fontSize: 10, fill: 'var(--brand-gray)' }} 
                                  />
                                  <YAxis hide />
                                  <Tooltip 
                                    contentStyle={{ 
                                      borderRadius: '12px', 
                                      border: 'none', 
                                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                      backgroundColor: 'var(--card)',
                                      color: 'var(--foreground)'
                                    }}
                                  />
                                  <Line 
                                    type="monotone" 
                                    dataKey={m.chartData.dataKey} 
                                    stroke={m.chartData.color || 'var(--chart-1)'} 
                                    strokeWidth={3} 
                                    dot={{ r: 4, fill: 'var(--card)', strokeWidth: 2, stroke: m.chartData.color || 'var(--chart-1)' }}
                                    activeDot={{ r: 6, strokeWidth: 0 }}
                                  />
                                </LineChart>
                              )}
                            </ResponsiveContainer>
                          )}
                        </div>
                      )}
                      </div>
                      
                      {m.type === 'bot' && (
                        <div className="flex items-center gap-3 px-2">
                          <button className="text-[10px] font-bold text-brand-gray/60 hover:text-brand-blue transition-colors flex items-center gap-1">
                            <Copy size={10} /> Copy
                          </button>
                          <button className="text-[10px] font-bold text-brand-gray/60 hover:text-brand-blue transition-colors flex items-center gap-1">
                            <Volume2 size={10} /> Listen
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Motion.div>
              ))}

              {isTyping && (
                <Motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-brand-blue" />
                  </div>
                  <div className="bg-brand-bg/50 border border-brand-border/30 rounded-2xl rounded-tl-none p-4 flex gap-1.5 items-center">
                    <Motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-1.5 h-1.5 bg-brand-blue/40 rounded-full" 
                    />
                    <Motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                      className="w-1.5 h-1.5 bg-brand-blue/60 rounded-full" 
                    />
                    <Motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                      className="w-1.5 h-1.5 bg-brand-blue/80 rounded-full" 
                    />
                  </div>
                </Motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Controls */}
            <div className="p-4 lg:p-6 bg-brand-bg/20 border-t border-brand-border">
              {activeSession.messages.length < 3 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {suggestions.map((s, i) => (
                    <Motion.button 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      onClick={() => handleSend(s.text)}
                      className="bg-card hover:bg-brand-blue hover:text-white text-brand-dark border border-brand-border px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 group"
                    >
                      <s.icon size={14} className="text-brand-blue group-hover:text-white transition-colors" />
                      {s.text}
                      <ChevronRight size={12} className="opacity-40" />
                    </Motion.button>
                  ))}
                </div>
              )}

              <div className="relative group">
                <div className="relative bg-card border border-brand-border rounded-[24px] shadow-sm flex items-center p-2 group-focus-within:border-brand-blue group-focus-within:ring-4 ring-brand-blue/5 transition-all">
                  <div className="pl-4 pr-2 text-brand-blue">
                    <Layout size={20} />
                  </div>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Compare wait times or analyze NPS trends..."
                    className="flex-1 bg-transparent py-3 text-sm font-medium focus:outline-none placeholder:text-brand-gray/40"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      !inputValue.trim() || isTyping 
                        ? 'bg-brand-bg text-brand-gray/40' 
                        : 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:scale-105 active:scale-95'
                    }`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
