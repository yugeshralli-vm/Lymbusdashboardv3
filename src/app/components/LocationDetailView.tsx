import React from 'react';
import { 
  X, 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown,
  Clock, 
  Users, 
  MessageSquare, 
  AlertCircle,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Activity,
  BrainCircuit,
  LayoutDashboard,
  Info,
  ArrowDownRight,
  MapPin,
  Building2,
  Phone,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Heart,
  Stethoscope,
  DollarSign
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
  PieChart,
  Pie
} from 'recharts';

interface LocationDetailViewProps {
  location: any;
  onClose: () => void;
}

const weeklyData = [
  { day: 'Mon', satisfaction: 82, volume: 450 },
  { day: 'Tue', satisfaction: 85, volume: 510 },
  { day: 'Wed', satisfaction: 88, volume: 480 },
  { day: 'Thu', satisfaction: 90, volume: 420 },
  { day: 'Fri', satisfaction: 84, volume: 550 },
  { day: 'Sat', satisfaction: 78, volume: 300 },
  { day: 'Sun', satisfaction: 80, volume: 250 },
];

const departmentBreakdown = [
  { name: 'Cardiology', score: 92, status: 'Optimal' },
  { name: 'Neurology', score: 88, status: 'Optimal' },
  { name: 'Emergency', score: 65, status: 'Critical' },
  { name: 'Pediatrics', score: 84, status: 'Good' },
];

const sentimentDistribution = [
  { name: 'Positive', value: 68, color: '#10b981' },
  { name: 'Neutral', value: 18, color: '#f59e0b' },
  { name: 'Negative', value: 14, color: '#ef4444' },
];

const sentimentCategories = [
  { name: 'Staff Friendliness', score: 88, change: 4.2, icon: Users },
  { name: 'Wait Time', score: 62, change: -2.1, icon: Clock },
  { name: 'Cleanliness', score: 91, change: 1.8, icon: Sparkles },
  { name: 'Care Quality', score: 85, change: 3.0, icon: Stethoscope },
  { name: 'Billing Experience', score: 58, change: -0.4, icon: DollarSign },
];

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

const METRIC_DESCRIPTIONS: Record<string, string> = {
  "Experience Score": "Overall patient experience score calculated from all departments in this location.",
  "Response Rate": "The percentage of patients who completed their surveys out of the total requests sent.",
  "Positive Feedback": "Percentage of surveys containing positive or favorable sentiment.",
  "Negative Feedback": "Percentage of surveys containing critical or negative sentiment."
};

const StatCard = ({ title, value, change, positive = true, icon: Icon, colorClass, delay = 0, index = 0 }: any) => {
  const [showInfo, setShowInfo] = React.useState(false);
  const rainbowClasses = ['rainbow-card-blue', 'rainbow-card-green', 'rainbow-card-yellow', 'rainbow-card-red'];

  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-card p-6 rounded-[24px] border transition-all relative border-brand-border hover:shadow-lg hover:border-brand-blue/20 ${rainbowClasses[index % 4]}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className={colorClass}>
          <Icon size={16} />
        </div>
        <div className="flex items-center gap-1.5 group/info relative">
          <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">{title}</h4>
          <div 
            className="text-brand-gray/40 hover:text-brand-blue transition-colors cursor-help"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <Info size={12} />
          </div>
          
          <AnimatePresence>
            {showInfo && (
              <Motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute bottom-full left-0 mb-2 w-48 p-3 bg-brand-dark text-white text-[10px] leading-relaxed rounded-xl shadow-xl z-50 pointer-events-none"
              >
                {METRIC_DESCRIPTIONS[title] || "Metric details not available."}
                <div className="absolute top-full left-4 border-8 border-transparent border-t-brand-dark" />
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p className="text-[32px] font-bold text-brand-dark leading-tight mb-2">{value}</p>
      <div className="flex items-center gap-1">
        {positive ? <ArrowUpRight size={14} className="text-green-500" /> : <ArrowDownRight size={14} className="text-red-500" />}
        <span className={`text-[12px] font-bold ${positive ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
        <span className="text-[12px] text-brand-gray ml-1">vs last month</span>
      </div>
    </Motion.div>
  );
};

export const LocationDetailView: React.FC<LocationDetailViewProps> = ({ location, onClose }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-bg min-h-screen pb-20"
    >
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-brand-border z-20 px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-brand-bg rounded-xl text-brand-gray transition-all flex items-center gap-2 group border border-transparent hover:border-brand-border"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-bold text-xs uppercase tracking-widest">Dashboard</span>
          </button>
          <div className="h-6 w-[1px] bg-brand-border hidden sm:block" />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-brand-dark leading-none">{location.name}</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-[12px] text-brand-gray transition-colors border border-transparent hover:border-red-100">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard 
            title="Experience Score" 
            value={location.rating || "4.5/5"} 
            change="2.4%" 
            icon={Activity} 
            colorClass="text-brand-blue" 
            delay={0.1} 
            index={0}
          />
          <StatCard 
            title="Response Rate" 
            value={location.rate || "75%"} 
            change="1.2%" 
            icon={TrendingUp} 
            colorClass="text-green-500" 
            delay={0.15} 
            index={1}
          />
          <StatCard 
            title="Positive Feedback" 
            value="85%" 
            change="3.2%" 
            positive={true} 
            icon={ThumbsUp} 
            colorClass="text-green-500" 
            delay={0.2} 
            index={2}
          />
          <StatCard 
            title="Negative Feedback" 
            value={location.negatives || "3%"} 
            change="0.5%" 
            positive={false} 
            icon={AlertCircle} 
            colorClass="text-red-500" 
            delay={0.25} 
            index={3}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 bg-card p-6 rounded-[24px] border border-brand-border shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-[12px] text-brand-blue">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Facility Activity Trend</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Patient Volume vs Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full min-h-[300px]">
              {isMounted && (
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSatisfy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--brand-blue)" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="var(--brand-blue)" stopOpacity={0.01}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        backgroundColor: 'var(--card)',
                        padding: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="var(--brand-blue)" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSatisfy)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 flex">
            <div className="bg-brand-dark p-8 rounded-[24px] text-white relative overflow-hidden flex flex-col justify-between shadow-xl w-full group">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                <BrainCircuit size={160} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-[12px] flex items-center justify-center border border-white/10">
                    <Sparkles size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[10px]">Lymbus AI</h4>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Facility Insight</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">Operational Bottleneck Detected</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-8 font-medium">
                  Patient satisfaction at <span className="text-brand-blue font-bold underline">{location.name}</span> is being throttled by high wait times in the Emergency Wing during peak hours (2 PM - 6 PM).
                </p>
              </div>
              
              <div className="relative z-10">
                <button className="w-full bg-brand-blue text-white py-4 rounded-[16px] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 hidden">
                  <LayoutDashboard size={14} />
                  Optimize Resources
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-card rounded-[24px] border border-brand-border p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-brand-blue rounded-[12px]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Department Scores</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Internal Performance Heatmap</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {departmentBreakdown.map((dept, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-[16px] bg-brand-bg/40 border border-brand-border/50 hover:bg-brand-bg transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[12px] bg-white border border-brand-border flex items-center justify-center font-bold text-brand-blue text-sm">
                      {dept.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-dark">{dept.name}</p>
                      <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">{dept.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-bold text-brand-dark">{dept.score}%</p>
                      <div className="w-24 h-1.5 bg-brand-bg rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-brand-blue" style={{ width: `${dept.score}%` }} />
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-brand-gray opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-[24px] border border-brand-border p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-50 text-red-500 rounded-full border border-red-100">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Sentiment Analysis</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-[0.15em]">Key Improvement Areas</p>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-red-50 rounded-full border border-red-100">
                <ArrowUpRight size={11} className="text-red-500" />
                <span className="text-[11px] font-bold text-red-500">Critical</span>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {/* Improvement Areas */}
              {[
                { label: 'Wait Times & Intake', mentions: 24, icon: Clock, color: '#ef4444', bgColor: 'bg-red-500', width: '65%' },
                { label: 'Front Desk Comms', mentions: 12, icon: MessageSquare, color: '#f59e0b', bgColor: 'bg-amber-500', width: '40%' },
                { label: 'Facility Cleanliness', mentions: 4, icon: Sparkles, color: 'var(--brand-blue)', bgColor: 'bg-brand-blue', width: '15%' },
              ].map((area, i) => {
                const AreaIcon = area.icon;
                return (
                  <Motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <AreaIcon size={16} className="text-brand-dark" />
                        <span className="text-xs font-bold text-brand-dark uppercase tracking-[0.1em]">{area.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.1em]">{area.mentions} Mentions</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <Motion.div
                        className={`h-full rounded-full ${area.bgColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: area.width }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </Motion.div>
                );
              })}

              {/* Spacer */}
              <div className="flex-1" />

              {/* Urgent Action Required */}
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-5 bg-red-50 rounded-[16px] border border-red-100 relative overflow-hidden"
              >
                {/* Watermark icon */}
                <div className="absolute -right-2 -bottom-2 opacity-[0.08] pointer-events-none">
                  <AlertCircle size={80} className="text-red-500" />
                </div>
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="p-2 bg-red-100 rounded-full shrink-0 mt-0.5">
                    <AlertCircle size={16} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-red-600 uppercase tracking-[0.15em] mb-1.5">Urgent Action Required</h4>
                    <p className="text-[12px] text-red-700/80 leading-relaxed font-medium">
                      Wait times have spiked by <span className="font-bold text-red-600 underline decoration-red-300">40%</span> in Dermatology this week. AI suggests immediate resource reallocation to morning intake desks.
                    </p>
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};