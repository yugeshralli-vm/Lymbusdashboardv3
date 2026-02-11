import svgPaths from "./svg-mkm0clfdvi";

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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowRight />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[1.5]">Back to forms</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Frame5 />
        <div className="flex h-[39px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[39px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 1">
                  <line id="Line 10" stroke="var(--stroke-0, #F3F4F6)" x2="39" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.5px]">Form Builder</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex h-[36px] items-center left-0 overflow-clip pl-[40px] pr-[16px] py-[8px] rounded-[10px] top-0 w-[448px]" data-name="Text Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)]">Search</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.0005 14L11.1338 11.1333" id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-[10px] relative shrink-0 w-[448px]" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#6c708c] text-[12px] top-[0.5px]">Main Hospital</p>
      </div>
    </div>
  );
}

function Icon1() {
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

function Container1() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex gap-[8px] h-[36px] items-center px-[16px] relative rounded-[10px] shrink-0 w-[129px]" data-name="Container">
      <Text />
      <Icon1 />
    </div>
  );
}

function SearchAndLocation() {
  return (
    <div className="relative shrink-0" data-name="Search and Location">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[32px] top-0 w-[1440px]" data-name="DashboardHeader">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <SearchAndLocation />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p31104300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b3f8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 9.16667H13.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H13.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 9.16667H6.675" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 13.3333H6.675" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] text-white w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Details</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#374dea] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[24px] shrink-0" data-name="Component 5">
      <Component />
      <Container2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c708c] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Configure</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[16px] relative rounded-[12px] shrink-0" data-name="Component 6">
      <Component1 />
      <Container3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p3df93000} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p176f31c0} id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c708c] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
          <p className="leading-[1.5]">{`Preview & Share`}</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[16px] relative rounded-[12px] shrink-0" data-name="Component 4">
      <Component5 />
      <Container4 />
    </div>
  );
}

function FormsHeader() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start p-[6px] relative rounded-[24px] shrink-0" data-name="Forms Header">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Component3 />
      <Component4 />
      <Component2 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[448px]" data-name="Text Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]">Untitled form</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#151515] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">
        <p className="leading-[1.2] overflow-hidden">Form Name</p>
      </div>
      <TextInput1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex items-start p-[24px] relative w-full">
        <Frame25 />
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#151515] text-[14px]">How would you rate your overall experience at our facility?</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pe801500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L16 10L5 21" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex items-center p-[8px] relative rounded-[10px] shrink-0 size-[41px]">
      <Image />
    </div>
  );
}

function Icon2() {
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

function TextInput3() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex gap-[16px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-[160px]" data-name="Text Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#151515] text-[14px]">Rating Scale</p>
      <Icon2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <TextInput2 />
      <Frame7 />
      <TextInput3 />
    </div>
  );
}

function Frame9() {
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
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
      <Copy />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#6a7282] text-[16px]">Duplicate</p>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Trash />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#c52020] text-[16px]">Delete</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Toggle">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#374dea] h-[12px] left-1/2 rounded-[32px] top-[calc(50%-0.5px)] w-[24px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%+6px)] rounded-[18px] size-[10.5px] top-[calc(50%-0.5px)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#6a7282] text-[16px]">Required</p>
      <Toggle />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-end pl-[30px] relative w-full">
          <Frame14 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[16px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                    <line id="Line 43" stroke="var(--stroke-0, #E5E5E5)" x2="16" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame11 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[16px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                    <line id="Line 43" stroke="var(--stroke-0, #E5E5E5)" x2="16" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#374dea] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame29 />
        <Frame10 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1032 1">
              <line id="Line 41" stroke="var(--stroke-0, #F3F4F6)" x2="1032" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame15 />
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]">Untitled question</p>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pe801500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L16 10L5 21" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex items-center p-[8px] relative rounded-[10px] shrink-0 size-[41px]">
      <Image1 />
    </div>
  );
}

function Icon3() {
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

function TextInput5() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex gap-[16px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0" data-name="Text Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]">Question Type</p>
      <Icon3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex gap-[24px] items-start p-[16px] relative w-full">
        <TextInput4 />
        <Frame8 />
        <TextInput5 />
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#374dea] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[32px] shrink-0 w-[32px]">
      <Plus />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[8px] relative w-full">
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 484 1">
                <line id="Line 44" stroke="var(--stroke-0, #6A7282)" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="483.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame4 />
          <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 484 1">
                <line id="Line 44" stroke="var(--stroke-0, #6A7282)" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="483.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[11px] relative w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
        <g id="Group 30">
          <circle cx="2" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Trash1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Likert Scale</p>
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex h-[18px] items-center justify-center relative shrink-0 w-[11px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] whitespace-pre-wrap">Staff were courteous and respectful</p>
      <Frame21 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
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
          <circle cx="2" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Trash2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex h-[18px] items-center justify-center relative shrink-0 w-[11px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group1 />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] whitespace-pre-wrap">Was your privacy respected during the visit?</p>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Single Choice</p>
      <Frame26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[56px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Frame16 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame28 />
      <Frame27 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[32px] top-[96px] w-[1080px]">
      <FormsHeader />
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Icon4() {
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

function TextInput6() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Range</p>
      </div>
      <TextInput6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
      <div className="flex flex-col justify-center relative shrink-0 w-[32px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Icon</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.5]">Value</p>
      </div>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
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

function TextInput8() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput8 />
    </div>
  );
}

function TextInput9() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput9 />
    </div>
  );
}

function TextInput10() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput10 />
    </div>
  );
}

function TextInput11() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vector">
        <div className="absolute inset-[-1.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput11 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame35 />
        <Frame34 />
        <Frame37 />
        <Frame38 />
        <Frame39 />
        <Frame41 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">Rating Properties</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">
            <p className="leading-[1.2]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="backdrop-blur-[12px] bg-[#374dea] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_10px_30px_0px_rgba(74,109,124,0.1)]" data-name="Overlay">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[1.2]">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[772px] items-start justify-between left-[1152px] p-[24px] rounded-[24px] top-[96px] w-[248px]">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Frame40 />
      <Frame31 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f7f7] relative size-full" data-name="Desktop - 15">
      <DashboardHeader />
      <Frame22 />
      <Frame30 />
    </div>
  );
}