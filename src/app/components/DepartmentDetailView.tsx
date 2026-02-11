import React from 'react';
import { 
  X, 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  Users, 
  MessageSquare, 
  AlertCircle,
  BarChart2,
  Calendar,
  ChevronRight,
  UserCheck,
  Star,
  Sparkles,
  ArrowUpRight,
  Activity,
  ThumbsUp,
  BrainCircuit,
  LayoutDashboard,
  Info,
  ArrowDownRight
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
  Cell
} from 'recharts';

import { ImageWithFallback } from './figma/ImageWithFallback';

interface DepartmentDetailViewProps {
  dept: any;
  onClose: () => void;
}

const weeklyData = [
  { day: 'Mon', satisfaction: 85, volume: 120 },
  { day: 'Tue', satisfaction: 88, volume: 145 },
  { day: 'Wed', satisfaction: 72, volume: 130 },
  { day: 'Thu', satisfaction: 45, volume: 110 },
  { day: 'Fri', satisfaction: 60, volume: 160 },
  { day: 'Sat', satisfaction: 92, volume: 90 },
  { day: 'Sun', satisfaction: 95, volume: 75 },
];

const staffPerformance = [
  { 
    name: 'Dr. Sarah Wilson', 
    rating: 4.9, 
    feedback: 42, 
    avatar: "https://images.unsplash.com/photo-1759350075177-eeb89d507990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRvY3RvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MjY2MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: 'Nurse Michael Chen', 
    rating: 4.7, 
    feedback: 38, 
    avatar: "https://images.unsplash.com/photo-1612531385476-a86dc00daf9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBudXJzZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDYzNTcwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: 'Dr. James Miller', 
    rating: 4.8, 
    feedback: 25, 
    avatar: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2MzU3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

const METRIC_DESCRIPTIONS: Record<string, string> = {
  "Overall Rating": "Measures patient satisfaction based on post-visit feedback on a scale of 0-5.",
  "Response Rate": "The percentage of patients who completed their surveys out of the total requests sent.",
  "Avg Wait Time": "The average time patients spent waiting before their appointment started.",
  "Total Surveys": "The total number of survey responses received during this period."
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

export const DepartmentDetailView: React.FC<DepartmentDetailViewProps> = ({ dept, onClose }) => {
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
            <h2 className="text-lg font-bold text-brand-dark leading-none">{dept.name}</h2>
            <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-1">Detailed Performance Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-brand-bg rounded-[12px] text-brand-gray text-[10px] font-bold uppercase tracking-wider border border-brand-border">
            <Calendar size={12} className="text-brand-blue" />
            Last 30 Days
          </div>
          <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-[12px] text-brand-gray transition-colors border border-transparent hover:border-red-100">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
        {/* KPI Grid - Matching Dashboard exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard 
            title="Overall Rating" 
            value={dept.rating} 
            change="5.2%" 
            icon={Star} 
            colorClass="text-green-500" 
            delay={0.1} 
            index={0}
          />
          <StatCard 
            title="Response Rate" 
            value={dept.rate} 
            change="3.8%" 
            icon={TrendingUp} 
            colorClass="text-green-500" 
            delay={0.15} 
            index={1}
          />
          <StatCard 
            title="Avg Wait Time" 
            value="18 min" 
            change="1.3%" 
            positive={false} 
            icon={Clock} 
            colorClass="text-red-500" 
            delay={0.2} 
            index={2}
          />
          <StatCard 
            title="Total Surveys" 
            value={dept.responses} 
            change="2.3%" 
            icon={MessageSquare} 
            colorClass="text-green-500" 
            delay={0.25} 
            index={3}
          />
        </div>

        {/* Charts & AI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Satisfaction Trend */}
          <div className="lg:col-span-8 bg-card p-6 rounded-[24px] border border-brand-border shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-[12px] text-brand-blue">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Satisfaction Trend</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">7-Day Performance Window</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-blue" />
                  <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Satisfaction %</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full min-h-[300px]">
              {isMounted && (
                <ResponsiveContainer width="100%" height={300} minWidth={0} minHeight={100}>
                  <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
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
                      domain={[0, 100]}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        backgroundColor: 'var(--card)',
                        padding: '12px'
                      }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--brand-dark)' }}
                      labelStyle={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--brand-gray)', marginBottom: '4px', textTransform: 'uppercase' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="var(--brand-blue)" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSat)" 
                      animationDuration={1500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* AI Insight Sidebar */}
          <div className="lg:col-span-4 flex">
            <div className="bg-brand-blue p-8 rounded-[24px] text-white relative overflow-hidden flex flex-col justify-between shadow-lg shadow-brand-blue/20 w-full group">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                <BrainCircuit size={160} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-[12px] flex items-center justify-center border border-white/20">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[10px]">Lymbus AI</h4>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Smart Corelation</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">Staffing Efficiency Correlation</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8 font-medium">
                  Analysis indicates that satisfaction scores for <span className="text-white font-bold underline decoration-white/30">{dept.name}</span> correlate strongly (0.84) with morning shift staffing levels. The drop on Thursday aligns with a 20% reduction in frontline staff availability.
                </p>
              </div>
              
              <div className="relative z-10 space-y-3">
                <button className="w-full bg-white text-brand-blue py-4 rounded-[16px] font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                  <LayoutDashboard size={14} />
                  View Staffing Report
                </button>
                <p className="text-[9px] text-center text-white/50 font-bold uppercase tracking-[0.1em]">Updated 12 minutes ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table & Staff Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Department Leaders */}
          <div className="bg-card rounded-[24px] border border-brand-border p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-brand-blue rounded-[12px]">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Department Leaders</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Top Performing Personnel</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:underline">View All</button>
            </div>
            
            <div className="space-y-3">
              {staffPerformance.map((staff, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-[16px] bg-brand-bg/40 border border-brand-border/50 hover:bg-brand-bg transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-[14px] bg-brand-blue/10 flex items-center justify-center overflow-hidden border border-brand-blue/20 group-hover:border-brand-blue transition-all">
                        <ImageWithFallback 
                          src={staff.avatar} 
                          alt={staff.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-dark">{staff.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">{staff.feedback} Reviews</span>
                        <span className="w-1 h-1 rounded-full bg-brand-border" />
                        <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-[12px] border border-amber-100">
                    <Star size={12} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-700">{staff.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Issue Breakdown */}
          <div className="bg-card rounded-[24px] border border-brand-border p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-500 rounded-[12px]">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Sentiment Analysis</h3>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Key Improvement Areas</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <ArrowUpRight size={10} />
                Critical
              </div>
            </div>

            <div className="space-y-6 flex-1">
              {[
                { label: 'Wait Times & Intake', count: 24, percent: 65, color: 'bg-red-500', icon: Clock },
                { label: 'Front Desk Comms', count: 12, percent: 35, color: 'bg-orange-500', icon: MessageSquare },
                { label: 'Facility Cleanliness', count: 4, percent: 12, color: 'bg-brand-blue', icon: Sparkles },
              ].map((theme, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <theme.icon size={14} className="text-brand-gray" />
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-tight">{theme.label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">{theme.count} mentions</span>
                  </div>
                  <div className="relative h-2.5 w-full bg-brand-bg rounded-full overflow-hidden border border-brand-border/50">
                    <Motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${theme.percent}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                      className={`h-full ${theme.color} rounded-full`} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-red-50 rounded-[16px] border border-red-100 flex items-start gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-150 transition-transform duration-500">
                <AlertCircle size={80} />
              </div>
              <div className="w-10 h-10 bg-red-500/10 rounded-[12px] flex items-center justify-center shrink-0 border border-red-200">
                <AlertCircle size={18} className="text-red-600" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-red-700 mb-1 uppercase tracking-[0.2em]">Urgent Action Required</p>
                <p className="text-[11px] text-red-600 font-bold leading-relaxed">
                  Wait times have spiked by <span className="font-bold underline">40%</span> in {dept.name} this week. AI suggests immediate resource reallocation to morning intake desks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};
