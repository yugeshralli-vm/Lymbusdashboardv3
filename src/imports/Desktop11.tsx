import svgPaths from "./svg-6hm1zo0l4f";
import imgEllipse1 from "figma:asset/b4afd5209fa1b1e49ad566f80669447c53f85543.png";

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
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.0005 14L11.1338 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px]">Main Hospital</p>
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

function Frame106() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-[280px] pb-px px-[32px] top-0 w-[1160px]" data-name="DashboardHeader">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.5px]">Dashboard</p>
      <Frame106 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p14760580} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#374dea] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[92.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.5px] tracking-[-0.5px]">Lymbus AI</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Container2 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] text-white w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#374dea] relative rounded-[14px] shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Lymbus AI</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Root Cause</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component5 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Benchmarking</p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component7 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3df93000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p176f31c0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Engagement</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component9 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Escalation</p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component11 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Reports</p>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component13 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Component1 />
      <Component2 />
      <Component4 />
      <Component6 />
      <Component8 />
      <Component10 />
      <Component12 />
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[26px] py-[16px] relative w-full">
          <Component15 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2937)" id="help-circle">
          <path d={svgPaths.p2bae4c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p22540600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
        <defs>
          <clipPath id="clip0_1_2937">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">{`Help & Support`}</p>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[26px] py-[16px] relative w-full">
          <HelpCircle />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Component14 />
      <Component16 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="List">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative w-full">
        <div className="flex flex-col justify-center relative shrink-0 text-[#151515] text-[14px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Robert Fox</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#cecece] text-[12px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">rfox@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative size-[16px]" data-name="arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p11c75a40} id="Vector" stroke="var(--stroke-0, #C3C3C3)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1} width="32" />
          </div>
          <Frame101 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="231" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <List />
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[900px] items-start left-0 pr-px top-0 w-[280px]" data-name="Aside">
      <div aria-hidden="true" className="absolute border-[#eee] border-r border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <Nav />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[-25%] left-[62.5%] right-[-12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-50%] left-1/2 right-[-25%] top-0" data-name="Vector">
        <div className="absolute inset-[-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.25%_-0.21%_-0.98%_-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-start left-[736px] opacity-10 top-[-10px] w-[400px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[80.547px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-0">88.5</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#00c853] text-[14px] top-[0.5px]">+4.2%</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[16.971px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9706 16.9706">
        <g id="Icon">
          <path d={svgPaths.p20ba5000} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.82843" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[1.515px] h-[28px] items-center left-[96.55px] pl-[8px] rounded-[10px] top-[14px]" data-name="Container">
      <Text2 />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[126px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic opacity-70 relative shrink-0 text-[14px] text-white">Overall Patient Experience Score</p>
        <Container15 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic opacity-70 relative shrink-0 text-[12px] text-white w-[286px] whitespace-pre-wrap">Across all 12 departments, patient satisfaction has reached a 12-month high.</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_3097)" id="Icon">
          <path d={svgPaths.p1a1d1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 2.25V5.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3.75H13.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12.75V14.25" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 13.5H2.25" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_3097">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#04bdd1] relative rounded-[14px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative">
        <Icon5 />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Lymbus Insight</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p329b1880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative">
        <Icon6 />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Respond</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[32px] top-[32px] w-[1016px]" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function HeroCard() {
  return (
    <div className="bg-[#374dea] h-[190px] overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="HeroCard">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
            <path d={svgPaths.p10d53400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.42%_13.46%_35.42%_13.42%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-5.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6625 6.75002">
            <path d={svgPaths.p564d80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Net Promoter Score</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container19 />
    </div>
  );
}

function Component17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">5.2% vs last month</p>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="h-[15px] shrink-0 w-0" data-name="Container" />;
}

function Container22() {
  return (
    <div className="bg-[rgba(10,196,0,0.1)] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Component17 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">58</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_54.17%_83.33%_45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 0.75V2.25" id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_79.17%_83.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 0.75V2.25" id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_41.67%_37.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
            <path d={svgPaths.p378e8100} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[33.33%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 8.25">
            <path d={svgPaths.pf49de98} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-3/4 right-[8.33%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
            <path d={svgPaths.p2c328e80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">PREM Score</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container26 />
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">3.8% vs last month</p>
      </div>
    </div>
  );
}

function Container31() {
  return <div className="h-[15px] shrink-0 w-0" data-name="Container" />;
}

function Container29() {
  return (
    <div className="bg-[rgba(10,196,0,0.1)] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Component18 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">92</p>
      </div>
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame3 />
        <Frame4 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.p362bfe80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">PROM Score</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container33 />
    </div>
  );
}

function Component19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 2">
          <path d={svgPaths.p10ae5c80} id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8.5H11V5.5" id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">1.3%vs last month</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(197,32,32,0.1)] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Component19 />
      <Container37 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">7.5%</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame5 />
        <Frame7 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Response Rate</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Container39 />
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">2.3% vs last month</p>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="h-[15px] shrink-0 w-0" data-name="Container" />;
}

function Container41() {
  return (
    <div className="bg-[rgba(10,196,0,0.1)] content-stretch flex gap-[4px] items-center pb-[2px] pt-[2.6px] px-[6px] relative rounded-[12px] shrink-0" data-name="Container">
      <Component20 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">42%</p>
      </div>
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Container18 />
      <Container25 />
      <Container32 />
      <Container38 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">Experience Trends</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Container">
      <Container46 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container45 />
    </div>
  );
}

function Component21() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #166BC0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[1.75px] pt-[4.25px] relative shrink-0" data-name="Item">
      <Component21 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">NPS</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #008F7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[1.75px] pt-[4.25px] relative shrink-0" data-name="Item">
      <Component22 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PREM</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #3C8CDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[1.75px] pt-[4.25px] relative shrink-0" data-name="Item">
      <Component23 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PROM</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.52%_0.71%_23.01%_5.97%]" data-name="Group">
      <div className="absolute inset-[-0.31%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642.026 164.827">
          <g id="Group">
            <path d="M0 164.327H642.026" id="Vector" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0 123.369H642.026" id="Vector_2" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0 82.4135H642.026" id="Vector_3" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0.000221471 41.4567H642.026" id="Vector_4" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0.000243921 0.5H642.026" id="Vector_5" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.52%_0.71%_23.01%_5.97%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[79.25%_93.12%_15.3%_4.85%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_93.12%_15.3%_4.85%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Jul</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[79.25%_73.98%_15.3%_23.26%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_73.98%_15.3%_23.26%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Aug</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[79.25%_55.39%_15.3%_41.85%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_55.39%_15.3%_41.85%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Sep</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[79.25%_36.81%_15.3%_60.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_36.81%_15.3%_60.72%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Oct</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[79.25%_17.99%_15.3%_79.25%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_17.99%_15.3%_79.25%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Nov</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[79.25%_0.14%_15.3%_97.09%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.25%_0.14%_15.3%_97.09%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">Dec</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[79.25%_0.14%_15.3%_4.85%]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[79.25%_0.14%_5.11%_4.85%]" data-name="Group">
      <Group3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[88.98%_0.19%_5.11%_94.87%] leading-[normal] not-italic text-[#1359a0] text-[10.995px] text-right">Month</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[73.12%_95.27%_21.42%_3.72%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[73.12%_95.27%_21.42%_3.72%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">0</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[54.5%_95.32%_40.04%_2.79%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[54.5%_95.32%_40.04%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">25</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[35.89%_95.32%_58.66%_2.79%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[35.89%_95.32%_58.66%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">50</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[17.27%_95.47%_77.27%_2.79%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.27%_95.47%_77.27%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">75</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0.65%_95.39%_93.89%_1.99%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.65%_95.39%_93.89%_1.99%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center">100</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0.65%_95.27%_21.42%_1.99%]" data-name="Group">
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.65%_95.27%_21.42%_-0.94%]" data-name="Group">
      <Group11 />
      <div className="absolute flex inset-[25.67%_99.05%_60.24%_-0.94%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[13px] w-[31px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#1359a0] text-[10.995px]">Score</p>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[33.8%_0.27%_23.01%_5.97%]" data-name="Group">
      <div className="absolute inset-[-1.31%_-0.01%_0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.172 96.2682">
          <g id="Group">
            <path d={svgPaths.p148c8a80} fill="url(#paint0_linear_1_2981)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p5c86200} id="Vector_2" stroke="var(--stroke-0, #166BC0)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2981" x1="0.047584" x2="0.047584" y1="1.24909" y2="96.2682">
              <stop offset="0.05" stopColor="#166BC0" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#166BC0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[33.8%_0.27%_23.01%_5.97%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[13.69%_0.27%_23.01%_5.97%]" data-name="Group">
      <div className="absolute inset-[-0.9%_0_0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.148 140.502">
          <g id="Group">
            <path d={svgPaths.p23acb00} fill="url(#paint0_linear_1_3034)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p10ca3f00} id="Vector_2" stroke="var(--stroke-0, #008F7C)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3034" x1="0.047584" x2="0.047584" y1="1.25" y2="140.502">
              <stop offset="0.05" stopColor="#008F7C" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#008F7C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[13.69%_0.27%_23.01%_5.97%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[18.91%_0.27%_23.01%_5.97%]" data-name="Group">
      <div className="absolute inset-[-0.98%_-0.01%_0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.176 129.033">
          <g id="Group">
            <path d={svgPaths.p33780c00} fill="url(#paint0_linear_1_3030)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p104072c0} id="Vector_2" stroke="var(--stroke-0, #3C8CDD)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3030" x1="0.0515376" x2="0.0515376" y1="1.24909" y2="129.033">
              <stop offset="0.05" stopColor="#3C8CDD" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#3C8CDD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[18.91%_0.27%_23.01%_5.97%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Component24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Component 1">
      <Group />
      <Group2 />
      <Group10 />
      <Group17 />
      <Group19 />
      <Group21 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-h-[220px] max-w-[753px] min-h-px min-w-px relative w-full" data-name="Container">
      <Component24 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[220px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] self-stretch shrink-0 w-[736px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#04bdd1] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">All Alerts</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Frame105() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">Active Alerts</p>
        </div>
        <Frame13 />
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(197,32,32,0.1)] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[24px]" data-name="Overlay">
      <Component26 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Overlay />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[11px] whitespace-nowrap">
        <p className="leading-[1.2]">Emergency NPS Drop</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(197,32,32,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[16.5px]">2h ago</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
      <Container52 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame14 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">Cardiology department NPS dropped 15 points this week.</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 16">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Container51 />
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.pa1bcac0} id="Vector" stroke="var(--stroke-0, #BA7908)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f7f3780} id="Vector_2" stroke="var(--stroke-0, #BA7908)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(186,121,8,0.1)] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[24px]" data-name="Overlay">
      <Component28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Overlay1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ba7908] text-[11px] whitespace-nowrap">
        <p className="leading-[1.2]">Wait Time Complaints Rising</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(186,121,8,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[16.5px]">2h ago</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame18 />
      <Container54 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">32% increase in wait time mentions in feedback.</p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 17">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Container53 />
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, #166BC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(22,107,192,0.1)] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[24px]" data-name="Overlay">
      <Component30 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#166bc0] text-[12px] whitespace-nowrap">
        <p className="leading-[1.2]">New Feedback Batch</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Overlay2 />
      <Heading1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(22,107,192,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[16.5px]">2h ago</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame20 />
      <Container56 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame19 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full">
        <p className="leading-[1.3] whitespace-pre-wrap">147 new patient responses ready for analysis.</p>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 18">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <Frame105 />
      <Component25 />
      <Component27 />
      <Component29 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container44 />
      <Container50 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#151515] text-[16px]">
        <p className="leading-[1.3]">Breakdown by Department</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-[rgba(21,21,21,0.7)]">
        <p className="leading-[1.3]">Operational Performance Context</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="download">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7624a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Export Table</p>
      </div>
      <Download />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Filter />
      <Frame23 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">Department Performance</p>
        </div>
        <Frame111 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Department</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">Neurology</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">Pediatrics</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">Oncology</p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">Dermatology</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px sticky top-0">
      <Frame32 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame40 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame42 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame43 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame44 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Forms</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame33 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame46 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame47 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame48 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame49 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Requests</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame34 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame51 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame52 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame53 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame54 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Responses</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame35 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame57 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame58 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame59 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame60 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Response Rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame36 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame62 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame63 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame64 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame65 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Rating</p>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame37 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame67 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame68 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame69 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame70 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Experience</p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">54/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame38 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame72 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame73 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame74 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame75 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Complaints</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">3%</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container59 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">15%</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[rgba(251,113,133,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container61 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">7%</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container63 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">3%</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container65 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame39 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame77 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame78 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame79 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame80 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame45 />
      <Frame50 />
      <Frame55 />
      <Frame61 />
      <Frame66 />
      <Frame71 />
      <Frame76 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container57 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="1080" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame31 />
      <Container66 />
    </div>
  );
}

function Component31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[720px]">
      <Component31 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[1.3]">{`Try Lymbus AI: `}</span>
          <span className="font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[1.3]">{`"Compare Cardiology performance across all locations"`}</span>
        </p>
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[-25%] left-[62.5%] right-[-12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-50%] left-1/2 right-[-25%] top-0" data-name="Vector">
        <div className="absolute inset-[-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.25%_-0.21%_-0.98%_-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-start left-[752px] opacity-10 top-[-88px] w-[400px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#374dea] relative rounded-[24px] shrink-0 w-[1080px]" data-name="Container">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-full">
        <Frame110 />
        <ArrowRight1 />
        <Container68 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame56 />
      <Container67 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2c3e50] text-[16px]">
        <p className="leading-[1.3]">Breakdown by Location</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-[rgba(21,21,21,0.7)]">
        <p className="leading-[1.3]">Operational Performance Context</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Best Performing</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">84% Experience Score</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-center pb-[2px] pt-[2.6px] px-[6px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container71 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[1.2]">West Clinic</p>
      </div>
      <Container70 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Frame25 />
          <Frame26 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Response Fatigue</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ba7908] text-[11px] whitespace-nowrap">
        <p className="leading-[1.2]">62% Response Rate</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(255,179,138,0.1)] content-stretch flex items-center pb-[2px] pt-[2.6px] px-[6px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container74 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[1.2]">North Center</p>
      </div>
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Frame27 />
          <Frame28 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]">
        <p className="leading-[1.5] whitespace-pre-wrap">High Complaint Density</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">15% Negative Feedback</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[rgba(251,113,133,0.1)] content-stretch flex items-center pb-[2px] pt-[2.6px] px-[6px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container77 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
        <p className="leading-[1.2]">North Center</p>
      </div>
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <Frame29 />
          <Frame30 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container69 />
      <Container72 />
      <Container75 />
    </div>
  );
}

function Filter1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="download">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7624a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Export Table</p>
      </div>
      <Download1 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Filter1 />
      <Frame84 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between p-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">Location Performance</p>
        </div>
        <Frame112 />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Location</p>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">Main Hospital</p>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">East Wing</p>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">West Wing</p>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">North Center</p>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px sticky top-0">
      <Frame87 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame88 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame89 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame90 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame91 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Requests</p>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame93 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame94 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame95 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame96 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame97 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Responses</p>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame99 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame100 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame107 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame113 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame114 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Response Rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame116 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame117 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame118 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame119 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame120 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Rating</p>
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap">
            <p className="leading-[1.5]">4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame122 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame123 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame124 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame125 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame126 />
      <div className="h-px relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase">Negatives</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">3%</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container80 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">15%</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[rgba(251,113,133,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container82 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">7%</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container84 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">3%</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[rgba(74,109,124,0.1)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Container">
      <Container86 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="h-[53px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame128 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame129 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame130 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame131 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame132 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame86 />
      <Frame92 />
      <Frame98 />
      <Frame115 />
      <Frame121 />
      <Frame127 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[24px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container78 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="1080" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame85 />
      <Container87 />
    </div>
  );
}

function Component32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[720px]">
      <Component32 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[1.3]">{`Try Lymbus AI: `}</span>
          <span className="font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[1.3]">{`"Why does North Center have a lower response rate?"`}</span>
        </p>
      </div>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[-25%] left-[62.5%] right-[-12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-50%] left-1/2 right-[-25%] top-0" data-name="Vector">
        <div className="absolute inset-[-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.25%_-0.21%_-0.98%_-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-start left-[752px] opacity-10 top-[-88px] w-[400px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#374dea] relative rounded-[24px] shrink-0 w-[1080px]" data-name="Container">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-full">
        <Frame133 />
        <ArrowRight2 />
        <Container89 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Container88 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1499px] items-start left-[320px] top-[96px] w-[1080px]">
      <HeroCard />
      <Frame2 />
      <Frame10 />
      <Frame108 />
      <Frame109 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f7f7] relative size-full" data-name="Desktop - 11">
      <DashboardHeader />
      <Aside />
      <Frame6 />
    </div>
  );
}