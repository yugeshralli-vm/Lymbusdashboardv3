import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Zap, 
  MessageCircle, 
  AlertCircle, 
  Clock, 
  ChevronRight,
  Download,
  Filter,
  Sparkles,
  FileText,
  BarChart3,
  ChevronUp,
  ChevronDown,
  X,
  Info
} from 'lucide-react';
import { SplitFocusCard } from "@/app/components/SplitFocusCard";
import { Leaderboard } from "@/app/components/Leaderboard";
import { DepartmentDetailView } from "@/app/components/DepartmentDetailView";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const trendData = [
  { month: 'Jul', nps: 45, prem: 60, prom: 25 },
  { month: 'Aug', nps: 82, prem: 35, prom: 70 }, // Drastic spike in NPS, drop in PREM
  { month: 'Sep', nps: 30, prem: 85, prom: 15 }, // Sharp decline in NPS, peak PREM
  { month: 'Oct', nps: 88, prem: 40, prom: 75 }, // Massive recovery
  { month: 'Nov', nps: 45, prem: 92, prom: 20 }, // Volatility continues
  { month: 'Dec', nps: 95, prem: 25, prom: 88 }, // Record high NPS, record low PREM
];

const departmentData = [
  { name: 'Neurology', forms: 8, requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', experience: '86/100', complaints: '3%' },
  { name: 'Pediatrics', forms: 8, requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', experience: '54/100', complaints: '15%' },
  { name: 'Oncology', forms: 8, requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', experience: '86/100', complaints: '7%' },
  { name: 'Dermatology', forms: 8, requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', experience: '86/100', complaints: '3%' },
];

const locationData = [
  { name: 'Main Hospital', requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', negatives: '3%' },
  { name: 'East Wing', requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', negatives: '15%' },
  { name: 'West Wing', requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', negatives: '7%' },
  { name: 'North Center', requests: '2,800', responses: '2,100', rate: '75%', rating: '4.5/5', negatives: '3%' },
];

const METRIC_DESCRIPTIONS: Record<string, string> = {
  "Net Promoter Score": "Measures patient loyalty and likelihood to recommend our services to others on a scale of -100 to 100.",
  "PREM Score": "Patient Reported Experience Measures. Standardized metrics focused on the quality of care and patient journey.",
  "PROM Score": "Patient Reported Outcome Measures. Assesses the patient's perspective on their health improvement after treatment.",
  "Response Rate": "The percentage of patients who completed their surveys out of the total requests sent."
};

const StatCard = ({ title, value, change, positive = true, icon: Icon, colorClass, delay = 0, onClick, isActive = true, index = 0 }: any) => {
  const [showInfo, setShowInfo] = React.useState(false);
  const rainbowClasses = ['rainbow-card-blue', 'rainbow-card-green', 'rainbow-card-yellow', 'rainbow-card-red'];

  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`bg-card p-6 rounded-[24px] border transition-all cursor-pointer relative ${
        isActive ? 'border-brand-border' : 'border-transparent opacity-50 grayscale'
      } hover:shadow-lg hover:border-brand-blue/20 ${rainbowClasses[index % 4]}`}
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

export const Dashboard = ({ search = '', onSelectDept }: { search?: string, onSelectDept?: (dept: any) => void }) => {
  const [selectedAlert, setSelectedAlert] = React.useState<any>(null);
  const [deptSort, setDeptSort] = React.useState({ key: 'name', order: 'asc' });
  const [locSort, setLocSort] = React.useState({ key: 'name', order: 'asc' });
  const [activeMetrics, setActiveMetrics] = React.useState<string[]>(['nps', 'prem', 'prom']);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    // Initial resize trigger to fix Recharts zero-dimension issues
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMetric = (metric: string) => {
    setActiveMetrics(prev => 
      prev.includes(metric) 
        ? prev.filter(m => m !== metric) 
        : [...prev, metric]
    );
  };

  const alerts = [
    { id: 1, type: 'error', title: 'Emergency NPS Drop', time: '2h ago', desc: 'Cardiology department NPS dropped 15 points this week.', details: 'The drop is primarily linked to increased wait times in the morning shift (8 AM - 11 AM). 12 patients mentioned "staff shortage" in their feedback.' },
    { id: 2, type: 'warning', title: 'Wait Time Complaints Rising', time: '2h ago', desc: '32% increase in wait time mentions in feedback.', details: 'Across all departments, wait time complaints have hit a 3-month peak. East Wing is most affected.' },
    { id: 3, type: 'info', title: 'New Feedback Batch', time: '2h ago', desc: '147 new patient responses ready for analysis.', details: 'Latest batch includes 45 detailed surveys from Neurology and 102 from Pediatrics.' },
  ];

  const handleSort = (key: string, type: 'dept' | 'loc') => {
    if (type === 'dept') {
      setDeptSort(prev => ({ key, order: prev.key === key && prev.order === 'asc' ? 'desc' : 'asc' }));
    } else {
      setLocSort(prev => ({ key, order: prev.key === key && prev.order === 'asc' ? 'desc' : 'asc' }));
    }
  };

  const getSortedData = (data: any[], sort: any) => {
    return [...data].sort((a, b) => {
      let valA = a[sort.key];
      let valB = b[sort.key];
      
      // Handle percentage and rating strings
      if (typeof valA === 'string' && valA.includes('%')) valA = parseFloat(valA);
      if (typeof valB === 'string' && valB.includes('%')) valB = parseFloat(valB);
      if (typeof valA === 'string' && valA.includes('/')) valA = parseFloat(valA.split('/')[0]);
      if (typeof valB === 'string' && valB.includes('/')) valB = parseFloat(valB.split('/')[0]);
      if (typeof valA === 'string' && valA.includes(',')) valA = parseInt(valA.replace(/,/g, ''));
      if (typeof valB === 'string' && valB.includes(',')) valB = parseInt(valB.replace(/,/g, ''));

      if (valA < valB) return sort.order === 'asc' ? -1 : 1;
      if (valA > valB) return sort.order === 'asc' ? 1 : -1;
      return 0;
    }).filter(item => 
      Object.values(item).some(val => 
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const filteredDepts = getSortedData(departmentData, deptSort);
  const filteredLocs = getSortedData(locationData, locSort);

  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 lg:p-8 space-y-6 lg:space-y-8"
    >
      <AnimatePresence>
        {selectedAlert && (
          <>
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAlert(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] lg:pl-[280px]"
            />
            <Motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-card z-[80] shadow-2xl p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    selectedAlert.type === 'error' ? 'bg-red-500/10 text-red-500' : 
                    selectedAlert.type === 'warning' ? 'bg-orange-500/10 text-orange-500' : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    {selectedAlert.type === 'error' && <AlertCircle size={24} />}
                    {selectedAlert.type === 'warning' && <Zap size={24} />}
                    {selectedAlert.type === 'info' && <MessageCircle size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">{selectedAlert.title}</h3>
                    <p className="text-xs text-brand-gray font-medium">{selectedAlert.time}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedAlert(null)} className="p-2 hover:bg-brand-bg rounded-lg transition-colors">
                  <X size={20} className="text-brand-gray" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-2">Issue Description</h4>
                  <p className="text-sm text-brand-dark leading-relaxed">{selectedAlert.desc}</p>
                </div>

                <div className="p-6 bg-brand-bg rounded-[24px] border border-brand-border">
                  <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-4 italic flex items-center gap-2">
                    <Sparkles size={12} className="text-brand-blue" />
                    Lymbus AI Deep Dive
                  </h4>
                  <p className="text-sm text-brand-dark leading-relaxed font-medium">
                    {selectedAlert.details}
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    Respond to Feedback
                  </button>
                  <button className="w-full border border-brand-border text-brand-gray font-bold py-3 rounded-xl hover:bg-brand-bg transition-colors">
                    Assign to Department Head
                  </button>
                </div>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full relative group"
      >
        <SplitFocusCard />
      </Motion.section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard 
          title="Net Promoter Score" 
          value="58" 
          change="5.2%" 
          icon={Sparkles} 
          colorClass="text-green-500" 
          delay={0.1} 
          isActive={activeMetrics.includes('nps')}
          onClick={() => toggleMetric('nps')}
          index={0}
        />
        <StatCard 
          title="PREM Score" 
          value="92" 
          change="3.8%" 
          icon={FileText} 
          colorClass="text-green-500" 
          delay={0.15} 
          isActive={activeMetrics.includes('prem')}
          onClick={() => toggleMetric('prem')}
          index={1}
        />
        <StatCard 
          title="PROM Score" 
          value="7.5%" 
          change="1.3%" 
          positive={false} 
          icon={BarChart3} 
          colorClass="text-red-500" 
          delay={0.2} 
          isActive={activeMetrics.includes('prom')}
          onClick={() => toggleMetric('prom')}
          index={2}
        />
        <StatCard 
          title="Response Rate" 
          value="42%" 
          change="2.3%" 
          icon={MessageCircle} 
          colorClass="text-green-500" 
          delay={0.25} 
          index={3}
        />
      </section>

      {/* Charts & Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-8 bg-card p-4 sm:p-6 lg:p-8 rounded-[24px] border border-brand-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h3 className="text-lg font-bold text-brand-dark">Experience Trends</h3>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'NPS', key: 'nps', color: 'bg-[var(--chart-1)]' },
                { label: 'PREM', key: 'prem', color: 'bg-[var(--chart-2)]' },
                { label: 'PROM', key: 'prom', color: 'bg-[var(--chart-3)]' }
              ].map((metric) => (
                <button
                  key={metric.key}
                  onClick={() => toggleMetric(metric.key)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                    activeMetrics.includes(metric.key) 
                      ? 'bg-brand-bg border-brand-border shadow-sm' 
                      : 'bg-transparent border-transparent opacity-40 grayscale'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${metric.color}`} />
                  <span className="text-[10px] font-bold text-brand-dark tracking-wider uppercase">{metric.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full relative min-h-[300px]">
            {isMounted && (
              <ResponsiveContainer 
                width="100%" 
                height={300}
                minWidth={0} 
                minHeight={100} 
                id="experience-trends-chart"
              >
                <LineChart data={trendData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', 
                    padding: '12px',
                    backgroundColor: 'var(--card)',
                    color: 'var(--foreground)'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}
                />
                {activeMetrics.includes('nps') && (
                  <Line 
                    type="monotone" 
                    dataKey="nps" 
                    stroke="var(--chart-1)" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: 'var(--chart-1)', strokeWidth: 2, stroke: 'var(--card)' }} 
                    activeDot={{ r: 6, strokeWidth: 0 }} 
                    animationDuration={1000} 
                  />
                )}
                {activeMetrics.includes('prem') && (
                  <Line 
                    type="monotone" 
                    dataKey="prem" 
                    stroke="var(--chart-2)" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: 'var(--chart-2)', strokeWidth: 2, stroke: 'var(--card)' }} 
                    activeDot={{ r: 6, strokeWidth: 0 }} 
                    animationDuration={1000} 
                  />
                )}
                {activeMetrics.includes('prom') && (
                  <Line 
                    type="monotone" 
                    dataKey="prom" 
                    stroke="var(--chart-3)" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: 'var(--chart-3)', strokeWidth: 2, stroke: 'var(--card)' }} 
                    activeDot={{ r: 6, strokeWidth: 0 }} 
                    animationDuration={1000} 
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

        {/* Alerts Panel */}
        <div className="lg:col-span-4 bg-card p-4 sm:p-6 rounded-[24px] border border-brand-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-brand-dark">Active Alerts</h3>
            <button className="text-[10px] font-bold text-white bg-emerald-400 px-3 py-1 rounded-full flex items-center gap-1">
              All Alerts <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                onClick={() => setSelectedAlert(alert)}
                className="p-4 rounded-2xl bg-brand-bg/50 border border-brand-border hover:bg-brand-bg hover:border-brand-blue/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {alert.type === 'error' && <AlertCircle size={16} className="text-red-500" />}
                    {alert.type === 'warning' && <Zap size={16} className="text-orange-400" />}
                    {alert.type === 'info' && <MessageCircle size={16} className="text-brand-blue" />}
                    <span className={`text-[11px] font-bold ${alert.type === 'error' ? 'text-red-500' : alert.type === 'warning' ? 'text-orange-500' : 'text-brand-blue'}`}>
                      {alert.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-brand-gray font-medium">{alert.time}</span>
                </div>
                <p className="text-[11px] text-brand-gray leading-relaxed group-hover:text-brand-dark transition-colors line-clamp-2">
                  {alert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Performance */}
      <section className="bg-card rounded-[24px] border border-brand-border overflow-hidden">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-border gap-4">
          <h3 className="text-lg font-bold text-brand-dark">Department Performance</h3>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <button className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors">
              <Filter size={16} />
            </button>
            <button className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors text-sm font-bold">
              <Download size={16} /> <span className="hidden xs:inline">Export Table</span>
            </button>
          </div>
        </div>
        
        {/* Mobile View: Cards */}
        <div className="block lg:hidden divide-y divide-brand-border">
          {filteredDepts.map((dept, i) => (
            <div 
              key={i} 
              className="p-4 space-y-3 active:bg-brand-bg transition-colors cursor-pointer"
              onClick={() => onSelectDept?.(dept)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-brand-dark">{dept.name}</h4>
                  <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">{dept.forms} Forms</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${parseInt(dept.complaints) > 10 ? 'bg-red-500/10 text-red-500' : 'bg-brand-bg text-brand-gray'}`}>
                  {dept.complaints} Complaints
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[9px] text-brand-gray font-bold uppercase tracking-widest mb-0.5">Requests/Resp</p>
                  <p className="text-xs font-bold text-brand-dark">{dept.requests} / {dept.responses}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-gray font-bold uppercase tracking-widest mb-0.5">Response Rate</p>
                  <p className="text-xs font-bold text-brand-dark">{dept.rate}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-gray font-bold uppercase tracking-widest mb-0.5">Avg Rating</p>
                  <p className="text-xs font-bold text-brand-dark">{dept.rating}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-gray font-bold uppercase tracking-widest mb-0.5">Exp Score</p>
                  <p className="text-xs font-bold text-brand-dark">{dept.experience}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredDepts.length === 0 && (
            <div className="p-8 text-center text-brand-gray text-sm italic">
              No departments found matching "{search}"
            </div>
          )}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-bg/30 text-[10px] uppercase tracking-wider text-brand-gray font-bold">
                {[
                  { label: 'Department', key: 'name' },
                  { label: 'Forms', key: 'forms' },
                  { label: 'Requests', key: 'requests' },
                  { label: 'Responses', key: 'responses' },
                  { label: 'Response Rate', key: 'rate' },
                  { label: 'Rating', key: 'rating' },
                  { label: 'Experience', key: 'experience' },
                  { label: 'Complaints', key: 'complaints' }
                ].map((col) => (
                  <th 
                    key={col.key}
                    onClick={() => handleSort(col.key, 'dept')}
                    className="px-6 py-4 cursor-pointer hover:bg-brand-bg/50 transition-colors group"
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {deptSort.key === col.key ? (
                          deptSort.order === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                        ) : <ChevronDown size={12} className="text-brand-gray/30" />}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {filteredDepts.map((dept, i) => (
                <tr 
                  key={i} 
                  className="hover:bg-brand-bg/20 transition-colors group cursor-pointer"
                  onClick={() => onSelectDept?.(dept)}
                >
                  <td className="px-6 py-4 text-sm font-bold text-brand-dark">{dept.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.forms}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.requests}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.responses}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.rate}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.rating}</td>
                  <td className="px-6 py-4 text-sm font-medium text-brand-gray">{dept.experience}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${parseInt(dept.complaints) > 10 ? 'bg-red-500/10 text-red-500' : 'bg-brand-bg text-brand-gray'}`}>
                      {dept.complaints}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI CTA */}
      <section className="bg-brand-blue [data-theme='rainbow']_&:bg-gradient-to-r [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:via-[#008D36] [data-theme='rainbow']_&:to-[#0078C1] rounded-[24px] p-4 flex flex-col sm:flex-row items-center justify-between text-white shadow-xl shadow-brand-blue/20 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
            <Sparkles size={16} />
          </div>
          <p className="text-xs lg:text-sm font-medium italic text-center sm:text-left">
            Try Lymbus AI: <span className="font-bold">"Compare Cardiology performance across all locations"</span>
          </p>
        </div>
        <ChevronRight size={20} className="text-white/60 hidden sm:block" />
      </section>

      {/* Breakdown by Location */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-brand-dark">Breakdown by Location</h3>
          <p className="text-xs text-brand-gray font-medium uppercase tracking-wider">Operational Performance Context</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-card p-6 rounded-[24px] border border-brand-border">
            <p className="text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-4">Best Performing</p>
            <h4 className="text-xl lg:text-[24px] font-bold text-brand-dark mb-4">West Clinic</h4>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase">84% Experience Score</span>
          </div>
          <div className="bg-card p-6 rounded-[24px] border border-brand-border">
            <p className="text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-4">Response Fatigue</p>
            <h4 className="text-xl lg:text-[24px] font-bold text-brand-dark mb-4">North Center</h4>
            <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase">62% Response Rate</span>
          </div>
          <div className="bg-card p-6 rounded-[24px] border border-brand-border">
            <p className="text-[10px] font-bold text-brand-gray uppercase tracking-wider mb-4">High Complaint Density</p>
            <h4 className="text-xl lg:text-[24px] font-bold text-brand-dark mb-4">North Center</h4>
            <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase">15% Negative Feedback</span>
          </div>
        </div>

        {/* Location Table */}
        <div className="bg-card rounded-[24px] border border-brand-border overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b border-brand-border">
            <h3 className="text-lg font-bold text-brand-dark">Location Performance</h3>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors">
                <Filter size={16} />
              </button>
              <button className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors text-sm font-bold">
                <Download size={16} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-bg/30 text-[10px] uppercase tracking-wider text-brand-gray font-bold">
                  {[
                    { label: 'Location', key: 'name' },
                    { label: 'Requests', key: 'requests' },
                    { label: 'Responses', key: 'responses' },
                    { label: 'Response Rate', key: 'rate' },
                    { label: 'Rating', key: 'rating' },
                    { label: 'Negatives', key: 'negatives' }
                  ].map((col) => (
                    <th 
                      key={col.key}
                      onClick={() => handleSort(col.key, 'loc')}
                      className="px-6 py-4 cursor-pointer hover:bg-brand-bg/50 transition-colors group"
                    >
                      <div className="flex items-center gap-1">
                        {col.label}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {locSort.key === col.key ? (
                            locSort.order === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                          ) : <ChevronDown size={12} className="text-brand-gray/30" />}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {filteredLocs.map((loc, i) => (
                  <tr key={i} className="hover:bg-brand-bg/20 transition-colors group">
                    <td className="px-6 py-4 text-sm font-bold text-brand-dark">{loc.name}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-gray">{loc.requests}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-gray">{loc.responses}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-gray">{loc.rate}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-gray">{loc.rating}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${parseInt(loc.negatives) > 10 ? 'bg-red-500/10 text-red-500' : 'bg-brand-bg text-brand-gray'}`}>
                        {loc.negatives}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredLocs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-brand-gray text-sm italic">
                      No locations found matching "{search}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Leaderboard />
      
      {/* AI CTA Bottom */}
      <section className="bg-brand-blue rounded-[24px] p-4 flex items-center justify-between text-white shadow-xl shadow-brand-blue/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Sparkles size={16} />
          </div>
          <p className="text-sm font-medium italic">
            Try Lymbus AI: <span className="font-bold">"Why does North Center have a lower response rate?"</span>
          </p>
        </div>
        <ChevronRight size={20} className="text-white/60" />
      </section>
    </Motion.div>
  );
};
