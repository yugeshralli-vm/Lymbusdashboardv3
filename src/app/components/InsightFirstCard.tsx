import React from "react";
import svgPaths from "@/imports/svg-20xmpkwyde";

function Icon() {
  return (
    <div className="size-full overflow-clip relative shrink-0" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.336 117.336">
            <path d={svgPaths.p2b431700} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-5.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 32">
            <path d="M5.33333 5.33333V26.6667" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.33px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10.6667">
            <path d="M26.6667 5.33333H5.33333" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-5.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 21.3333">
            <path d="M5.33333 5.33333V16" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-5.33px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 10.6667">
            <path d="M16 5.33333H5.33333" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DecorativeIcon() {
  return (
    <div className="absolute opacity-10 right-[-24px] lg:right-[-1px] top-0 size-[140px] lg:size-[192px] p-[24px] lg:p-[32px] pointer-events-none" data-name="Container">
      <Icon />
    </div>
  );
}

function LymbusBadge() {
  return (
    <div className="bg-[#4f39f6] h-[24px] px-3 flex items-center gap-2 rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 w-fit" data-name="Container">
      <div className="size-[14px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g clipPath="url(#clip0_81_326)" id="Icon">
            <path d={svgPaths.p1af8b080} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
          <defs>
            <clipPath id="clip0_81_326">
              <rect fill="white" height="14" width="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="font-bold leading-none text-[12px] text-white">Lymbus Insight</p>
    </div>
  );
}

export function InsightFirstCard() {
  return (
    <div 
      className="border border-[#e0e7ff] relative rounded-[24px] w-full min-h-[160px] lg:h-[200px] overflow-hidden flex items-center" 
      data-name="InsightFirstCard" 
      style={{ backgroundImage: "linear-gradient(166.414deg, rgb(238, 242, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <DecorativeIcon />
      
      <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 w-full">
        <LymbusBadge />
        
        <h3 className="font-bold text-[#0f172b] text-[18px] lg:text-[22px] leading-snug lg:leading-tight tracking-tight max-w-[800px]">
          Patient satisfaction is at its highest point in a year, driven by recent improvements in the West Wing.
        </h3>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-0.5">
              <p className="font-bold text-[#90a1b9] text-[10px] uppercase tracking-wider">Current Score</p>
              <p className="font-bold text-[#0f172b] text-[20px] lg:text-[24px] leading-none">88.5</p>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <p className="font-bold text-[#90a1b9] text-[10px] uppercase tracking-wider">YoY Trend</p>
              <p className="font-bold text-[#096] text-[20px] lg:text-[24px] leading-none">+4.2%</p>
            </div>
          </div>
          
          <button className="flex items-center gap-1.5 px-px hover:opacity-80 transition-opacity cursor-pointer group mt-1 sm:mt-0">
            <p className="font-bold text-[#4f39f6] text-[14px] text-center">See what changed</p>
            <div className="size-[16px] group-hover:translate-x-0.5 transition-transform">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Icon">
                  <path d="M3.33333 8H12.6667" id="Vector" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 3.33333L12.6667 8L8 12.6667" id="Vector_2" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
