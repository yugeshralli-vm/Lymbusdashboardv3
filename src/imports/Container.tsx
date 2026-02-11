import svgPaths from "./svg-2pm7nbaulj";

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Net Promoter Score (NPS)</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">60</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label />
      <TextInput />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Target NPS score for comparison</p>
    </div>
  );
}

function BenchmarkInput() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[1] self-start shrink-0" data-name="BenchmarkInput">
      <Input />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">PREM Score</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-white h-[25px] relative rounded-[12px] shrink-0 w-[28.477px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[9px] not-italic text-[#6a7282] text-[10px] top-[5.5px] tracking-[0.1172px]">%</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">85</p>
          <Text />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Patient Reported Experience Measure target</p>
    </div>
  );
}

function BenchmarkInput1() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[1] self-start shrink-0" data-name="BenchmarkInput">
      <Input1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">PROM Score</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[5px] relative rounded-[12px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">%</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">80</p>
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Patient Reported Outcome Measure target</p>
    </div>
  );
}

function BenchmarkInput2() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[2] self-start shrink-0" data-name="BenchmarkInput">
      <Input2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Response Rate</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-white h-[25px] relative rounded-[12px] shrink-0 w-[28.477px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[9px] not-italic text-[#6a7282] text-[10px] top-[5.5px] tracking-[0.1172px]">%</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">45</p>
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label3 />
      <TextInput3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Target survey response rate</p>
    </div>
  );
}

function BenchmarkInput3() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[2] self-start shrink-0" data-name="BenchmarkInput">
      <Input3 />
      <Paragraph3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Wait Time</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">min</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">15</p>
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label4 />
      <TextInput4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Maximum acceptable wait time in minutes</p>
    </div>
  );
}

function BenchmarkInput4() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[3] self-start shrink-0" data-name="BenchmarkInput">
      <Input4 />
      <Paragraph4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Readmission Rate</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">%</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">5</p>
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label5 />
      <TextInput5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Maximum acceptable readmission rate</p>
    </div>
  );
}

function BenchmarkInput5() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[4] self-start shrink-0" data-name="BenchmarkInput">
      <Input5 />
      <Paragraph5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Patient Satisfaction</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">%</p>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">90</p>
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label6 />
      <TextInput6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Overall satisfaction target</p>
    </div>
  );
}

function BenchmarkInput6() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[3] self-start shrink-0" data-name="BenchmarkInput">
      <Input6 />
      <Paragraph6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase">Communication Score</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">%</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="bg-[#f5f7f7] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]">88</p>
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label7 />
      <TextInput7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Staff communication effectiveness target</p>
    </div>
  );
}

function BenchmarkInput7() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] row-[4] self-start shrink-0" data-name="BenchmarkInput">
      <Input7 />
      <Paragraph7 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[25px] size-[18px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1722c40} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 2.25V6H6" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[46px] relative rounded-[16px] shrink-0 w-[194.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[110.5px] not-italic text-[#6a7282] text-[14px] text-center top-[13.5px] tracking-[-0.1504px]">Reset to Defaults</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p706200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p37e41c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1a808380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3649e9] h-[44px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0 w-[196.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[24px] py-[10px] relative size-full">
        <Icon1 />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px]">Save Benchmarks</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="/ 2] col-[1 content-stretch flex gap-[16px] h-[63px] items-center justify-end relative row-[5] shrink-0 span" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(5,_fit-content(100%))] p-[24px] relative rounded-[24px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <BenchmarkInput />
      <BenchmarkInput1 />
      <BenchmarkInput2 />
      <BenchmarkInput3 />
      <BenchmarkInput4 />
      <BenchmarkInput5 />
      <BenchmarkInput6 />
      <BenchmarkInput7 />
      <Container1 />
    </div>
  );
}