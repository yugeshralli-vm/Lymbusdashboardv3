import svgPaths from "./svg-g6411p540y";
import imgEllipse1 from "figma:asset/b4afd5209fa1b1e49ad566f80669447c53f85543.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36bb6c80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] h-full items-center px-[24px] py-[10px] relative">
        <Icon />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center">Insights</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3649e9] h-[40px] relative rounded-[24px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] h-full items-center px-[24px] py-[10px] relative">
        <Icon1 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white">Campaigns</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] h-full items-center px-[24px] py-[10px] relative">
        <Icon2 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center">Forms</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] h-full items-center px-[24px] py-[10px] relative">
        <Icon3 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center">Responses</p>
      </div>
    </div>
  );
}

function TabsEngagement() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[50px] items-center p-[5px] relative rounded-[12px] shrink-0" data-name="Tabs/Engagement">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function FormsListHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[597.5px]" data-name="Forms List Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#09156a] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">All Campaigns</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Manage and track your active outreach</p>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="table">
          <path d={svgPaths.p12a93580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <Table />
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="grid">
          <path d={svgPaths.pa70ae00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M14 2H9.33333V6.66667H14V2Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p3088a200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p33ab9000} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[#3649e9] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Grid />
    </div>
  );
}

function ViewToggle() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center justify-center relative rounded-[12px] shrink-0" data-name="View Toggle">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[256px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]">Search</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p108cee00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center pb-px pt-[11px] px-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon5 />
    </div>
  );
}

function SearchFilter() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Search & Filter">
      <Container1 />
      <Button4 />
    </div>
  );
}

function FormsListActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Forms List Actions">
      <ViewToggle />
      <SearchFilter />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <FormsListHeader />
      <FormsListActions />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[47.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Flu Vaccination Drive 2026</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">01, Feb 2026 - 31, Mar 2026</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">99%</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">85%</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">64%</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">92%</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#00d88c] h-[6px] rounded-[60px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Wh() {
  return (
    <div className="bg-[#f0fdf4] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#10b981] text-[10px] tracking-[0.5px] uppercase">Active</p>
        </div>
      </div>
    </div>
  );
}

function Campaign() {
  return (
    <div className="bg-white col-[1] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[1] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container3 />
      <Heading />
      <Container5 />
      <Container6 />
      <Container10 />
      <Wh />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[47.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Button6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Flu Vaccination Drive 2026</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">01, Feb 2026 - 31, Mar 2026</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">99%</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">85%</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">64%</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">92%</p>
    </div>
  );
}

function Container24() {
  return <div className="bg-[#00d88c] h-[6px] rounded-[60px] shrink-0 w-full" data-name="Container" />;
}

function Container23() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Wh1() {
  return (
    <div className="bg-[#f0fdf4] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#10b981] text-[10px] tracking-[0.5px] uppercase">Active</p>
        </div>
      </div>
    </div>
  );
}

function Campaign1() {
  return (
    <div className="bg-white col-[3] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[1] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container14 />
      <Heading1 />
      <Container16 />
      <Container17 />
      <Container21 />
      <Wh1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[47.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Button7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Flu Vaccination Drive 2026</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">01, Feb 2026 - 31, Mar 2026</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">99%</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">85%</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">64%</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">92%</p>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#00d88c] h-[6px] rounded-[60px] shrink-0 w-full" data-name="Container" />;
}

function Container34() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Wh2() {
  return (
    <div className="bg-[#f0fdf4] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#10b981] text-[10px] tracking-[0.5px] uppercase">Active</p>
        </div>
      </div>
    </div>
  );
}

function Campaign2() {
  return (
    <div className="bg-white col-[2] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[2] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container25 />
      <Heading2 />
      <Container27 />
      <Container28 />
      <Container32 />
      <Wh2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[57.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Email</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[57.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Button8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Telehealth Awareness Campaign</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">10, Jan 2026 - 15, Apr 2026</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">88%</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">45%</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">12%</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container39() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">25%</p>
    </div>
  );
}

function Container46() {
  return <div className="bg-[#dc2626] h-[6px] rounded-[60px] shrink-0 w-[36px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Wh3() {
  return (
    <div className="bg-[#fffbea] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] tracking-[0.5px] uppercase">Paused</p>
        </div>
      </div>
    </div>
  );
}

function Campaign3() {
  return (
    <div className="bg-white col-[4] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[1] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container36 />
      <Heading3 />
      <Container38 />
      <Container39 />
      <Container43 />
      <Wh3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[57.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Email</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[57.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Button9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Telehealth Awareness Campaign</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">10, Jan 2026 - 15, Apr 2026</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">88%</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">45%</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">12%</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Container50() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">25%</p>
    </div>
  );
}

function Container57() {
  return <div className="bg-[#dc2626] h-[6px] rounded-[60px] shrink-0 w-[36px]" data-name="Container" />;
}

function Container56() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Wh4() {
  return (
    <div className="bg-[#fffbea] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[10px] tracking-[0.5px] uppercase">Paused</p>
        </div>
      </div>
    </div>
  );
}

function Campaign4() {
  return (
    <div className="bg-white col-[1] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[2] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container47 />
      <Heading4 />
      <Container49 />
      <Container50 />
      <Container54 />
      <Wh4 />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[47.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-[119.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text7 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Button10 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Diabetic Wellness Outreach</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon17 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">01, Nov 2025 - 31, Jan 2026</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">92%</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">54%</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">31%</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">45%</p>
    </div>
  );
}

function Container68() {
  return <div className="bg-[#d97706] h-[6px] rounded-[60px] shrink-0 w-[94px]" data-name="Container" />;
}

function Container67() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Wh5() {
  return (
    <div className="bg-[#fef2f2] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] tracking-[0.5px] uppercase">Ended</p>
        </div>
      </div>
    </div>
  );
}

function Campaign5() {
  return (
    <div className="bg-white col-[2] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[1] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container58 />
      <Heading5 />
      <Container60 />
      <Container61 />
      <Container65 />
      <Wh5 />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#f5f7f7] h-[24px] relative rounded-[12px] shrink-0 w-[47.68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">SMS</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-[119.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Text8 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5937b80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p273dc00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[26px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Button11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[27px] min-h-px min-w-px not-italic relative text-[#09156a] text-[18px] whitespace-pre-wrap">Diabetic Wellness Outreach</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase w-[178px] whitespace-pre-wrap">01, Nov 2025 - 31, Jan 2026</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">92%</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Delivered</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">54%</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Opened</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-[2] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">31%</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.6145px] uppercase">Clicked</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="col-[3] content-stretch flex flex-col items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
    </div>
  );
}

function Container72() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[16.5px] not-italic relative shrink-0 text-[10px] tracking-[0.6145px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 text-[#6a7282]">Overall Performance</p>
      <p className="relative shrink-0 text-[#09156a]">45%</p>
    </div>
  );
}

function Container79() {
  return <div className="bg-[#d97706] h-[6px] rounded-[60px] shrink-0 w-[94px]" data-name="Container" />;
}

function Container78() {
  return (
    <div className="bg-[#f5f7f7] h-[6px] relative rounded-[60px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[17.922px] relative size-full">
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[29px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Wh6() {
  return (
    <div className="bg-[#fef2f2] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="wh">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#dc2626] text-[10px] tracking-[0.5px] uppercase">Ended</p>
        </div>
      </div>
    </div>
  );
}

function Campaign6() {
  return (
    <div className="bg-white col-[3] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] row-[2] self-start shrink-0 w-[252px]" data-name="Campaign">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container69 />
      <Heading6 />
      <Container71 />
      <Container72 />
      <Container76 />
      <Wh6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Campaign />
      <Campaign1 />
      <Campaign2 />
      <Campaign3 />
      <Campaign4 />
      <Campaign5 />
      <Campaign6 />
    </div>
  );
}

function FormsList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Forms List">
      <Container />
      <Container2 />
    </div>
  );
}

function FormsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Forms Section">
      <TabsEngagement />
      <FormsList />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[40px] top-[96px] w-[1080px]" data-name="Main Content">
      <FormsSection />
    </div>
  );
}

function H() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="H3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.95px]">Engagement</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 13.9995L11.1333 11.1328" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex gap-[16px] h-[36px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[448px]" data-name="Text Input">
      <Icon20 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">Search...</p>
    </div>
  );
}

function Icon21() {
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

function Button12() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex gap-[8px] h-full items-center px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px] text-center">Main Hospital</p>
      <Icon21 />
    </div>
  );
}

function H1() {
  return (
    <div className="relative shrink-0" data-name="H3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <TextInput />
        <div className="flex flex-row items-center self-stretch">
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between pb-px px-[32px] right-0 top-0 w-[1160px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#eee] border-b border-solid inset-0 pointer-events-none" />
      <H />
      <H1 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[42.794px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7938 42.7938">
        <g id="Icon">
          <path d="M8.91533 21.3969H33.8784" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.56615" />
          <path d="M21.3969 8.91541V33.8785" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.56615" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#3649e9] content-stretch flex items-center justify-center left-[-2.79px] rounded-[60px] shadow-[0px_25px_50px_0px_rgba(55,77,234,0.3)] size-[85.588px] top-[-2.79px]" data-name="Button">
      <Icon22 />
    </div>
  );
}

function FabAdd() {
  return (
    <div className="absolute bottom-[40px] right-[40px] size-[80px]" data-name="FAB/Add">
      <Button13 />
    </div>
  );
}

function Icon23() {
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

function Container80() {
  return (
    <div className="bg-[#3649e9] relative rounded-[12px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[92.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.5px] tracking-[-0.95px]">Lymbus</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[24px] relative w-full">
          <Container80 />
          <Text9 />
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
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component />
          <Container81 />
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
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Lymbus AI</p>
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
          <Container82 />
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
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Root Cause</p>
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
          <Container83 />
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
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Benchmarking</p>
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
          <Container84 />
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
          <path d={svgPaths.p3df93000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p176f31c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Engagement</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#3649e9] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(55,77,234,0.2),0px_4px_6px_-4px_rgba(55,77,234,0.2)] shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <Component9 />
          <Container85 />
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
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Escalation</p>
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
          <Container86 />
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
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Reports</p>
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
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function NavigationList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation List">
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
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09156a] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Settings</p>
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
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_319_6643)" id="help-circle">
          <path d={svgPaths.p2bae4c0} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p22540600} id="Vector_2" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
        <defs>
          <clipPath id="clip0_319_6643">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09156a] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">{`Help & Support`}</p>
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
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function SettingsAndHelp() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Settings and Help">
      <Component14 />
      <Component16 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="List">
      <NavigationList />
      <SettingsAndHelp />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="User Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium items-start justify-center leading-[0] not-italic relative w-full">
        <div className="flex flex-col justify-center relative shrink-0 text-[#09156a] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Robert Fox</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">rfox@gmail.com</p>
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
          <path d={svgPaths.p11c75a40} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="User Profile">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="relative shrink-0 size-[32px]">
            <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1} width="32" />
          </div>
          <UserInfo />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserProfileSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="User Profile Section">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="231" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <UserProfile />
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <List />
          <UserProfileSection />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[900px] items-start left-0 pr-px top-0 w-[280px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#eee] border-r border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <Nav />
    </div>
  );
}

export default function EnagementCampaignCards() {
  return (
    <div className="bg-[#f5f7f7] relative size-full" data-name="Enagement - Campaign - Cards">
      <MainContent />
      <Header />
      <FabAdd />
      <Sidebar />
    </div>
  );
}