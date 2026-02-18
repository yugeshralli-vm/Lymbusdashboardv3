import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  Building2,
  Sparkles,
  Info,
  ChevronRight,
  Target,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  FileText,
  MessageCircle
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { useFocusTrap } from './useFocusTrap';

interface MetricDetailOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  metric: {
    title: string;
    value: string;
    change: string;
    positive: boolean;
    icon: any;
    colorClass: string;
  } | null;
}

const METRIC_DETAIL_DATA: Record<string, {
  description: string;
  benchmark: string;
  benchmarkValue: number;
  currentValue: number;
  unit: string;
  trend: { month: string; value: number }[];
  breakdown: { name: string; value: number; change: string; positive: boolean }[];
  insights: string[];
  status: 'above' | 'below' | 'at';
}> = {
  'Net Promoter Score': {
    description: 'Measures patient loyalty and likelihood to recommend services. Calculated by subtracting the percentage of detractors from promoters.',
    benchmark: '60',
    benchmarkValue: 60,
    currentValue: 58,
    unit: '',
    trend: [
      { month: 'Aug', value: 52 },
      { month: 'Sep', value: 48 },
      { month: 'Oct', value: 55 },
      { month: 'Nov', value: 53 },
      { month: 'Dec', value: 56 },
      { month: 'Jan', value: 58 },
    ],
    breakdown: [
      { name: 'Neurology', value: 72, change: '+8.1%', positive: true },
      { name: 'Pediatrics', value: 61, change: '+3.2%', positive: true },
      { name: 'Oncology', value: 55, change: '-2.4%', positive: false },
      { name: 'Dermatology', value: 44, change: '+1.8%', positive: true },
    ],
    insights: [
      'NPS is 2 points below the target benchmark of 60. Focus on Oncology and Dermatology to close the gap.',
      'Neurology leads with a score of 72, driven by high patient satisfaction with post-treatment follow-ups.',
      'Detractor rate dropped 4% month-over-month, primarily in the Pediatrics department.',
    ],
    status: 'below',
  },
  'PREM Score': {
    description: 'Patient Reported Experience Measures. Standardized metrics evaluating the quality of care delivery, communication, and overall patient journey.',
    benchmark: '85',
    benchmarkValue: 85,
    currentValue: 92,
    unit: '',
    trend: [
      { month: 'Aug', value: 84 },
      { month: 'Sep', value: 86 },
      { month: 'Oct', value: 88 },
      { month: 'Nov', value: 89 },
      { month: 'Dec', value: 91 },
      { month: 'Jan', value: 92 },
    ],
    breakdown: [
      { name: 'Neurology', value: 95, change: '+2.1%', positive: true },
      { name: 'Pediatrics', value: 93, change: '+4.5%', positive: true },
      { name: 'Oncology', value: 90, change: '+1.8%', positive: true },
      { name: 'Dermatology', value: 88, change: '-0.3%', positive: false },
    ],
    insights: [
      'PREM Score exceeds target benchmark by 7 points. Consistently above target for 4 consecutive months.',
      'Patient communication scores improved 6% across all departments following the new orientation program.',
      'Dermatology showed a slight dip of 0.3% — linked to extended appointment wait times on Wednesdays.',
    ],
    status: 'above',
  },
  'PROM Score': {
    description: 'Patient Reported Outcome Measures. Assesses health outcomes from the patient\'s perspective, measuring their perceived improvement after treatment.',
    benchmark: '80',
    benchmarkValue: 80,
    currentValue: 75,
    unit: '%',
    trend: [
      { month: 'Aug', value: 82 },
      { month: 'Sep', value: 79 },
      { month: 'Oct', value: 77 },
      { month: 'Nov', value: 76 },
      { month: 'Dec', value: 74 },
      { month: 'Jan', value: 75 },
    ],
    breakdown: [
      { name: 'Neurology', value: 82, change: '+1.2%', positive: true },
      { name: 'Pediatrics', value: 78, change: '-1.8%', positive: false },
      { name: 'Oncology', value: 71, change: '-3.4%', positive: false },
      { name: 'Dermatology', value: 69, change: '-0.5%', positive: false },
    ],
    insights: [
      'PROM Score is trending downward, 5 points below the 80% target. Oncology and Dermatology need intervention.',
      'Patients in the 45-64 age group reported the lowest outcome satisfaction, particularly post-surgical recovery.',
      'Neurology is the only department meeting PROM targets, with strong follow-up care protocols in place.',
    ],
    status: 'below',
  },
  'Response Rate': {
    description: 'The percentage of patients who completed their assigned feedback surveys. Higher response rates provide more statistically reliable data for decision making.',
    benchmark: '45',
    benchmarkValue: 45,
    currentValue: 42,
    unit: '%',
    trend: [
      { month: 'Aug', value: 38 },
      { month: 'Sep', value: 39 },
      { month: 'Oct', value: 40 },
      { month: 'Nov', value: 41 },
      { month: 'Dec', value: 40 },
      { month: 'Jan', value: 42 },
    ],
    breakdown: [
      { name: 'Main Hospital', value: 48, change: '+3.2%', positive: true },
      { name: 'East Wing', value: 44, change: '+1.8%', positive: true },
      { name: 'West Clinic', value: 39, change: '-0.5%', positive: false },
      { name: 'North Center', value: 36, change: '-2.1%', positive: false },
    ],
    insights: [
      'Response rate is 3% below the 45% target. SMS reminders have shown to increase completion by ~8%.',
      'Main Hospital leads at 48%, attributed to the new in-clinic tablet survey stations.',
      'North Center\'s response rate dropped 2.1% — consider shorter survey forms for this location.',
    ],
    status: 'below',
  },
};

const CHART_COLORS: Record<string, string> = {
  'Net Promoter Score': 'var(--chart-1)',
  'PREM Score': 'var(--chart-2)',
  'PROM Score': 'var(--chart-3)',
  'Response Rate': 'var(--brand-blue)',
};

const BAR_COLORS = ['#374DEA', '#34d399', '#93c5fd', '#f59e0b'];

export const MetricDetailOverlay: React.FC<MetricDetailOverlayProps> = ({
  isOpen,
  onClose,
  metric,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { containerRef } = useFocusTrap({ isOpen, onClose });

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!metric) return null;

  const data = METRIC_DETAIL_DATA[metric.title];
  if (!data) return null;

  const chartColor = CHART_COLORS[metric.title] || 'var(--brand-blue)';
  const Icon = metric.icon;

  const statusConfig = {
    above: { label: 'Above Target', cls: 'bg-emerald-50 text-emerald-600 border-emerald-100', icon: CheckCircle2 },
    below: { label: 'Below Target', cls: 'bg-amber-50 text-amber-600 border-amber-100', icon: AlertCircle },
    at: { label: 'On Target', cls: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', icon: Target },
  };
  const statusInfo = statusConfig[data.status];
  const StatusIcon = statusInfo.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div ref={containerRef}>
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-[560px] bg-brand-bg z-[80] shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${metric.title} details`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-brand-border z-10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    metric.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-brand-dark">{metric.title}</h2>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${statusInfo.cls}`}>
                        <StatusIcon size={10} />
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-brand-bg rounded-xl transition-colors text-brand-gray"
                  aria-label="Close metric details"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Value + benchmark summary */}
              <div className="bg-card rounded-[24px] border border-brand-border p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Current</p>
                    <p className="text-[32px] font-bold text-brand-dark leading-tight">{metric.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {metric.positive ? (
                        <ArrowUpRight size={14} className="text-green-500" />
                      ) : (
                        <ArrowDownRight size={14} className="text-red-500" />
                      )}
                      <span className={`text-[12px] font-bold ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Target</p>
                    <p className="text-[32px] font-bold text-brand-dark leading-tight">{data.benchmark}{data.unit}</p>
                    <p className="text-[11px] text-brand-gray font-medium mt-1">Benchmark</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Gap</p>
                    <p className={`text-[32px] font-bold leading-tight ${
                      data.currentValue >= data.benchmarkValue ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {data.currentValue >= data.benchmarkValue ? '+' : ''}{data.currentValue - data.benchmarkValue}
                    </p>
                    <p className="text-[11px] text-brand-gray font-medium mt-1">
                      {data.currentValue >= data.benchmarkValue ? 'Above target' : 'Below target'}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-brand-gray leading-relaxed mt-4 pt-4 border-t border-brand-border/50">
                  {data.description}
                </p>
              </div>

              {/* Trend Chart */}
              <div className="bg-card rounded-[24px] border border-brand-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-brand-dark">6-Month Trend</h3>
                  <div className="flex items-center gap-1.5">
                    {data.trend[data.trend.length - 1].value > data.trend[0].value ? (
                      <TrendingUp size={14} className="text-emerald-500" />
                    ) : (
                      <TrendingDown size={14} className="text-red-500" />
                    )}
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      data.trend[data.trend.length - 1].value > data.trend[0].value ? 'text-emerald-500' : 'text-red-500'
                    }`}>
                      {data.trend[data.trend.length - 1].value > data.trend[0].value ? 'Upward' : 'Downward'}
                    </span>
                  </div>
                </div>

                <div className="w-full min-h-[200px]">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={data.trend} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                        <defs>
                          <linearGradient id={`gradient-${metric.title.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColor} stopOpacity={0.2} />
                            <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 700 }}
                          dy={10}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 700 }}
                          domain={['dataMin - 5', 'dataMax + 5']}
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
                          itemStyle={{ fontSize: '12px', fontWeight: 700 }}
                        />
                        {/* Benchmark reference line */}
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke={chartColor}
                          strokeWidth={3}
                          fill={`url(#gradient-${metric.title.replace(/\s/g, '')})`}
                          dot={{ r: 4, fill: chartColor, strokeWidth: 2, stroke: 'var(--card)' }}
                          activeDot={{ r: 6, strokeWidth: 0 }}
                          animationDuration={800}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>

                {/* Benchmark reference */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-brand-border/50">
                  <Target size={12} className="text-brand-gray" />
                  <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                    Benchmark Target: {data.benchmark}{data.unit}
                  </span>
                </div>
              </div>

              {/* Breakdown by Department/Location */}
              <div className="bg-card rounded-[24px] border border-brand-border p-6">
                <h3 className="text-sm font-bold text-brand-dark mb-5">
                  {metric.title === 'Response Rate' ? 'Breakdown by Location' : 'Breakdown by Department'}
                </h3>

                <div className="space-y-3">
                  {data.breakdown.map((item, idx) => {
                    const maxVal = Math.max(...data.breakdown.map(b => b.value));
                    const barWidth = (item.value / maxVal) * 100;

                    return (
                      <div key={item.name} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <Building2 size={12} className="text-brand-gray" />
                            <span className="text-xs font-bold text-brand-dark">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-brand-dark">{item.value}{data.unit}</span>
                            <span className={`text-[10px] font-bold ${item.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                              {item.change}
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-brand-bg rounded-full overflow-hidden">
                          <Motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${barWidth}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: BAR_COLORS[idx % BAR_COLORS.length] }}
                          />
                        </div>
                        {/* Benchmark indicator */}
                        {item.value < data.benchmarkValue && (
                          <p className="text-[10px] text-amber-600 font-medium mt-1 flex items-center gap-1">
                            <AlertCircle size={10} />
                            {data.benchmarkValue - item.value} points below target
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-card rounded-[24px] border border-brand-border p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles size={14} className="text-brand-blue" />
                  <h3 className="text-sm font-bold text-brand-dark italic">Lymbus AI Insights</h3>
                </div>

                <div className="space-y-3">
                  {data.insights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-[12px] bg-brand-bg/50 border border-brand-border/50"
                    >
                      <p className="text-xs text-brand-dark leading-relaxed font-medium">
                        {insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-brand-blue rounded-[24px] p-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <p className="text-xs font-medium italic">
                    Ask Lymbus: <span className="font-bold">"Why is {metric.title} {data.status === 'below' ? 'below' : 'above'} target?"</span>
                  </p>
                </div>
                <ChevronRight size={18} className="text-white/60 shrink-0" />
              </div>

              {/* Spacer at bottom for scroll comfort */}
              <div className="h-4" />
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};