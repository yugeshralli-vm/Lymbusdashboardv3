import svgPaths from "./svg-y98h1qn5xd";

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

function Frame11() {
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
        <Frame11 />
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[293px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Facility Selection</p>
      </div>
      <TextInput />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[16px] items-start relative w-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
          <Frame12 />
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
        <p className="leading-[normal] overflow-hidden">Connect to Electronic Medical Records</p>
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

function TextInput1() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">City General Hospital</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="/ 2] col-[1 content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-start shrink-0 span">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Data Source Name</p>
      </div>
      <TextInput1 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">https://sunrise.health/api</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="/ 2] col-[1 content-stretch flex flex-col gap-[8px] items-start relative row-[2] self-start shrink-0 span">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">API Endpoint</p>
      </div>
      <TextInput2 />
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
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">FHIR R4</p>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start relative row-[3] self-start shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">FHIR Version</p>
      </div>
      <TextInput3 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f5f7f7] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">SC_21324</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start relative row-[3] self-start shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Client ID</p>
      </div>
      <TextInput4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(3,_fit-content(100%))] relative w-full">
        <Frame5 />
        <Frame6 />
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[358px] min-h-px min-w-px relative rounded-[24px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
          <FormCard />
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FormsGrid1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Forms Grid">
      <Container2 />
    </div>
  );
}

function Frame10() {
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

function Overlay() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[normal]">Back</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[#3649e9] content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div aria-hidden="true" className="absolute border border-[#3649e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="leading-[normal]">Create Data Source</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Frame4 />
      </div>
    </div>
  );
}

export default function AddDataSourceEmr() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[24px] size-full" data-name="Add Data Source - EMR">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <Container3 />
    </div>
  );
}