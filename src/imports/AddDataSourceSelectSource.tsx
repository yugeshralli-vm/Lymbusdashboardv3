import svgPaths from "./svg-hqq8ajqs43";

function Frame() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3a2fa580} fill="var(--fill-0, #3649E9)" id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="leading-[27px] relative shrink-0 text-[#09156a] text-[18px] w-full">Add Data Source</p>
      <p className="leading-[normal] relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">Select a clinic to add the data source to.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start p-[24px] relative w-full">
        <Frame10 />
        <Button />
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

function TextInput() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">City General Hospital</p>
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[293px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Facility Selection</p>
      </div>
      <TextInput />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[16px] items-start relative w-full">
        <Frame8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
          <Frame11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FormsGrid() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Forms Grid">
      <Container1 />
    </div>
  );
}

function HardDrive() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="hard-drive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hard-drive">
          <path d="M18.3333 10H1.66667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p25edbe70} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 13.3333H8.34167" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <HardDrive />
    </div>
  );
}

function FormCardTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-h-px min-w-px not-italic relative" data-name="Form Card Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="leading-[18.7px] whitespace-pre-wrap">EMR System</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Electronic Medical Records</p>
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Frame3 />
        <FormCardTitle />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white col-[1] relative rounded-[24px] row-[1] self-start shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative w-full">
          <FormCard />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Database() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.4px)] size-[20px] top-1/2" data-name="database">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="database">
          <path d={svgPaths.p2e7662c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2a9b1a40} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p294b9f80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <Database />
    </div>
  );
}

function FormCardTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Form Card Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="leading-[18.7px] whitespace-pre-wrap">Database</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Direct database connection</p>
      </div>
    </div>
  );
}

function FormCardHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Form Card Header">
      <FormCardTitle1 />
    </div>
  );
}

function FormCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Frame4 />
        <FormCardHeader />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white col-[2] relative rounded-[24px] row-[1] self-start shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative w-full">
          <FormCard1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Globe() {
  return (
    <div className="absolute left-[9.8px] size-[20px] top-[10px]" data-name="globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="globe">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M1.66667 10H18.3333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2e900180} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <Globe />
    </div>
  );
}

function FormCardTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Form Card Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="leading-[18.7px] whitespace-pre-wrap">Rest API</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Connect via REST API endpoints</p>
      </div>
    </div>
  );
}

function FormCardHeader1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Form Card Header">
      <FormCardTitle2 />
    </div>
  );
}

function FormCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Frame5 />
        <FormCardHeader1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white col-[1] relative rounded-[24px] row-[2] self-start shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative w-full">
          <FormCard2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FileText() {
  return (
    <div className="absolute left-[10.2px] size-[20px] top-[10px]" data-name="file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p3d578880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p24539800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 7.5H7.5H6.66667" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <FileText />
    </div>
  );
}

function FormCardTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Form Card Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="leading-[18.7px] whitespace-pre-wrap">Excel File</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Import data from spreadsheets</p>
      </div>
    </div>
  );
}

function FormCardHeader2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Form Card Header">
      <FormCardTitle3 />
    </div>
  );
}

function FormCard3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Frame6 />
        <FormCardHeader2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white col-[2] relative rounded-[24px] row-[2] self-start shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative w-full">
          <FormCard3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FileText1() {
  return (
    <div className="absolute left-[9.6px] size-[20px] top-[10px]" data-name="file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p3d578880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p24539800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 7.5H7.5H6.66667" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f5f7f7] overflow-clip relative rounded-[12px] shrink-0 size-[40px]">
      <FileText1 />
    </div>
  );
}

function FormCardTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Form Card Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="leading-[18.7px] whitespace-pre-wrap">Google Sheets</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Sync data from Google Sheets</p>
      </div>
    </div>
  );
}

function FormCardHeader3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Form Card Header">
      <FormCardTitle4 />
    </div>
  );
}

function FormCard4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Frame7 />
        <FormCardHeader3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white col-[1] relative rounded-[24px] row-[3] self-start shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative w-full">
          <FormCard4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FormsGrid1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Forms Grid">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(3,_fit-content(100%))] p-[25px] relative w-full">
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f5f7f7] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <FormsGrid />
          <FormsGrid1 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] w-full" />
    </div>
  );
}

export default function AddDataSourceSelectSource() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[24px] size-full" data-name="Add Data Source - Select Source">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame9 />
      <Container7 />
    </div>
  );
}