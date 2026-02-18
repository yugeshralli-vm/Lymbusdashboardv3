import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Send,
  Plus,
  Copy,
  Volume2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Clock,
  BarChart3,
  TrendingUp,
  Zap,
  Loader2,
  Check,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */
interface ChartDataPoint {
  day: string;
  value: number;
  highlight?: boolean;
}

interface ChatMessage {
  id: number;
  type: 'bot' | 'user';
  text: string;
  chart?: ChartDataPoint[];
  chartLabel?: string;
}

interface Session {
  id: string;
  title: string;
  date: string;
  messages: ChatMessage[];
}

/* ------------------------------------------------------------------ */
/*  Mock data & response logic                                        */
/* ------------------------------------------------------------------ */
const npsChartData: ChartDataPoint[] = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 72 },
  { day: 'Wed', value: 88, highlight: true },
  { day: 'Thu', value: 52 },
  { day: 'Fri', value: 58 },
];

const waitTimesChartData: ChartDataPoint[] = [
  { day: 'Mon', value: 42 },
  { day: 'Tue', value: 38 },
  { day: 'Wed', value: 55, highlight: true },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 48 },
];

const predictionChartData: ChartDataPoint[] = [
  { day: 'Mon', value: 70 },
  { day: 'Tue', value: 75 },
  { day: 'Wed', value: 82, highlight: true },
  { day: 'Thu', value: 78 },
  { day: 'Fri', value: 85 },
];

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'bot',
    text: "Hello! I'm Lymbus AI. I've analyzed the Cardiology department's feedback as requested.",
    chart: npsChartData,
    chartLabel: 'DATA VISUALIZATION',
  },
];

const mockSessions: Session[] = [
  {
    id: 'session-1',
    title: 'Cardiology NPS Analysis',
    date: '02/18/2026',
    messages: initialMessages,
  },
  {
    id: 'session-2',
    title: 'ER Wait Time Report',
    date: '02/15/2026',
    messages: [
      {
        id: 100,
        type: 'bot',
        text: "I've compiled the Emergency Department wait time data for the past week. The average wait time peaked on Wednesday at 55 minutes.",
        chart: waitTimesChartData,
        chartLabel: 'WAIT TIMES (MIN)',
      },
    ],
  },
  {
    id: 'session-3',
    title: 'Monthly Satisfaction Trend',
    date: '02/10/2026',
    messages: [
      {
        id: 200,
        type: 'bot',
        text: "Here's the monthly satisfaction prediction model. Based on current trends, scores are expected to rise by 8% next month.",
        chart: predictionChartData,
        chartLabel: 'PREDICTED SCORES',
      },
    ],
  },
];

const suggestionChips = [
  { icon: TrendingUp, label: 'Trend for Cardiology NPS' },
  { icon: BarChart3, label: 'Department wait times' },
  { icon: Zap, label: "Predict next month's rate" },
];

function generateResponse(text: string): ChatMessage {
  const lower = text.toLowerCase();
  if (lower.includes('trend') || lower.includes('nps') || lower.includes('cardiology')) {
    return {
      id: Date.now() + 1,
      type: 'bot',
      text: "I've analyzed the Cardiology NPS trends. Wednesday shows the highest engagement with a score of 88, while Thursday dipped to 52. I recommend investigating staffing changes on that day.",
      chart: npsChartData,
      chartLabel: 'NPS TREND',
    };
  }
  if (lower.includes('wait') || lower.includes('department')) {
    return {
      id: Date.now() + 1,
      type: 'bot',
      text: 'Department wait times show an increase mid-week. Thursday had the longest average wait at 60 minutes, primarily in the Emergency department between 4-8 PM.',
      chart: waitTimesChartData,
      chartLabel: 'WAIT TIMES (MIN)',
    };
  }
  if (lower.includes('predict') || lower.includes('next month') || lower.includes('rate')) {
    return {
      id: Date.now() + 1,
      type: 'bot',
      text: "Based on current data patterns, I predict an overall 8% improvement in satisfaction scores next month. Friday is projected to be the strongest day at 85.",
      chart: predictionChartData,
      chartLabel: 'PREDICTED SCORES',
    };
  }
  return {
    id: Date.now() + 1,
    type: 'bot',
    text: `I've analyzed your query: "${text}". Based on the current hospital data, overall satisfaction is at 4.2/5 with a 64% response rate. The Cardiology department leads with a 4.6 average. Would you like me to drill deeper into a specific department or metric?`,
  };
}

/* ------------------------------------------------------------------ */
/*  Chart component for messages                                      */
/* ------------------------------------------------------------------ */
function MessageChart({ data, label }: { data: ChartDataPoint[]; label: string }) {
  return (
    <div className="bg-card rounded-2xl p-4 mt-3 border border-brand-border/30">
      <p className="text-[10px] tracking-[1px] text-brand-gray/50 mb-3 uppercase">
        {label}
      </p>
      <div className="w-full h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="25%">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--brand-border)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#666' }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.highlight ? 'var(--brand-blue)' : 'var(--accent)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
export const LymbusModule = () => {
  const [sessions, setSessions] = useState<Session[]>(mockSessions);
  const [activeSessionId, setActiveSessionId] = useState<string>('session-1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId);
  const messages = activeSession?.messages || [];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, scrollToBottom]);

  /* ---- Handlers ---- */
  const handleSend = useCallback(
    (text: string = inputValue) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      const userMsg: ChatMessage = { id: Date.now(), type: 'user', text: trimmed };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...s.messages, userMsg] }
            : s,
        ),
      );
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        const response = generateResponse(trimmed);
        setSessions((prev) =>
          prev.map((s) =>
            s.id === activeSessionId
              ? { ...s, messages: [...s.messages, response] }
              : s,
          ),
        );
        setIsTyping(false);
      }, 1200 + Math.random() * 800);
    },
    [inputValue, activeSessionId, isTyping],
  );

  const handleNewAnalysis = useCallback(() => {
    const newSession: Session = {
      id: `session-${Date.now()}`,
      title: 'New Analysis',
      date: '02/18/2026',
      messages: [
        {
          id: Date.now(),
          type: 'bot',
          text: "Hello! I'm Lymbus AI. What would you like me to analyze today? I can help with NPS trends, wait times, complaint categories, and satisfaction predictions.",
        },
      ],
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
  }, []);

  const handleCopy = useCallback((text: string, id: number) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSelectSession = useCallback((id: string) => {
    setActiveSessionId(id);
    setSidebarOpen(false);
  }, []);

  /* ---- Render ---- */
  return (
    <div className="flex h-[calc(100vh-140px)] lg:h-[calc(100vh-80px)] w-full overflow-hidden bg-background">
      {/* ====== History Sidebar ====== */}
      <AnimatePresence>
        {sidebarOpen && (
          <Motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="shrink-0 bg-card border-r border-brand-border flex flex-col overflow-hidden"
          >
            {/* New Analysis button */}
            <div className="p-5 border-b border-brand-border">
              <button
                onClick={handleNewAnalysis}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-background border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5 transition-colors"
                aria-label="Start new analysis"
              >
                <Plus size={18} />
                <span className="text-[15px]">New Analysis</span>
              </button>
            </div>

            {/* Sessions list */}
            <div className="flex-1 overflow-y-auto px-3 pt-4">
              <p className="text-[10px] tracking-[1px] text-brand-gray/50 px-3 mb-2 uppercase">
                Recent Sessions
              </p>
              <div className="flex flex-col gap-2">
                {sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => handleSelectSession(session.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3.5 rounded-2xl text-left transition-all ${
                      session.id === activeSessionId
                        ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                        : 'hover:bg-background text-brand-dark'
                    }`}
                    aria-label={`Open session: ${session.title}`}
                    aria-current={session.id === activeSessionId ? 'true' : undefined}
                  >
                    <MessageSquare
                      size={18}
                      className={session.id === activeSessionId ? 'text-white' : 'text-brand-gray'}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] truncate">
                        {session.title}
                      </p>
                      <p
                        className={`text-[10px] ${
                          session.id === activeSessionId
                            ? 'text-white/60'
                            : 'text-brand-gray/60'
                        }`}
                      >
                        {session.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* ====== Main Chat Area ====== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-brand-border bg-card">
          <div className="flex items-center gap-3">
            {/* Toggle sidebar / back button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 rounded-full bg-background shadow-sm flex items-center justify-center text-brand-blue hover:bg-brand-blue/5 transition-colors"
              aria-label={sidebarOpen ? 'Close history panel' : 'Open history panel'}
            >
              {sidebarOpen ? <ChevronLeft size={16} /> : <Clock size={16} />}
            </button>

            {/* Title */}
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-brand-blue" />
              <h2 className="text-brand-dark text-[18px] sm:text-[20px] tracking-tight">
                {activeSession?.title || 'Lymbus AI'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* System Live badge */}
            <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] tracking-[0.6px] text-emerald-600 uppercase">
                System Live
              </span>
            </div>

            {/* Menu */}
            <button
              className="w-8 h-8 rounded-lg flex items-center justify-center text-brand-gray hover:bg-background transition-colors"
              aria-label="More options"
            >
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div
          id="widget-container1"
          className="flex-1 overflow-y-auto px-4 sm:px-8 py-6"

        >
          <iframe
            src="http://lymbus.ai/aidata/#/webchat/389ddf61-87eb-4db7-90fa-275a296c6af6"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="clipboard-write"  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          ></iframe>
        </div>


      </div>
    </div>
  );
};
