import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Send, Users, Eye, MousePointer, 
  FileText, MessageSquare, CheckSquare, Clock, 
  TrendingUp, Info, LogOut,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

// --- Mock Data ---

const performanceByChannelData = [
  { name: 'Email', Sent: 1000, Delivered: 800, Clicked: 400 },
  { name: 'SMS', Sent: 3400, Delivered: 3100 },
];

const surveyStatusData = [
  { name: 'Active', value: 25, color: 'var(--chart-1)' }, 
  { name: 'Scheduled', value: 25, color: 'var(--chart-2)' }, 
  { name: 'Paused', value: 25, color: 'var(--chart-3)' }, 
];

const performanceTrendData = [
  { week: 'W1', Sent: 1200, Delivered: 1100, Clicked: 200 },
  { week: 'W2', Sent: 1350, Delivered: 1250, Clicked: 280 },
  { week: 'W3', Sent: 1500, Delivered: 1400, Clicked: 350 },
  { week: 'W4', Sent: 1800, Delivered: 1700, Clicked: 420 },
  { week: 'W5', Sent: 1700, Delivered: 1600, Clicked: 380 },
  { week: 'W6', Sent: 2100, Delivered: 2000, Clicked: 550 },
  { week: 'W7', Sent: 2400, Delivered: 2250, Clicked: 650 },
  { week: 'W8', Sent: 2300, Delivered: 2100, Clicked: 580 },
  { week: 'W9', Sent: 2800, Delivered: 2600, Clicked: 800 },
  { week: 'W10', Sent: 3100, Delivered: 2900, Clicked: 950 },
  { week: 'W11', Sent: 3400, Delivered: 3200, Clicked: 1050 },
  { week: 'W12', Sent: 3800, Delivered: 3600, Clicked: 1200 },
];

const channelComparisonData = [
  { name: 'Email', Reach: 1000 },
  { name: 'SMS', Reach: 1500 },
];

const sentVsRespondedData = [
  { month: 'Jan', Sent: 1500, Responded: 1200 },
  { month: 'Feb', Sent: 1800, Responded: 1400 },
  { month: 'Mar', Sent: 2100, Responded: 1800 },
  { month: 'Apr', Sent: 1900, Responded: 1600 },
  { month: 'May', Sent: 2400, Responded: 1900 },
  { month: 'Jun', Sent: 2800, Responded: 2200 },
];

const channelDistributionData = [
  { name: 'Email', value: 45, color: 'var(--chart-1)' }, 
  { name: 'SMS', value: 35, color: 'var(--chart-2)' },
  { name: 'Other', value: 20, color: 'var(--chart-3)' },
];

const formsByCategoryData = [
  { name: 'Outpatient', Responses: 1300 },
  { name: 'Emergency Care', Responses: 400 },
  { name: 'Discharge Survey', Responses: 700 },
  { name: 'Staff Feedback', Responses: 900 },
  { name: 'Patient Satisfaction', Responses: 1800 },
];

// --- Components ---

const StatCard = ({ title, value, change, positive = true, icon: Icon, colorClass, delay = 0, index = 0 }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  const rainbowClasses = ['rainbow-card-blue', 'rainbow-card-green', 'rainbow-card-yellow', 'rainbow-card-red'];

  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-card p-6 rounded-[20px] border border-brand-border transition-all cursor-pointer relative hover:shadow-lg hover:border-brand-blue/20 ${rainbowClasses[index % 4]}`}
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
                Metric details and analysis for {title}.
                <div className="absolute top-full left-4 border-8 border-transparent border-t-brand-dark" />
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p className="text-[32px] font-bold text-brand-dark leading-tight mb-2">{value}</p>
      <div className="flex items-center gap-1">
        {change.startsWith('-') ? (
          <ArrowDownRight size={14} className={positive ? 'text-green-500' : 'text-red-500'} />
        ) : (
          <ArrowUpRight size={14} className={positive ? 'text-green-500' : 'text-red-500'} />
        )}
        <span className={`text-[12px] font-bold ${positive ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
        <span className="text-[12px] text-brand-gray ml-1">vs last month</span>
      </div>
    </Motion.div>
  );
};

interface LegendItem {
  label: string;
  color: string;
}

const ChartSection = ({ 
  title, 
  children, 
  info,
  legendItems 
}: { 
  title: string, 
  children: React.ReactNode, 
  info?: string,
  legendItems?: LegendItem[]
}) => title === "Channel Comparison" ? null : (
  <div className="bg-card p-6 lg:p-8 rounded-[24px] border border-brand-border h-full flex flex-col min-w-0">
    <div className="flex items-center gap-2 mb-6 shrink-0">
      <h3 className="text-lg font-bold text-brand-dark">{title}</h3>
      {info && (
        <div className="group relative">
           <Info size={14} className="text-brand-gray/40 cursor-help hover:text-brand-blue transition-colors" />
           <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-brand-dark text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
             {info}
           </div>
        </div>
      )}
    </div>
    
    <div className="flex-1 w-full relative min-h-0">
      {children}
    </div>

    {legendItems && (
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-brand-border/50 shrink-0">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const InsightsTab = () => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'forms'>('campaigns');
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 pb-8">
      
      {/* View Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-brand-dark">Performance Insights</h2>
          <p className="text-sm text-brand-gray mt-1">Real-time analytics for your engagement activities.</p>
        </div>
        <div className="bg-white p-1 rounded-2xl border border-brand-border flex gap-1 shadow-sm self-start md:self-auto">
          <button 
            onClick={() => setActiveTab('campaigns')} 
            className={cn(
              "px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
              activeTab === 'campaigns' 
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
            )}
          >
            Campaigns
          </button>
          <button 
            onClick={() => setActiveTab('forms')} 
            className={cn(
              "px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
              activeTab === 'forms' 
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
            )}
          >
            Forms
          </button>
        </div>
      </div>
      
      {/* --- CAMPAIGNS SECTION --- */}
      {activeTab === 'campaigns' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Active Campaigns" 
              value="2" 
              change="Stable" 
              positive={true} 
              icon={Send} 
              colorClass="text-brand-blue"
              index={0}
            />
            <StatCard 
              title="Total Sent" 
              value="5,590" 
              change="12.5%" 
              positive={true} 
              icon={Users} 
              colorClass="text-brand-blue"
              index={1}
            />
            <StatCard 
              title="Delivered %" 
              value="92.8%" 
              change="5.2%" 
              positive={true} 
              icon={CheckSquare} 
              colorClass="text-green-500"
              index={2}
            />
            <StatCard 
              title="Click Rate" 
              value="15.7%" 
              change="-2.1%" 
              positive={false} 
              icon={MousePointer} 
              colorClass="text-red-500"
              index={3}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartSection 
              title="Performance by Channel" 
              info="Breakdown of campaign metrics by communication channel"
              legendItems={[
                { label: 'Sent', color: 'var(--chart-1)' },
                { label: 'Delivered', color: 'var(--chart-2)' },
                { label: 'Clicked', color: 'var(--chart-3)' },
              ]}
            >
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceByChannelData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                    <XAxis dataKey="name" axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} dy={10} />
                    <YAxis axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} />
                    <RechartsTooltip 
                      cursor={{ fill: 'var(--brand-bg)' }}
                      contentStyle={{ 
                        borderRadius: '16px', 
                        border: '1px solid var(--brand-border)', 
                        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', 
                        padding: '12px',
                        backgroundColor: 'var(--card)'
                      }}
                    />
                    <Bar dataKey="Sent" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Delivered" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Clicked" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </ChartSection>

            <ChartSection 
              title="Survey Status Distribution" 
              info="Current status of all active surveys"
            >
              <div className="flex items-center justify-center h-full">
                <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center gap-8">
                  <div className="w-full sm:w-1/2 h-[250px]">
                    {isMounted && (
                      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={100}>
                        <PieChart>
                          <Pie
                            data={surveyStatusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {surveyStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                          </Pie>
                          <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                  <div className="flex flex-col justify-center gap-6 pr-4">
                    {surveyStatusData.map((item) => (
                      <div key={item.name} className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-brand-dark leading-none">{item.value}%</span>
                          <span className="text-[10px] font-bold text-brand-gray uppercase tracking-wider mt-1">{item.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ChartSection>
          </div>

          {/* Trend Chart */}
          <div className="h-[450px]">
            <ChartSection 
              title="Performance Trend (Last 12 Weeks)" 
              info="Weekly progression of key metrics"
              legendItems={[
                { label: 'Sent', color: 'var(--chart-1)' },
                { label: 'Delivered', color: 'var(--chart-2)' },
                { label: 'Clicked', color: 'var(--chart-3)' },
              ]}
            >
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceTrendData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                    <XAxis dataKey="week" axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} dy={10} />
                    <YAxis axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} />
                    <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="Sent" stroke="var(--chart-1)" fillOpacity={1} fill="url(#colorSent)" strokeWidth={3} />
                    <Area type="monotone" dataKey="Delivered" stroke="var(--chart-2)" fillOpacity={1} fill="url(#colorDelivered)" strokeWidth={3} />
                    <Area type="monotone" dataKey="Clicked" stroke="var(--chart-3)" fillOpacity={0} fill="var(--chart-3)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </ChartSection>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-[24px] border border-brand-border h-full lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                  <h3 className="text-lg font-bold text-brand-dark">Top Performing Campaigns</h3>
                  <Info size={14} className="text-brand-gray/40" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Appointment Reminder SMS', type: 'SMS', conversion: '91.5%', color: 'text-brand-blue' },
                  { name: 'Patient Follow-up Campaign', type: 'EMAIL', conversion: '9.9%', color: 'text-brand-blue' },
                ].map((camp, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-[20px] bg-brand-bg/30 border border-brand-border hover:border-brand-blue/30 transition-all cursor-pointer group">
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{camp.name}</h4>
                        <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mt-1 block">{camp.type}</span>
                      </div>
                      <div className="text-right">
                        <span className={cn("text-xl font-bold", camp.color)}>{camp.conversion}</span>
                        <p className="text-[10px] text-brand-gray font-bold uppercase tracking-wider">Conversion</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            <ChartSection 
              title="Channel Comparison" 
              info="Reach by channel across all active campaigns"
            >
                {isMounted && (
                  <ResponsiveContainer width="100%" height={250} minWidth={0} minHeight={100}>
                    <BarChart layout="vertical" data={channelComparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--brand-border)" />
                      <XAxis type="number" axisLine={true} tickLine={true} tick={{ fontSize: 10, fill: 'var(--brand-gray)' }} />
                      <YAxis dataKey="name" type="category" axisLine={true} tickLine={true} width={80} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} />
                      <RechartsTooltip cursor={{ fill: 'var(--brand-bg)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="Reach" fill="var(--chart-2)" radius={[0, 4, 4, 0]} barSize={32} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
            </ChartSection>
          </div>
        </div>
      )}

      {/* --- FORMS SECTION --- */}
      {activeTab === 'forms' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Forms" 
              value="65" 
              change="14%" 
              positive={true} 
              icon={FileText} 
              colorClass="text-brand-blue" 
              index={0}
            />
            <StatCard 
              title="Total Responses" 
              value="4,997" 
              change="12.4%" 
              positive={true} 
              icon={MessageSquare} 
              colorClass="text-brand-blue" 
              index={1}
            />
            <StatCard 
              title="Response Rate" 
              value="78.5%" 
              change="3.2%" 
              positive={true} 
              icon={CheckSquare} 
              colorClass="text-green-500" 
              index={2}
            />
            <StatCard 
              title="Abandonment Rate" 
              value="12.4%" 
              change="-1.2%" 
              positive={true} 
              icon={LogOut} 
              colorClass="text-red-500" 
              index={3}
            />
          </div>

          {/* Form Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-[450px]">
              <ChartSection 
                title="Sent vs Responded" 
                info="Monthly comparison of sent forms vs responses received"
                legendItems={[
                  { label: 'Sent', color: 'var(--chart-4)' },
                  { label: 'Responded', color: 'var(--chart-1)' },
                ]}
              >
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={sentVsRespondedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                        <XAxis dataKey="month" axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} dy={10} />
                        <YAxis axisLine={true} tickLine={true} tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} />
                        <RechartsTooltip cursor={{ fill: 'var(--brand-bg)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="Sent" fill="var(--chart-4)" radius={[4, 4, 0, 0]} barSize={12} />
                        <Bar dataKey="Responded" fill="var(--chart-1)" radius={[4, 4, 0, 0]} barSize={12} />
                      </BarChart>
                  </ResponsiveContainer>
                )}
              </ChartSection>
            </div>
            
            <div className="h-[450px]">
              <ChartSection 
                title="Channel Distribution" 
                info="Distribution of responses by communication channel"
              >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="h-full w-full">
                      {isMounted && (
                      <ResponsiveContainer width="100%" height={300} minWidth={0} minHeight={100}>
                          <PieChart>
                            <Pie
                              data={channelDistributionData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {channelDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                              ))}
                            </Pie>
                            <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                </div>
              </ChartSection>
            </div>
          </div>

          {/* Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-brand-border p-8 rounded-[24px] flex items-start gap-6 hover:shadow-xl hover:border-brand-blue/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                <TrendingUp size={28} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Top Performer</h4>
                <p className="text-sm text-brand-dark font-medium leading-relaxed">Patient Satisfaction surveys have a <span className="text-brand-blue font-bold">89% completion rate</span> this month.</p>
              </div>
            </div>
            
            <div className="bg-white border border-brand-border p-8 rounded-[24px] flex items-start gap-6 hover:shadow-xl hover:border-brand-blue/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare size={28} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Best Channel</h4>
                <p className="text-sm text-brand-dark font-medium leading-relaxed">SMS forms have <span className="text-emerald-600 font-bold">23% higher</span> conversion than email outreach.</p>
              </div>
            </div>

            <div className="bg-white border border-brand-border p-8 rounded-[24px] flex items-start gap-6 hover:shadow-xl hover:border-brand-blue/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Peak Activity</h4>
                <p className="text-sm text-brand-dark font-medium leading-relaxed">Most form responses are received between <span className="text-indigo-600 font-bold">10 AM - 2 PM</span> daily.</p>
              </div>
            </div>
          </div>

          {/* Forms by Category */}
          <div className="h-[450px]">
            <ChartSection title="Forms by Category" info="Total responses collected per form category">
                {isMounted && (
                  <ResponsiveContainer width="100%" height={300} minWidth={0} minHeight={100}>
                    <BarChart layout="vertical" data={formsByCategoryData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--brand-border)" />
                      <XAxis type="number" axisLine={true} tickLine={true} tick={{ fontSize: 10, fill: 'var(--brand-gray)' }} />
                      <YAxis dataKey="name" type="category" axisLine={true} tickLine={true} width={120} tick={{ fontSize: 11, fill: 'var(--brand-gray)', fontWeight: 'bold' }} />
                      <RechartsTooltip cursor={{ fill: 'var(--brand-bg)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="Responses" fill="var(--chart-2)" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
            </ChartSection>
          </div>
        </div>
      )}
    </div>
  );
};
