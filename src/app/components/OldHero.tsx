import { motion as Motion } from "motion/react";
import { ChevronRight, Zap, MessageCircle } from "lucide-react";

export function OldHero() {
  return (
    <Motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative min-h-[160px] lg:h-[200px] bg-[#374DEA] rounded-[24px] p-6 lg:p-8 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[150px] lg:w-[400px] h-full opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
           <circle cx="350" cy="150" r="100" stroke="white" strokeWidth="2" fill="none" />
           <circle cx="400" cy="100" r="150" stroke="white" strokeWidth="2" fill="none" />
           <path d="M50 180 Q 200 50 350 180" stroke="white" strokeWidth="2" fill="none" />
         </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between h-full gap-6">
        <div className="flex-1">
          <h3 className="text-white/80 text-xs lg:text-sm font-medium mb-2 lg:mb-4">Overall Patient Experience Score</h3>
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="text-3xl lg:text-[48px] font-bold text-white leading-none">88.5</span>
            <div className="bg-green-400/20 px-2 py-1 rounded-md flex items-center gap-1">
              <span className="text-green-400 text-xs lg:text-sm font-bold">+4.2%</span>
              <ChevronRight size={12} className="text-green-400" />
            </div>
          </div>
          <p className="text-white/60 text-xs lg:text-sm mt-2 max-w-[400px]">
            Patient satisfaction shows high volatility this quarter, with significant swings following departmental restructures.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-3 lg:gap-4 lg:mb-2 shrink-0">
          <button className="bg-emerald-400 hover:bg-emerald-500 text-[#0f172b] px-4 lg:px-6 py-2.5 rounded-xl font-bold text-xs lg:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer">
            <Zap size={14} className="lg:w-4 lg:h-4" fill="currentColor" />
            Lymbus
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 lg:px-6 py-2.5 rounded-xl font-bold text-xs lg:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer">
            <MessageCircle size={14} className="lg:w-4 lg:h-4" />
            Respond
          </button>
        </div>
      </div>
    </Motion.section>
  );
}
