import svgPaths from "./svg-gzdih821mx";

function Component() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 2">
          <path d={svgPaths.p368df400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p3a53aa80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8 7.33333H10.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8 10.6667H10.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M5.33333 7.33333H5.34" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M5.33333 10.6667H5.34" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#374dea] relative rounded-[24px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center px-[24px] py-[10px] relative">
        <Component />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18.7px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.015px]">Details</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1864)" id="settings">
          <path d={svgPaths.p28db2b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p7bdac40} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_145_1864">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center px-[23px] py-[10px] relative">
        <Settings />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center tracking-[-0.15px]">Configure</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 2">
          <path d={svgPaths.p3783f000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p18797270} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center px-[23px] py-[10px] relative">
        <Component1 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center tracking-[-0.15px]">{`Preview & Share`}</p>
      </div>
    </div>
  );
}

function TabsFormBuilder() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[50px] items-start p-[5px] relative rounded-[12px] shrink-0" data-name="Tabs/ Form Builder">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.15px]">Untitled form</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex items-start p-[24px] relative w-full">
        <TextInput />
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.15px]">How would you rate your overall experience at our facility?</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TextInput1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[192px]">
      <div className="absolute inset-[-1.56%_-0.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 33">
          <g id="Frame 1480">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.pa766600} fill="var(--fill-0, #F5F7F7)" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p282a1200} fill="var(--fill-0, #F5F7F7)" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p21d84100} fill="var(--fill-0, #F5F7F7)" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p104ac00} fill="var(--fill-0, #F5F7F7)" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Toggle">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#374dea] h-[12px] left-1/2 rounded-[24px] top-[calc(50%-0.5px)] w-[24px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%+6px)] rounded-[24px] size-[10.5px] top-[calc(50%-0.5px)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Required</p>
      <Toggle />
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1846)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_145_1846">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0">
      <Copy />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Duplicate</p>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0">
      <Trash />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ef4444] text-[10px] tracking-[0.5px] uppercase">Delete</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#374dea] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame21 />
        <Frame5 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 672 1">
              <line id="Line 41" stroke="var(--stroke-0, #EEEEEE)" x2="672" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[11px] relative w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
        <g id="Group 30">
          <circle cx="2" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1846)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_145_1846">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Copy1 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Trash1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Rating Scale</p>
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex h-[18px] items-center justify-center relative shrink-0 w-[11px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">Staff were courteous and respectful</p>
      <Frame16 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[11px] relative w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
        <g id="Group 30">
          <circle cx="2" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #6A7282)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #6A7282)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1846)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_145_1846">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Copy2 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Trash2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex h-[18px] items-center justify-center relative shrink-0 w-[11px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group1 />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">Was your privacy respected during the visit?</p>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Single Choice</p>
      <Frame20 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[56px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <TabsFormBuilder />
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[837px] items-center left-[280px] px-[80px] py-[32px] top-[63px] w-[880px]">
      <Frame17 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09156a] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Range</p>
      </div>
      <TextInput2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#09156a] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-[32px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Icon</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.5]">Label</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput3 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput4 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput5 />
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput6 />
    </div>
  );
}

function TextInput7() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput7 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame27 />
        <Frame26 />
        <Frame29 />
        <Frame30 />
        <Frame31 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#09156a] text-[18px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">Rating Properties</p>
        </div>
        <Frame28 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[12px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[normal]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="backdrop-blur-[12px] bg-[#374dea] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[12px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#374dea] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_30px_0px_rgba(74,109,124,0.1)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.15px] whitespace-nowrap">
            <p className="leading-[normal]">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center relative w-full">
        <Overlay />
        <Overlay1 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[836px] items-start justify-between pl-[24px] pr-[25px] py-[24px] right-0 top-[64px] w-[280px]">
      <div aria-hidden="true" className="absolute border-[#eee] border-r border-solid inset-0 pointer-events-none" />
      <Frame32 />
      <Frame23 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative size-[12px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BackToForms() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Back to forms">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowRight />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[normal]">Back to forms</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="H3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <BackToForms />
        <div className="flex h-[39px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[39px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 1">
                  <line id="Line 10" stroke="var(--stroke-0, #EEEEEE)" x2="39" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.95px]">Form Builder</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[32px] top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <H />
    </div>
  );
}

function FormIcons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p594ce00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 13.3333H10" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2.66667V13.3333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Short Text</p>
    </div>
  );
}

function BuilderButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons />
      <ShortTextInfo />
    </div>
  );
}

function FormIcons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d="M2 8H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2 4H14" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2 12H14" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Paragraph</p>
    </div>
  );
}

function BuilderButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons1 />
      <ShortTextInfo1 />
    </div>
  );
}

function FormIcons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d="M2.66667 6H13.3333" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2.66667 10H13.3333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M6.66667 2L5.33333 14" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M10.6667 2L9.33333 14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Number</p>
    </div>
  );
}

function BuilderButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons2 />
      <ShortTextInfo2 />
    </div>
  );
}

function FormIcons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p33da2400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1e10f200} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Email</p>
    </div>
  );
}

function BuilderButton3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons3 />
      <ShortTextInfo3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <BuilderButton />
      <BuilderButton1 />
      <BuilderButton2 />
      <BuilderButton3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Text Elements</p>
      <Frame38 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function RatingScaleInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Rating Scale Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px] w-full whitespace-pre-wrap">Rating</p>
    </div>
  );
}

function RatingScale() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Rating Scale">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon1 />
      <RatingScaleInfo />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1861)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_145_1861">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NpsScaleInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="NPS Scale Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px] w-full whitespace-pre-wrap">NPS</p>
    </div>
  );
}

function NpsScale() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="NPS Scale">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon2 />
      <NpsScaleInfo />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1811)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_145_1811">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LikertScaleInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Likert Scale Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px] w-full whitespace-pre-wrap">Emoji</p>
    </div>
  );
}

function LikertScale() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Likert Scale">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon3 />
      <LikertScaleInfo />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <RatingScale />
      <NpsScale />
      <LikertScale />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Feedback Elements</p>
      <Frame37 />
    </div>
  );
}

function FormIcons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p594ce00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 13.3333H10" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2.66667V13.3333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Dropdown</p>
    </div>
  );
}

function BuilderButton4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons4 />
      <ShortTextInfo4 />
    </div>
  );
}

function FormIcons5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p3fd78780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2fab5380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white">Yes/No</p>
    </div>
  );
}

function BuilderButton5() {
  return (
    <div className="bg-[#374dea] content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0 w-[107.5px]" data-name="Builder Button">
      <FormIcons5 />
      <ShortTextInfo5 />
    </div>
  );
}

function FormIcons6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p299d1200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Checkbox</p>
    </div>
  );
}

function BuilderButton6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons6 />
      <ShortTextInfo6 />
    </div>
  );
}

function FormIcons7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1757)" id="Form Icons">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36e45a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_145_1757">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShortTextInfo7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Radio</p>
    </div>
  );
}

function BuilderButton7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons7 />
      <ShortTextInfo7 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <BuilderButton4 />
      <BuilderButton5 />
      <BuilderButton6 />
      <BuilderButton7 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Multi Elements</p>
      <Frame39 />
    </div>
  );
}

function FormIcons8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d="M2 8H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2 4H14" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2 12H14" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Paragraph</p>
    </div>
  );
}

function BuilderButton8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons8 />
      <ShortTextInfo8 />
    </div>
  );
}

function FormIcons9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p20f5c300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M4.66667 4.66667H4.67333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Label</p>
    </div>
  );
}

function BuilderButton9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons9 />
      <ShortTextInfo9 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <BuilderButton8 />
      <BuilderButton9 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Other Elements</p>
      <Frame42 />
    </div>
  );
}

function FormIcons10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p2949300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Attachment</p>
    </div>
  );
}

function BuilderButton10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons10 />
      <ShortTextInfo10 />
    </div>
  );
}

function FormIcons11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1cf31e80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p16e6b800} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Image</p>
    </div>
  );
}

function BuilderButton11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons11 />
      <ShortTextInfo11 />
    </div>
  );
}

function FormIcons12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">File Upload</p>
    </div>
  );
}

function BuilderButton12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons12 />
      <ShortTextInfo12 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <BuilderButton10 />
      <BuilderButton11 />
      <BuilderButton12 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Media Elements</p>
      <Frame47 />
    </div>
  );
}

function FormIcons13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Form Icons">
          <path d={svgPaths.p3ee34580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M5.33333 1.33333V4" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function ShortTextInfo13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Date</p>
    </div>
  );
}

function BuilderButton13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons13 />
      <ShortTextInfo13 />
    </div>
  );
}

function FormIcons14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Form Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_145_1735)" id="Form Icons">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
        <defs>
          <clipPath id="clip0_145_1735">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShortTextInfo14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Short Text Info">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[12px]">Time</p>
    </div>
  );
}

function BuilderButton14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[12px] shrink-0 w-[107.5px]" data-name="Builder Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <FormIcons14 />
      <ShortTextInfo14 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <BuilderButton13 />
      <BuilderButton14 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Date Elements</p>
      <Frame48 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#09156a] text-[18px] w-full">
          <p className="leading-[27px] whitespace-pre-wrap">Elements</p>
        </div>
        <Frame40 />
        <Frame46 />
        <Frame43 />
        <Frame45 />
        <Frame44 />
        <Frame41 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[836px] items-start left-0 pl-[24px] pr-[25px] py-[24px] top-[64px] w-[280px]">
      <div aria-hidden="true" className="absolute border-[#eee] border-r border-solid inset-0 pointer-events-none" />
      <Frame36 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f7f7] relative size-full" data-name="Desktop - 21">
      <Frame34 />
      <Frame22 />
      <Header />
      <Frame35 />
    </div>
  );
}