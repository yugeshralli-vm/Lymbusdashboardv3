import svgPaths from "./svg-y3oer09coa";

function Label() {
  return (
    <div className="h-[13.493px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#848ab4] text-[10px] top-[0.22px] tracking-[0.5px] uppercase">Mobile Number</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p1d087800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pr-[0.01px] relative rounded-[16px] shrink-0 size-[24px]" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0 size-[19.996px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[43.994px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Select mobile number</p>
          <Button />
          <Option />
          <Option1 />
          <Option2 />
          <Option3 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[260px]" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Container3() {
  return <div className="bg-white rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[16px]" data-name="Container" />;
}

function Toggle() {
  return (
    <div className="bg-[#eee] content-stretch flex flex-col h-[20px] items-start justify-center px-[2px] relative rounded-[16777200px] shrink-0 w-[32px]" data-name="Toggle">
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center py-[8px] relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Allow Duplicates</p>
      <Toggle />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <Container2 />
      <Frame />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[#3649e9] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
            <p className="leading-[1.2]">Verify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center relative shrink-0 w-[100px]">
      <Overlay />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container1 />
    </div>
  );
}