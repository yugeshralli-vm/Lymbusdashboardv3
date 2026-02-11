import React from 'react';
import { motion as Motion } from 'motion/react';
import { Info, TrendingUp, Target, ChevronRight, BarChart2 } from 'lucide-react';
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

const benchmarkCategories = [
  {
    title: "% Promoters (9-10)",
    metrics: [
      { label: "Your Score", min: 48, q1: 54, median: 58, q3: 64, max: 70, score: 58 },
      { label: "Your System", min: 52, q1: 58, median: 62, q3: 67, max: 75, score: 62 },
      { label: "Lymbus Benchmark", min: 45, q1: 52, median: 56, q3: 62, max: 72, score: 56 },
    ]
  },
  {
    title: "Response Rate",
    metrics: [
      { label: "Your Score", min: 32, q1: 38, median: 42, q3: 48, max: 55, score: 42 },
      { label: "Your System", min: 35, q1: 41, median: 45, q3: 52, max: 60, score: 45 },
      { label: "Lymbus Benchmark", min: 28, q1: 34, median: 38, q3: 44, max: 50, score: 38 },
    ]
  },
  {
    title: "PREM Score",
    metrics: [
      { label: "Your Score", min: 72, q1: 78, median: 84, q3: 88, max: 94, score: 84 },
      { label: "Your System", min: 75, q1: 81, median: 86, q3: 91, max: 96, score: 86 },
      { label: "Lymbus Benchmark", min: 68, q1: 75, median: 82, q3: 86, max: 92, score: 82 },
    ]
  },
  {
    title: "Staff Communication",
    metrics: [
      { label: "Your Score", min: 65, q1: 72, median: 76, q3: 82, max: 90, score: 76 },
      { label: "Your System", min: 68, q1: 75, median: 79, q3: 85, max: 92, score: 79 },
      { label: "Lymbus Benchmark", min: 62, q1: 70, median: 74, q3: 80, max: 88, score: 74 },
    ]
  },
  {
    title: "Discharge Process",
    metrics: [
      { label: "Your Score", min: 60, q1: 68, median: 72, q3: 78, max: 85, score: 72 },
      { label: "Your System", min: 62, q1: 70, median: 75, q3: 81, max: 88, score: 75 },
      { label: "Lymbus Benchmark", min: 58, q1: 65, median: 70, q3: 76, max: 82, score: 70 },
    ]
  }
];

const BoxPlotChart = ({ title, metrics }: { title: string, metrics: MetricData[] }) => {
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
        }
      }
    },
    yaxis: {
      labels: {
        minWidth: 100,
        maxWidth: 120,
        style: {
          colors: 'var(--brand-dark)',
          fontWeight: 800,
          fontSize: '11px'
        }
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
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-sm font-bold text-brand-dark tracking-tight">{title}</h3>
      </div>
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
  );
};

export const Benchmarking = () => {
  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-brand-dark tracking-tight">Benchmarking</h2>
          <p className="text-brand-gray text-[11px] font-bold uppercase tracking-[0.1em] mt-0.5">National & Regional Distribution Analysis</p>
        </div>
        
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <TrendingUp size={14} className="text-emerald-600" />
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">+4.2% Above National Avg</span>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Target, title: 'Internal Benchmark', desc: '88th percentile in healthcare system', color: 'blue' },
          { icon: BarChart2, title: 'Response Stability', desc: 'Consistent 42% engagement rate', color: 'emerald' },
          { icon: TrendingUp, title: 'Key Strength', desc: 'Consistently exceeding clinical excellence targets', color: 'purple' }
        ].map((item, i) => (
          <div key={i} className="bg-card p-4 rounded-[16px] border border-brand-border flex items-center gap-4 hover:border-brand-blue/30 transition-colors">
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
        {benchmarkCategories.map((cat) => (
          <BoxPlotChart key={cat.title} title={cat.title} metrics={cat.metrics} />
        ))}
      </div>

    </div>
  );
};
