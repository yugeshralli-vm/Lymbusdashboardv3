import React, { useState } from 'react';
import { motion as Motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Users,
  Clock,
  Sparkles,
  Heart,
  DollarSign,
  Stethoscope,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { cn } from '@/app/components/ui/utils';

// --- Mock Data per facility ---

const facilityData: Record<string, {
  overallScore: number;
  previousScore: number;
  totalResponses: number;
  responseRate: number;
  nps: number;
  trendData: { month: string; positive: number; neutral: number; negative: number }[];
  categories: { name: string; score: number; change: number; icon: any; responses: number }[];
  recentFeedback: { id: string; text: string; sentiment: 'positive' | 'neutral' | 'negative'; category: string; date: string; source: string }[];
  distribution: { name: string; value: number; color: string }[];
}> = {
  default: {
    overallScore: 78,
    previousScore: 73,
    totalResponses: 2847,
    responseRate: 64,
    nps: 42,
    trendData: [
      { month: 'Sep', positive: 62, neutral: 22, negative: 16 },
      { month: 'Oct', positive: 65, neutral: 20, negative: 15 },
      { month: 'Nov', positive: 60, neutral: 24, negative: 16 },
      { month: 'Dec', positive: 68, neutral: 19, negative: 13 },
      { month: 'Jan', positive: 72, neutral: 18, negative: 10 },
      { month: 'Feb', positive: 78, neutral: 14, negative: 8 },
    ],
    categories: [
      { name: 'Staff Friendliness', score: 88, change: 4.2, icon: Users, responses: 1204 },
      { name: 'Wait Time', score: 62, change: -2.1, icon: Clock, responses: 982 },
      { name: 'Cleanliness', score: 91, change: 1.8, icon: Sparkles, responses: 876 },
      { name: 'Communication', score: 74, change: 5.6, icon: MessageCircle, responses: 1102 },
      { name: 'Care Quality', score: 85, change: 3.0, icon: Stethoscope, responses: 1340 },
      { name: 'Billing Experience', score: 58, change: -0.4, icon: DollarSign, responses: 643 },
    ],
    recentFeedback: [
      { id: '1', text: 'Dr. Martinez was incredibly attentive and explained everything clearly. The nursing staff was also very professional and caring.', sentiment: 'positive', category: 'Care Quality', date: '2 hours ago', source: 'Post-Visit Survey' },
      { id: '2', text: 'Waited over 45 minutes past my appointment time. The reception area was crowded and uncomfortable.', sentiment: 'negative', category: 'Wait Time', date: '5 hours ago', source: 'SMS Feedback' },
      { id: '3', text: 'The facility was clean. Check-in was standard. Nothing particularly stood out one way or the other.', sentiment: 'neutral', category: 'Cleanliness', date: '8 hours ago', source: 'Email Survey' },
      { id: '4', text: 'Billing department resolved my insurance issue quickly. Appreciated the follow-up call to confirm everything was sorted.', sentiment: 'positive', category: 'Billing Experience', date: '1 day ago', source: 'Phone Follow-up' },
      { id: '5', text: 'Nursing staff went above and beyond during my stay. Felt genuinely cared for throughout the process.', sentiment: 'positive', category: 'Staff Friendliness', date: '1 day ago', source: 'Post-Discharge Survey' },
      { id: '6', text: 'Communication about my test results was delayed. Had to call multiple times before getting an update.', sentiment: 'negative', category: 'Communication', date: '2 days ago', source: 'Patient Portal' },
    ],
    distribution: [
      { name: 'Positive', value: 68, color: '#10b981' },
      { name: 'Neutral', value: 18, color: '#f59e0b' },
      { name: 'Negative', value: 14, color: '#ef4444' },
    ],
  },
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', icon: ThumbsUp, dot: 'bg-emerald-500' };
    case 'negative': return { bg: 'bg-red-50', text: 'text-red-500', border: 'border-red-100', icon: ThumbsDown, dot: 'bg-red-500' };
    default: return { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', icon: Minus, dot: 'bg-amber-500' };
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-emerald-600';
  if (score >= 60) return 'text-amber-500';
  return 'text-red-500';
};

const getBarColor = (score: number) => {
  if (score >= 80) return '#10b981';
  if (score >= 60) return '#f59e0b';
  return '#ef4444';
};

const getBarBgColor = (score: number) => {
  if (score >= 80) return 'bg-emerald-100';
  if (score >= 60) return 'bg-amber-100';
  return 'bg-red-100';
};

interface SentimentAnalysisProps {
  facility: any;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-brand-border rounded-[12px] shadow-xl p-4 min-w-[180px]">
        <p className="text-xs font-bold text-brand-dark mb-3">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 py-1">
            <div className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full")} style={{ backgroundColor: entry.color }} />
              <span className="text-[11px] font-medium text-brand-gray capitalize">{entry.name}</span>
            </div>
            <span className="text-[11px] font-bold text-brand-dark">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const SentimentAnalysis = ({ facility }: SentimentAnalysisProps) => {
  const [feedbackFilter, setFeedbackFilter] = useState<'all' | 'positive' | 'neutral' | 'negative'>('all');
  const [expandedCategories, setExpandedCategories] = useState(true);

  const data = facilityData.default;
  const scoreChange = data.overallScore - data.previousScore;
  const isUp = scoreChange >= 0;

  const filteredFeedback = data.recentFeedback.filter(
    f => feedbackFilter === 'all' || f.sentiment === feedbackFilter
  );

  // Build circular gauge arc
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const arc = circumference * 0.75; // 270 degrees
  const filled = (data.overallScore / 100) * arc;

  return (
    <div className="space-y-6">
      {/* Score Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Overall Score Gauge */}
        <div className="bg-white border border-brand-border rounded-[12px] p-6 flex flex-col items-center justify-center relative">
          <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-3">Overall Sentiment</p>
          <div className="relative w-[130px] h-[100px]">
            <svg viewBox="0 0 120 100" className="w-full h-full">
              {/* Background arc */}
              <path
                d="M 10 90 A 54 54 0 1 1 110 90"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Filled arc */}
              <Motion.path
                d="M 10 90 A 54 54 0 1 1 110 90"
                fill="none"
                stroke={data.overallScore >= 80 ? '#10b981' : data.overallScore >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${arc}`}
                initial={{ strokeDashoffset: arc }}
                animate={{ strokeDashoffset: arc - filled }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
              <span className={cn("text-3xl font-black", getScoreColor(data.overallScore))}>{data.overallScore}</span>
              <span className="text-[10px] text-brand-gray font-medium">/100</span>
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full text-[10px] font-bold",
            isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
          )}>
            {isUp ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
            {isUp ? '+' : ''}{scoreChange} pts from last period
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white border border-brand-border rounded-[12px] p-6 space-y-4">
          <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Key Metrics</p>
          <div className="space-y-3">
            {[
              { label: 'Total Responses', value: data.totalResponses.toLocaleString(), sub: 'Last 6 months' },
              { label: 'Response Rate', value: `${data.responseRate}%`, sub: 'vs 58% avg' },
              { label: 'Net Promoter Score', value: `+${data.nps}`, sub: data.nps >= 50 ? 'Excellent' : data.nps >= 30 ? 'Good' : 'Needs improvement' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-brand-border/50 last:border-0">
                <div>
                  <p className="text-xs font-bold text-brand-dark">{m.label}</p>
                  <p className="text-[10px] text-brand-gray">{m.sub}</p>
                </div>
                <span className="text-base font-black text-brand-dark">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Donut */}
        <div className="bg-white border border-brand-border rounded-[12px] p-6">
          <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-3">Sentiment Split</p>
          <div className="flex items-center justify-center">
            <div className="relative w-[120px] h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.distribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={36}
                    outerRadius={55}
                    paddingAngle={3}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {data.distribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart size={18} className="text-brand-blue" />
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-3">
            {data.distribution.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-[11px] font-medium text-brand-gray">{d.name}</span>
                </div>
                <span className="text-[11px] font-bold text-brand-dark">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white border border-brand-border rounded-[12px] p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-sm font-bold text-brand-dark">Sentiment Trend</h4>
            <p className="text-[11px] text-brand-gray mt-0.5">Monthly sentiment breakdown over the last 6 months</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { label: 'Positive', color: '#10b981' },
              { label: 'Neutral', color: '#f59e0b' },
              { label: 'Negative', color: '#ef4444' },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-[10px] font-bold text-brand-gray uppercase tracking-wider">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.trendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradPositive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradNeutral" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradNegative" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6a7282', fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6a7282' }} axisLine={false} tickLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={2.5} fill="url(#gradPositive)" dot={false} activeDot={{ r: 4, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} fill="url(#gradNeutral)" dot={false} activeDot={{ r: 4, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} fill="url(#gradNegative)" dot={false} activeDot={{ r: 4, fill: '#ef4444', stroke: '#fff', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white border border-brand-border rounded-[12px] p-6">
        <button
          onClick={() => setExpandedCategories(!expandedCategories)}
          className="w-full flex items-center justify-between mb-4"
        >
          <div>
            <h4 className="text-sm font-bold text-brand-dark text-left">Category Breakdown</h4>
            <p className="text-[11px] text-brand-gray mt-0.5">Patient satisfaction by care dimension</p>
          </div>
          <ChevronDown size={16} className={cn("text-brand-gray transition-transform", expandedCategories && "rotate-180")} />
        </button>
        {expandedCategories && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3 overflow-hidden"
          >
            {data.categories
              .sort((a, b) => b.score - a.score)
              .map((cat, i) => {
                const IconComp = cat.icon;
                return (
                  <Motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-bg flex items-center justify-center text-brand-gray shrink-0 group-hover:text-brand-blue transition-colors">
                      <IconComp size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-brand-dark truncate">{cat.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "text-[10px] font-bold flex items-center gap-0.5",
                            cat.change > 0 ? "text-emerald-600" : cat.change < 0 ? "text-red-500" : "text-brand-gray"
                          )}>
                            {cat.change > 0 ? <TrendingUp size={10} /> : cat.change < 0 ? <TrendingDown size={10} /> : <Minus size={10} />}
                            {cat.change > 0 ? '+' : ''}{cat.change}%
                          </span>
                          <span className={cn("text-sm font-black min-w-[32px] text-right", getScoreColor(cat.score))}>{cat.score}</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <Motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: getBarColor(cat.score) }}
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.score}%` }}
                          transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                        />
                      </div>
                      <p className="text-[10px] text-brand-gray mt-1">{cat.responses.toLocaleString()} responses</p>
                    </div>
                  </Motion.div>
                );
              })}
          </Motion.div>
        )}
      </div>

      {/* Recent Feedback */}
      <div className="bg-white border border-brand-border rounded-[12px] p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-sm font-bold text-brand-dark">Recent Feedback</h4>
            <p className="text-[11px] text-brand-gray mt-0.5">Latest patient comments with AI-detected sentiment</p>
          </div>
          <div className="flex items-center gap-1.5">
            {(['all', 'positive', 'neutral', 'negative'] as const).map((f) => {
              const colors: Record<string, string> = {
                all: 'bg-brand-bg text-brand-dark border-brand-border',
                positive: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                neutral: 'bg-amber-50 text-amber-600 border-amber-100',
                negative: 'bg-red-50 text-red-500 border-red-100',
              };
              const activeColors: Record<string, string> = {
                all: 'bg-brand-dark text-white border-brand-dark',
                positive: 'bg-emerald-600 text-white border-emerald-600',
                neutral: 'bg-amber-500 text-white border-amber-500',
                negative: 'bg-red-500 text-white border-red-500',
              };
              return (
                <button
                  key={f}
                  onClick={() => setFeedbackFilter(f)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all",
                    feedbackFilter === f ? activeColors[f] : colors[f]
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFeedback.map((fb, i) => {
            const s = getSentimentColor(fb.sentiment);
            const SIcon = s.icon;
            return (
              <Motion.div
                key={fb.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn("border rounded-[12px] p-4 transition-all", s.border, "hover:shadow-sm")}
              >
                <div className="flex items-start gap-3">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5", s.bg)}>
                    <SIcon size={14} className={s.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-brand-dark leading-relaxed">{fb.text}</p>
                    <div className="flex items-center flex-wrap gap-2 mt-2.5">
                      <span className={cn("px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider", s.bg, s.text)}>
                        {fb.sentiment}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-brand-bg text-brand-gray text-[9px] font-bold uppercase tracking-wider border border-brand-border/50">
                        {fb.category}
                      </span>
                      <span className="text-[10px] text-brand-gray">{fb.source}</span>
                      <span className="text-[10px] text-brand-gray/60 ml-auto">{fb.date}</span>
                    </div>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};