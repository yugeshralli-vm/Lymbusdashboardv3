import svgPaths from "@/imports/svg-vh5qj8r974";

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-bold leading-[16px] left-0 not-italic text-[12px] text-white/70 top-px uppercase tracking-wider">Aggregate Score</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[118.211px]" data-name="Heading 2">
      <p className="absolute font-bold leading-[60px] left-0 not-italic text-[60px] text-white top-[0.5px] tracking-[-2.7363px]">88.5</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white/10 h-[28px] left-[134.21px] rounded-[8px] top-[28.5px] w-[66.344px]" data-name="Container">
      <Icon />
      <p className="absolute font-bold leading-[28px] left-[20px] not-italic text-[#00d88c] text-[18px] top-0 tracking-[-0.4395px]">4.2%</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_77_177)" id="Icon">
          <path d={svgPaths.p1a1d1d80} id="Vector" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 2.25V5.25" id="Vector_2" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3.75H13.5" id="Vector_3" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12.75V14.25" id="Vector_4" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 13.5H2.25" id="Vector_5" stroke="#00D88C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_77_177">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[14px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Icon1 />
        <p className="font-bold leading-[20px] not-italic relative shrink-0 text-[#00d88c] text-[14px] text-center">Lymbus Insight</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#374dea] h-full lg:h-[200px] relative shrink-0 w-full lg:w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0]/10 border-r border-solid inset-0 pointer-events-none hidden lg:block" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center pl-6 lg:pl-[32px] pr-px py-6 lg:py-0 relative size-full">
        <Paragraph />
        <Container1 />
        <Button />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-auto lg:h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-bold leading-tight lg:leading-[24px] not-italic text-[#0f172b] text-[16px] lg:text-[18px] tracking-tight">What does this mean?</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full max-w-[14px]" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 3.5">
            <path d={svgPaths.p21bae700} id="Vector" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#d0fae5] content-stretch flex flex-col items-center justify-center left-0 rounded-full size-[18px] top-[4px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-auto relative shrink-0 w-full min-h-[22px]" data-name="List Item">
      <Container5 />
      <div className="pl-[30px] pr-4">
        {children}
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-auto items-start relative shrink-0 w-full" data-name="List">
      <ListItem>
        <p className="font-medium leading-[19.25px] not-italic text-[#45556c] text-[14px] tracking-tight">
          Reduced wait times in Cardiology by <span className="font-bold text-[#0f172b]">14 minutes</span> on average.
        </p>
      </ListItem>
      <ListItem>
        <p className="font-medium leading-[19.25px] not-italic text-[#45556c] text-[14px] tracking-tight">
          Patient satisfaction increased by <span className="font-bold text-[#0f172b]">12%</span> in the Emergency Department.
        </p>
      </ListItem>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-1 min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading1 />
        <List />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute right-4 size-[16px] top-1/2 -translate-y-1/2" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#0f172b] h-[40px] relative rounded-[14px] shrink-0 w-full lg:w-[177.086px] hover:bg-[#0f172b]/90 transition-colors" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center pr-8 pl-4">
        <span className="font-bold leading-[20px] not-italic text-[14px] text-white tracking-tight">Check full report</span>
        <Icon4 />
      </div>
    </button>
  );
}

function Container3() {
  return (
    <div className="flex-1 min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col lg:flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col lg:flex-row gap-[24px] items-start lg:items-center p-6 lg:p-[32px] relative w-full">
          <Container4 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export function SplitFocusCard() {
  return (
    <div className="bg-white relative rounded-[24px] w-full border border-[#e2e8f0] overflow-hidden lg:h-[200px]" data-name="SplitFocusCard">
      <div className="content-stretch flex flex-col lg:flex-row items-stretch relative h-full">
        <Container />
        <Container3 />
      </div>
    </div>
  );
}
