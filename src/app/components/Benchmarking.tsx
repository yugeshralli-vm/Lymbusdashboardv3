import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Info, TrendingUp, TrendingDown, Minus, Target, BarChart2 } from 'lucide-react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface MetricData {
  label: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  score: number;
}

const topBoxCategories = [
  {
    title: "Communication with Nurses",
    benchmark: { percentile: 75, value: 84 },
    metrics: [
      { label: "Your Score", min: 70, q1: 76, median: 80, q3: 84, max: 92, score: 82 },
      { label: "Your System", min: 72, q1: 78, median: 82, q3: 86, max: 93, score: 84 },
      { label: "Lymbus Benchmark", min: 68, q1: 74, median: 78, q3: 82, max: 90, score: 78 },
    ]
  },
  {
    title: "Communication with Doctors",
    benchmark: { percentile: 90, value: 89 },
    metrics: [
      { label: "Your Score", min: 70, q1: 76, median: 80, q3: 84, max: 92, score: 81 },
      { label: "Your System", min: 72, q1: 77, median: 81, q3: 86, max: 93, score: 83 },
      { label: "Lymbus Benchmark", min: 68, q1: 74, median: 79, q3: 83, max: 91, score: 79 },
    ]
  },
  {
    title: "Responsiveness of Hosp. Staff",
    benchmark: { percentile: 50, value: 65 },
    metrics: [
      { label: "Your Score", min: 50, q1: 58, median: 65, q3: 75, max: 88, score: 67 },
      { label: "Your System", min: 53, q1: 61, median: 68, q3: 77, max: 89, score: 70 },
      { label: "Lymbus Benchmark", min: 48, q1: 56, median: 62, q3: 72, max: 85, score: 62 },
    ]
  },
  {
    title: "Comm. About Medicines",
    benchmark: { percentile: 75, value: 67 },
    metrics: [
      { label: "Your Score", min: 50, q1: 56, median: 61, q3: 67, max: 79, score: 63 },
      { label: "Your System", min: 52, q1: 58, median: 64, q3: 70, max: 81, score: 66 },
      { label: "Lymbus Benchmark", min: 47, q1: 54, median: 59, q3: 65, max: 76, score: 59 },
    ]
  },
  {
    title: "Cleanliness of Hospital Env.",
    benchmark: { percentile: 90, value: 85 },
    metrics: [
      { label: "Your Score", min: 59, q1: 68, median: 74, q3: 81, max: 90, score: 76 },
      { label: "Your System", min: 62, q1: 71, median: 77, q3: 83, max: 92, score: 79 },
      { label: "Lymbus Benchmark", min: 56, q1: 65, median: 72, q3: 79, max: 88, score: 72 },
    ]
  },
  {
    title: "Quietness of Hospital Env.",
    benchmark: { percentile: 50, value: 61 },
    metrics: [
      { label: "Your Score", min: 44, q1: 54, median: 61, q3: 69, max: 83, score: 63 },
      { label: "Your System", min: 47, q1: 57, median: 65, q3: 72, max: 85, score: 67 },
      { label: "Lymbus Benchmark", min: 42, q1: 52, median: 58, q3: 67, max: 80, score: 58 },
    ]
  },
  {
    title: "Discharge Information",
    benchmark: { percentile: 75, value: 90 },
    metrics: [
      { label: "Your Score", min: 79, q1: 84, median: 87, q3: 90, max: 94, score: 88 },
      { label: "Your System", min: 81, q1: 86, median: 89, q3: 92, max: 95, score: 90 },
      { label: "Lymbus Benchmark", min: 76, q1: 82, median: 85, q3: 89, max: 93, score: 85 },
    ]
  },
  {
    title: "Care Transition",
    benchmark: { percentile: 75, value: 57 },
    metrics: [
      { label: "Your Score", min: 40, q1: 47, median: 52, q3: 57, max: 68, score: 54 },
      { label: "Your System", min: 43, q1: 50, median: 55, q3: 60, max: 70, score: 57 },
      { label: "Lymbus Benchmark", min: 38, q1: 45, median: 50, q3: 55, max: 65, score: 50 },
    ]
  },
  {
    title: "Hospital Rating",
    benchmark: { percentile: 50, value: 72 },
    metrics: [
      { label: "Your Score", min: 56, q1: 66, median: 72, q3: 79, max: 90, score: 74 },
      { label: "Your System", min: 58, q1: 68, median: 75, q3: 82, max: 91, score: 77 },
      { label: "Lymbus Benchmark", min: 54, q1: 64, median: 70, q3: 77, max: 88, score: 70 },
    ]
  },
  {
    title: "Recommend the Hospital",
    benchmark: { percentile: 90, value: 84 },
    metrics: [
      { label: "Your Score", min: 52, q1: 63, median: 71, q3: 78, max: 89, score: 73 },
      { label: "Your System", min: 55, q1: 66, median: 74, q3: 80, max: 91, score: 76 },
      { label: "Lymbus Benchmark", min: 50, q1: 61, median: 68, q3: 76, max: 87, score: 68 },
    ]
  },
];

const bottomBoxCategories = [
  {
    title: "Communication with Nurses",
    benchmark: { percentile: 25, value: 2 },
    metrics: [
      { label: "Your Score", min: 0, q1: 2, median: 4, q3: 5, max: 9, score: 3 },
      { label: "Your System", min: 0, q1: 1, median: 3, q3: 5, max: 8, score: 3 },
      { label: "Lymbus Benchmark", min: 1, q1: 3, median: 5, q3: 7, max: 10, score: 5 },
    ]
  },
  {
    title: "Communication with Doctors",
    benchmark: { percentile: 50, value: 5 },
    metrics: [
      { label: "Your Score", min: 0, q1: 3, median: 5, q3: 6, max: 10, score: 4 },
      { label: "Your System", min: 0, q1: 2, median: 4, q3: 6, max: 9, score: 3 },
      { label: "Lymbus Benchmark", min: 1, q1: 3, median: 6, q3: 8, max: 11, score: 6 },
    ]
  },
  {
    title: "Responsiveness of Hosp. Staff",
    benchmark: { percentile: 75, value: 13 },
    metrics: [
      { label: "Your Score", min: 0, q1: 5, median: 9, q3: 13, max: 19, score: 8 },
      { label: "Your System", min: 0, q1: 4, median: 7, q3: 11, max: 17, score: 6 },
      { label: "Lymbus Benchmark", min: 2, q1: 7, median: 12, q3: 16, max: 22, score: 12 },
    ]
  },
  {
    title: "Comm. About Medicines",
    benchmark: { percentile: 25, value: 15 },
    metrics: [
      { label: "Your Score", min: 6, q1: 15, median: 20, q3: 24, max: 29, score: 18 },
      { label: "Your System", min: 5, q1: 13, median: 18, q3: 22, max: 27, score: 16 },
      { label: "Lymbus Benchmark", min: 8, q1: 17, median: 22, q3: 26, max: 31, score: 22 },
    ]
  },
  {
    title: "Cleanliness of Hospital Env.",
    benchmark: { percentile: 50, value: 8 },
    metrics: [
      { label: "Your Score", min: 0, q1: 5, median: 8, q3: 11, max: 17, score: 7 },
      { label: "Your System", min: 0, q1: 3, median: 6, q3: 9, max: 15, score: 5 },
      { label: "Lymbus Benchmark", min: 2, q1: 6, median: 10, q3: 14, max: 19, score: 10 },
    ]
  },
  {
    title: "Quietness of Hospital Env.",
    benchmark: { percentile: 75, value: 12 },
    metrics: [
      { label: "Your Score", min: 0, q1: 5, median: 8, q3: 12, max: 20, score: 7 },
      { label: "Your System", min: 0, q1: 4, median: 7, q3: 10, max: 18, score: 6 },
      { label: "Lymbus Benchmark", min: 2, q1: 7, median: 11, q3: 15, max: 22, score: 11 },
    ]
  },
  {
    title: "Discharge Information",
    benchmark: { percentile: 25, value: 10 },
    metrics: [
      { label: "Your Score", min: 6, q1: 10, median: 13, q3: 16, max: 21, score: 12 },
      { label: "Your System", min: 5, q1: 9, median: 11, q3: 14, max: 19, score: 10 },
      { label: "Lymbus Benchmark", min: 8, q1: 12, median: 15, q3: 18, max: 23, score: 15 },
    ]
  },
  {
    title: "Care Transition",
    benchmark: { percentile: 50, value: 5 },
    metrics: [
      { label: "Your Score", min: 1, q1: 4, median: 5, q3: 7, max: 11, score: 5 },
      { label: "Your System", min: 1, q1: 3, median: 4, q3: 6, max: 10, score: 4 },
      { label: "Lymbus Benchmark", min: 2, q1: 5, median: 7, q3: 9, max: 13, score: 7 },
    ]
  },
  {
    title: "Hospital Rating",
    benchmark: { percentile: 75, value: 10 },
    metrics: [
      { label: "Your Score", min: 0, q1: 5, median: 7, q3: 10, max: 16, score: 6 },
      { label: "Your System", min: 0, q1: 4, median: 6, q3: 9, max: 14, score: 5 },
      { label: "Lymbus Benchmark", min: 2, q1: 6, median: 9, q3: 13, max: 18, score: 9 },
    ]
  },
  {
    title: "Recommend the Hospital",
    benchmark: { percentile: 50, value: 5 },
    metrics: [
      { label: "Your Score", min: 0, q1: 3, median: 5, q3: 7, max: 13, score: 4 },
      { label: "Your System", min: 0, q1: 2, median: 4, q3: 6, max: 11, score: 3 },
      { label: "Lymbus Benchmark", min: 1, q1: 4, median: 7, q3: 10, max: 15, score: 7 },
    ]
  },
];

const InfoTooltip = ({ text }: { text: string }) => {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-label={text}
        className="text-brand-gray/50 hover:text-brand-gray transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue/40 rounded-full"
      >
        <Info size={13} />
      </button>
      {show && (
        <span
          role="tooltip"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-3 rounded-xl bg-brand-dark text-white text-[11px] font-medium leading-relaxed whitespace-normal w-56 text-left normal-case tracking-normal shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] z-50 pointer-events-none border-0"
        >
          {text}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px border-[6px] border-transparent border-b-brand-dark" />
        </span>
      )}
    </span>
  );
};

const BoxPlotChart = ({ title, metrics, benchmark }: { title: string, metrics: MetricData[], benchmark: { percentile: number, value: number } }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!chartRef.current) return;
      const tspans = chartRef.current.querySelectorAll('.apexcharts-xaxis-texts-g text tspan');
      tspans.forEach((tspan) => {
        const text = tspan.textContent || '';
        if (text && !text.includes('%')) {
          tspan.textContent = `${text}%`;
        }
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [metrics]);

  const series = [
    {
      name: 'Distribution',
      type: 'boxPlot',
      data: metrics.map(m => ({
        x: m.label,
        y: [m.min, m.q1, m.median, m.q3, m.max]
      }))
    },
    {
      name: 'Actual Score',
      type: 'scatter',
      data: metrics.map(m => ({
        x: m.label,
        y: m.score
      }))
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: 'boxPlot',
      height: 250,
      toolbar: { show: false },
      fontFamily: 'inherit',
      animations: { enabled: true }
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: 'var(--brand-blue)',
          lower: 'var(--brand-blue)'
        }
      },
      bar: {
        horizontal: true,
        barHeight: '35%'
      }
    },
    colors: ['#0052cc', '#FF4560'],
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 100,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: 'var(--brand-gray)',
          fontWeight: 700,
          fontSize: '9px'
        },
      }
    },
    yaxis: {
      labels: {
        minWidth: 100,
        maxWidth: 120,
        style: {
          colors: 'var(--brand-dark)',
          fontWeight: 500,
          fontSize: '11px'
        },
      }
    },
    grid: {
      borderColor: 'var(--brand-border)',
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: { left: 10, right: 10 }
    },
    markers: {
      size: 5,
      colors: ['#ffffff'],
      strokeColors: '#0052cc',
      strokeWidth: 2,
    },
    tooltip: {
      shared: false,
      intersect: true,
      theme: 'light',
    },
    stroke: {
      colors: ['#333'],
      width: 1
    }
  };

  return (
    <div className="bg-card p-5 rounded-[24px] border border-brand-border hover:shadow-md transition-shadow group">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 px-1 gap-1">
        <h3 className="text-sm font-bold text-brand-dark tracking-tight">{title}</h3>
        {(() => {
          const yourScore = metrics.find(m => m.label === 'Your Score');
          if (!yourScore) return null;
          const pctDiff = ((yourScore.score - benchmark.value) / benchmark.value * 100).toFixed(1);
          const isPositive = Number(pctDiff) >= 0;
          const ordinal = benchmark.percentile === 1 ? '1st' : benchmark.percentile === 2 ? '2nd' : benchmark.percentile === 3 ? '3rd' : `${benchmark.percentile}th`;
          return (
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${
              isPositive ? 'text-emerald-600' : 'text-red-500'
            }`}>
              {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {isPositive ? '+' : ''}{pctDiff}%
              <span className="text-brand-gray font-medium ml-0.5">vs {ordinal} percentile of facilities</span>
            </span>
          );
        })()}
      </div>
      <div ref={chartRef}>
      <Chart
        options={{
          ...options,
          yaxis: {
            ...options.yaxis,
            labels: {
              ...options.yaxis?.labels,
              style: {
                ...options.yaxis?.labels?.style,
                fontWeight: 500
              }
            }
          },
          tooltip: {
            ...options.tooltip,
            custom: function({ seriesIndex, dataPointIndex, w }) {
              const data = w.config.series[seriesIndex].data[dataPointIndex];
              const [min, q1, median, q3, max] = data.y;
              const score = data.score;
              const label = data.x;
              const color = data.fillColor || '#0052cc';
              
              return `
                <div class="p-3 bg-white shadow-xl rounded-xl border border-brand-border min-w-[180px] font-sans">
                  <div class="text-[13px] font-extrabold mb-2" style="color: ${color}">${label}</div>
                  <div class="space-y-1">
                    <div class="flex justify-between items-center gap-4">
                      <span class="text-[11px] font-medium text-slate-500">Range:</span>
                      <span class="text-[11px] font-bold text-brand-dark">${min === max ? `${min}%` : `${min}% – ${max}%`}</span>
                    </div>
                    <div class="flex justify-between items-center gap-4">
                      <span class="text-[11px] font-medium text-slate-500">Q1 (25th):</span>
                      <span class="text-[11px] font-bold text-brand-dark">${q1}%</span>
                    </div>
                    <div class="flex justify-between items-center gap-4">
                      <span class="text-[11px] font-medium text-slate-500">Median:</span>
                      <span class="text-[11px] font-bold text-brand-dark">${median}%</span>
                    </div>
                    <div class="flex justify-between items-center gap-4">
                      <span class="text-[11px] font-medium text-slate-500">Q3 (75th):</span>
                      <span class="text-[11px] font-bold text-brand-dark">${q3}%</span>
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-50 mt-1">
                      <span class="text-[11px] font-medium text-slate-500">Your Value:</span>
                      <span class="text-[11px] font-bold" style="color: ${color}">${score}%</span>
                    </div>
                  </div>
                </div>
              `;
            }
          },
          plotOptions: {
            ...options.plotOptions,
            boxPlot: {
              ...options.plotOptions?.boxPlot,
              colors: {
                upper: '#0052cc',
                lower: '#0052cc'
              }
            }
          }
        }}
        series={[{
          name: 'Distribution',
          type: 'boxPlot',
          data: metrics.map(m => {
            let color = '#0052cc';
            if (m.label === 'Your System') color = '#10b981';
            if (m.label === 'Lymbus Benchmark') color = '#8b5cf6';
            return {
              x: m.label,
              y: [m.min, m.q1, m.median, m.q3, m.max],
              score: m.score,
              fillColor: color,
              strokeColor: color
            };
          })
        }]}
        type="boxPlot"
        height={220}
      />
      </div>
    </div>
  );
};

export const Benchmarking = () => {
  const [activeBoxTab, setActiveBoxTab] = useState<'topBox' | 'bottomBox'>('topBox');
  const activeCategories = activeBoxTab === 'topBox' ? topBoxCategories : bottomBoxCategories;

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-brand-dark tracking-tight inline-flex items-center gap-2.5">
              Benchmarking
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase whitespace-nowrap">
                <TrendingUp size={14} strokeWidth={2.5} />
                +4.2% Above National Avg
              </span>
            </h2>
            <p className="text-brand-gray text-[11px] font-bold uppercase tracking-[0.1em] mt-0.5">National & Regional Distribution Analysis</p>
          </div>
        </div>
        
        <div className="inline-flex items-center bg-brand-bg rounded-full p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]">
        {([
          { key: 'topBox' as const, label: 'Highlights', tooltip: "Highlights show the percentage of respondents who selected the highest satisfaction rating (e.g. 'Very Satisfied' or 'Strongly Agree'). Higher is better." },
          { key: 'bottomBox' as const, label: 'Opportunities', tooltip: "Opportunities show the percentage of respondents who selected the lowest satisfaction rating (e.g. 'Very Dissatisfied' or 'Strongly Disagree'). Lower is better." },
        ]).map((tab) => (
          <div
            key={tab.key}
            role="button"
            tabIndex={0}
            onClick={() => setActiveBoxTab(tab.key)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveBoxTab(tab.key); } }}
            className={`relative flex items-center gap-1.5 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors z-10 cursor-pointer select-none ${
              activeBoxTab === tab.key
                ? 'text-white'
                : 'text-brand-gray hover:text-brand-dark'
            }`}
            aria-pressed={activeBoxTab === tab.key}
          >
            {activeBoxTab === tab.key && (
              <Motion.span
                layoutId="benchmarking-tab-pill"
                className="absolute inset-0 bg-brand-blue rounded-full shadow-md"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            <span className={`relative z-10 ${activeBoxTab === tab.key ? '[&_button]:text-white/70 [&_button:hover]:text-white' : ''}`}><InfoTooltip text={tab.tooltip} /></span>
          </div>
        ))}
      </div>
      </div>

      {/* Highlights Grid */}
      <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {(activeBoxTab === 'topBox' ? [
          { icon: Target, title: 'HCAHPS Composite', desc: 'Performing at 78th national percentile', color: 'blue' },
          { icon: BarChart2, title: 'Top Performer', desc: 'Discharge Information at 88% top box', color: 'emerald' },
          { icon: TrendingUp, title: 'Key Opportunity', desc: 'Care Transition trending up +3pts QoQ', color: 'purple' }
        ] : [
          { icon: Target, title: 'HCAHPS Composite', desc: 'Bottom box averaging 8% across measures', color: 'blue' },
          { icon: BarChart2, title: 'Lowest Concern', desc: 'Comm. with Nurses at only 3% bottom box', color: 'emerald' },
          { icon: TrendingUp, title: 'Focus Area', desc: 'Comm. About Medicines at 18% — down 2pts QoQ', color: 'purple' }
        ]).map((item, i) => (
          <div key={i} className="bg-card p-4 rounded-[16px] border border-brand-border flex items-center gap-4 hover:border-brand-blue/30 transition-colors min-w-[260px] md:min-w-0 snap-start shrink-0 md:shrink">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
              item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
              'bg-purple-50 text-purple-600'
            }`}>
              <item.icon size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest leading-none mb-1">{item.title}</p>
              <p className="text-xs font-bold text-brand-dark leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {activeCategories.map((cat) => (
          <BoxPlotChart key={cat.title} title={cat.title} metrics={cat.metrics.filter(m => m.label !== 'Lymbus Benchmark')} benchmark={cat.benchmark} />
        ))}
      </div>

    </div>
  );
};