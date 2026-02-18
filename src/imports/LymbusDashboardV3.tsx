import svgPaths from "./svg-mf2ij7quay";
import imgImageUser from "figma:asset/15343118c63e9cb39b630818c97dfae6d385d10a.png";

function Container1() {
  return <div className="h-0 shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return <div className="h-[809.982px] shrink-0 w-full" data-name="Container" />;
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] h-[873.987px] min-h-px min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[279.997px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex h-[873.987px] items-start relative shrink-0 w-full" data-name="Container">
      <MainContent />
    </div>
  );
}

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function PK() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex flex-col h-[873.987px] items-start left-0 top-0 w-[1440.732px]" data-name="pK">
      <Container />
      <Section />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-[114.097px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.16px] tracking-[-0.9492px]">Engagement</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex h-[35.995px] items-center left-0 overflow-clip pl-[40px] pr-[16px] rounded-[16px] top-0 w-[447.991px]" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(9,21,106,0.5)] tracking-[-0.1504px]">Search...</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11.99px] size-[15.999px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g id="Icon">
          <path d={svgPaths.p3741e400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d={svgPaths.pd03f540} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[35.995px] left-[314.47px] top-[2px] w-[447.991px]" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11px] size-[17.998px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g clipPath="url(#clip0_502_3012)" id="Icon">
          <path d={svgPaths.p13d94880} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d={svgPaths.p238ee980} id="Vector_2" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
        <defs>
          <clipPath id="clip0_502_3012">
            <rect fill="white" height="17.9977" width="17.9977" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#374dea] border-[1.836px] border-solid border-white left-[22px] rounded-[20536500px] size-[7.995px] top-[9.99px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="absolute bg-[#f5f7f7] left-[778.46px] rounded-[16px] size-[39.993px] top-0" data-name="Button">
      <Icon1 />
      <Container5 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18.667px] relative shrink-0 w-[94.206px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.667px] left-[47px] not-italic text-[#09156a] text-[14px] text-center top-[0.61px] tracking-[-0.1504px]">Main Hospital</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g id="Icon">
          <path d={svgPaths.p39a75400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex gap-[7.995px] h-[34.657px] items-center left-[834.45px] pl-[15.999px] rounded-[16px] top-[2.67px] w-[148.189px]" data-name="Button">
      <Text />
      <Icon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[39.993px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.996px] items-center justify-between left-[280px] pb-[0.612px] px-[31.998px] top-0 w-[1160.736px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g clipPath="url(#clip0_502_2957)" id="Icon">
          <path d={svgPaths.p2dabb00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <g id="Vector_2">
            <path d="M14.9981 2.24971V5.24932Z" fill="var(--fill-0, white)" />
            <path d="M14.9981 2.24971V5.24932" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </g>
          <g id="Vector_3">
            <path d="M16.4979 3.74952H13.4983Z" fill="var(--fill-0, white)" />
            <path d="M16.4979 3.74952H13.4983" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </g>
          <g id="Vector_4">
            <path d="M2.99961 12.7484V14.2482Z" fill="var(--fill-0, white)" />
            <path d="M2.99961 12.7484V14.2482" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </g>
          <g id="Vector_5">
            <path d="M3.74952 13.4983H2.24971Z" fill="var(--fill-0, white)" />
            <path d="M3.74952 13.4983H2.24971" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_502_2957">
            <rect fill="white" height="17.9977" width="17.9977" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#374dea] relative rounded-[12px] shrink-0 size-[31.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-[93.412px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.16px] tracking-[-0.9492px]">Lymbus AI</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[80.597px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center pb-[0.612px] pl-[23.994px] relative size-full">
        <Container7 />
        <Heading />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p1d4bfb00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2d1e8300} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2f891c02} id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p24985600} id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[72px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Dashboard</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon4 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2988)" id="Icon">
          <path d={svgPaths.p14e74b00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M16.6636 2.49954V5.83227" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M18.33 4.16591H14.9973" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M3.33273 14.1641V15.8305" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M4.16591 14.9973H2.49954" id="Vector_5" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2988">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[68.271px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Lymbus AI</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon5 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p21071a00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.pf1c8600} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[75.644px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[38px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Root Cause</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon6 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p30afd550} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M14.9973 14.1641V7.49863" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M10.8314 14.1641V4.16591" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M6.66545 14.1641V11.6645" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[95.019px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[48.5px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Benchmarking</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon7 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p3a77dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[83.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[14px] text-center text-white top-[0.22px] tracking-[-0.1504px]">Engagement</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#374dea] h-[43.981px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon8 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2970)" id="Icon">
          <path d={svgPaths.p169de80} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99818 7.49863V10.8314" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99818 14.1641H10.0065" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2970">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[67.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Escalation</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon9 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2950)" id="Icon">
          <path d={svgPaths.p26f8d600} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p79809e0} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33182 7.49863H6.66545" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 10.8314H6.66545" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 14.1641H6.66545" id="Vector_5" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2950">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[51.784px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[26px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Reports</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon10 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[279.385px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-start overflow-clip pt-[23.994px] px-[15.999px] relative rounded-[inherit] size-full">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2984)" id="Icon">
          <path d={svgPaths.p1e19b00} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p154e980} id="Vector_2" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2984">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[54.93px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[27.5px] not-italic text-[#09156a] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Settings</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon11 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2945)" id="Icon">
          <path d={svgPaths.p298b000} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p9d5f880} id="Vector_2" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99818 14.1641H10.0065" id="Vector_3" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2945">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[101.187px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[51px] not-italic text-[#09156a] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">{`Help & Support`}</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon12 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[123.956px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-start pt-[15.999px] px-[15.999px] relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function ImageUser() {
  return (
    <div className="relative rounded-[20536500px] shrink-0 size-[31.998px]" data-name="Image (User)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[20536500px] size-full" src={imgImageUser} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#09156a] text-[14px] top-[0.22px] tracking-[-0.1504px]">Robert Fox</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] top-[0.22px] tracking-[0.1172px]">System Admin</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[35.001px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f5f7f7] h-[50.99px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center px-[7.995px] relative size-full">
          <ImageUser />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g id="Icon">
          <path d={svgPaths.p15f9ed00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d={svgPaths.p391b00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M15.748 8.99884H6.74913" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.496px] relative shrink-0 w-[59.769px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[30px] not-italic text-[#6a7282] text-[11px] text-center top-[0.22px] tracking-[0.6145px] uppercase">Sign Out</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[37.984px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon13 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[129.579px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.995px] items-start pt-[16.611px] px-[15.999px] relative size-full">
        <Container10 />
        <Button11 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[873.987px] items-start left-0 pr-[0.612px] top-0 w-[279.997px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#eee] border-r-[0.612px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Navigation />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g id="Icon">
          <path d={svgPaths.p24feb6e0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M14.2482 8.99884H3.74952" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[48.466px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[24px] not-italic text-[#6a7282] text-[10px] text-center top-[0.22px] tracking-[1.1172px] uppercase">Cancel</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[35.211px] relative rounded-[16px] shrink-0 w-[111.677px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.612px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center pl-[16.611px] pr-[0.612px] py-[0.612px] relative size-full">
        <Icon14 />
        <Text11 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#eee] h-[31.998px] shrink-0 w-[0.995px]" data-name="Container" />;
}

function TextInput1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[268.684px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[24px] tracking-[-1.1297px]">New Outreach Campaign</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[268.684px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <TextInput1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[35.211px] relative shrink-0 w-[429.343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.994px] items-center relative size-full">
        <Button12 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[20.61px] size-[13.991px] top-[11.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g clipPath="url(#clip0_502_2929)" id="Icon">
          <path d={svgPaths.p16267600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p2c688680} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M5.82948 5.24653H4.66359" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M9.32717 7.57833H4.66359" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M9.32717 9.91012H4.66359" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
        <defs>
          <clipPath id="clip0_502_2929">
            <rect fill="white" height="13.9908" width="13.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[36.215px] relative rounded-[16px] shrink-0 w-[138.119px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[80.09px] not-italic text-[#6a7282] text-[10px] text-center top-[10.83px] tracking-[1.1172px] uppercase">Save Draft</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[20.61px] size-[13.991px] top-[11.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g clipPath="url(#clip0_502_2920)" id="Icon">
          <path d={svgPaths.p2e30380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M6.99538 10.4931H7.00121" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
        <defs>
          <clipPath id="clip0_502_2920">
            <rect fill="white" height="13.9908" width="13.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[36.215px] relative rounded-[16px] shrink-0 w-[130.115px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[76.09px] not-italic text-[#6a7282] text-[10px] text-center top-[10.83px] tracking-[1.1172px] uppercase">Send Test</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[20.61px] size-[13.991px] top-[11.11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g clipPath="url(#clip0_502_2913)" id="Icon">
          <path d="M1.74884 3.49769H12.2419" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.pef9e060} id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p2a97ef00} id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M5.82948 6.41243V9.91012" id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M8.16128 6.41243V9.91012" id="Vector_5" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
        <defs>
          <clipPath id="clip0_502_2913">
            <rect fill="white" height="13.9908" width="13.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[36.215px] relative rounded-[16px] shrink-0 w-[117.348px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#fef2f2] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon17 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[70.09px] not-italic text-[#fb2c36] text-[10px] text-center top-[10.83px] tracking-[1.1172px] uppercase">Discard</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[36.215px] relative shrink-0 w-[417.581px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.999px] items-center relative size-full">
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white h-[79.995px] relative shrink-0 w-[1440.732px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[0.612px] px-[31.998px] relative size-full">
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="database">
          <path d={svgPaths.p2b393280} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1138dbe0} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a250500} id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[1.1172px] uppercase">Metadata Database Entry</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#848ab4] text-[10px] tracking-[0.5px] uppercase">(Optional)</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.995px] h-[15.999px] items-center min-h-px min-w-px relative" data-name="Container">
      <Database />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[13.493px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#848ab4] text-[10px] top-[0.22px] tracking-[0.5px] uppercase">Static Key</p>
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
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Enter Key</p>
          <Option />
          <Option1 />
          <Option2 />
          <Option3 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[13.493px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#848ab4] text-[10px] top-[0.22px] tracking-[0.5px] uppercase">Static Value</p>
    </div>
  );
}

function Option4() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option5() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[43.994px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Enter Value</p>
          <Option4 />
          <Option5 />
          <Option6 />
          <Option7 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label1 />
      <Dropdown1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[44px] items-center py-[8px] relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase">Or</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[13.493px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#848ab4] text-[10px] top-[0.22px] tracking-[0.5px] uppercase">Dynamic Data</p>
    </div>
  );
}

function Icon18() {
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

function Button16() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pr-[0.01px] relative rounded-[16px] shrink-0 size-[24px]" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0 size-[19.996px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Option8() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option9() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option10() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Option11() {
  return <div className="absolute left-[-369.58px] size-0 top-[-491.35px]" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="bg-white h-[43.994px] relative rounded-[16px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Select data</p>
          <Button16 />
          <Option8 />
          <Option9 />
          <Option10 />
          <Option11 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label2 />
      <Dropdown2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-end min-h-px min-w-px relative">
      <Container25 />
      <Container26 />
      <Frame />
      <Container27 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[#3649e9] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] relative size-full">
          <Plus />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
            <p className="leading-[1.2]">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center relative shrink-0">
      <Overlay />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Container24 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[368.732px] relative shrink-0 w-[671.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[368.732px] items-start left-[48px] pl-[256.367px] top-[48px] w-[944.744px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2909)" id="Icon">
          <path d={svgPaths.p298b000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p13746600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2909">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#00bc7d] relative rounded-[16px] shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00bc7d] border-[1.836px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.836px] pr-[1.846px] py-[1.836px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[12.499px] relative shrink-0 w-[140.013px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[12.5px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] tracking-[1.1172px] uppercase whitespace-pre-wrap">1. Audience</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[39.993px] items-center relative shrink-0 w-[191.998px]" data-name="Button">
      <Container28 />
      <Paragraph2 />
    </div>
  );
}

function Database1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="database">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="database">
          <path d={svgPaths.p2e7662c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p2a9b1a40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p294b9f80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#374dea] content-stretch flex items-center justify-center left-0 pl-[1.836px] pr-[1.846px] py-[1.836px] rounded-[16px] size-[39.993px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#374dea] border-[1.836px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)]" />
      <Database1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.499px] items-start left-[51.98px] not-italic text-[10px] top-[13.74px] w-[140.013px] whitespace-pre-wrap" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[12.5px] relative shrink-0 text-[#374dea] tracking-[1.1172px] uppercase w-full">{`2. Metadata `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a4a7ab] w-full">{`     (Optional)`}</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[#374dea] h-[23.994px] left-[-7.99px] rounded-[20536500px] top-[7.99px] w-[3.997px]" data-name="Container" />;
}

function Button18() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-full" data-name="Button">
      <Container29 />
      <Paragraph3 />
      <Container30 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p377f9880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M2.49954 7.49863H17.4968" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M7.49863 17.4968V7.49863" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[1.836px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.836px] pr-[1.846px] py-[1.836px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[12.499px] relative shrink-0 w-[140.013px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[12.5px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] tracking-[1.1172px] uppercase whitespace-pre-wrap">3. Content</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[39.993px] items-center relative shrink-0 w-full" data-name="Button">
      <Container31 />
      <Paragraph4 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2964)" id="Icon">
          <path d="M6.66545 1.66636V4.99909" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 1.66636V4.99909" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2b25d180} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M2.49954 8.33182H17.4968" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2964">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[1.836px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.836px] pr-[1.846px] py-[1.836px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[12.499px] relative shrink-0 w-[140.013px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[12.5px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] tracking-[1.1172px] uppercase whitespace-pre-wrap">4. Schedule</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[39.993px] items-center relative shrink-0 w-full" data-name="Button">
      <Container32 />
      <Paragraph5 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_502_2900)" id="Icon">
          <path d={svgPaths.p396dd900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p154e980} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_502_2900">
            <rect fill="white" height="19.9964" width="19.9964" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[39.993px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[1.836px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.836px] pr-[1.846px] py-[1.836px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[12.499px] relative shrink-0 w-[140.013px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[12.5px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[10px] tracking-[1.1172px] uppercase whitespace-pre-wrap">5. Review</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[39.993px] items-center relative shrink-0 w-full" data-name="Button">
      <Container33 />
      <Paragraph6 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[48px] top-[48px] w-[191.998px]" data-name="Navigation">
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-0 size-[15.999px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g id="Icon">
          <path d={svgPaths.p1392b3e0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-[119.892px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon23 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[72.49px] not-italic text-[#6a7282] text-[10px] text-center top-[0.72px] tracking-[1.1172px] uppercase">Previous Step</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[15px] left-[6.63px] top-[-0.25px] w-[112px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#09156a] text-[10px] top-[0.22px] tracking-[1.1172px] uppercase">Step 2: Metadata</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[12.002px] left-[0.63px] top-[15px] w-[118.295px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-0 not-italic text-[#6a7282] text-[8px] top-[-0.39px] tracking-[1.0057px] uppercase">Autosaved at 9:41 AM</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[27.006px] relative shrink-0 w-[118.295px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[134.71px] size-[15.999px] top-[12.24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g id="Icon">
          <path d={svgPaths.p1921b7c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#374dea] h-[40.48px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(55,77,234,0.2),0px_8px_10px_0px_rgba(55,77,234,0.2)] shrink-0 w-[190.707px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[80.99px] not-italic text-[11px] text-center text-white top-[12.22px] tracking-[2.2645px] uppercase">Next Step</p>
        <Icon24 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[40.48px] relative shrink-0 w-[332.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.994px] items-center relative size-full">
        <Container37 />
        <Button23 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[40.48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button22 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[89.08px] items-start left-0 pt-[24.606px] px-[72.373px] top-[704.91px] w-[1040.738px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <Container35 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[793.992px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container19 />
        <Navigation1 />
        <Container34 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#00bc7d] rounded-[20536500px] shrink-0 size-[7.995px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[85.121px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#09156a] text-[10px] top-[0.22px] tracking-[1.1172px] uppercase">Live Preview</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[105.108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center relative size-full">
        <Container40 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[15.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.666 14.6658">
            <path d={svgPaths.p2d54dd00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33992 1.33325">
            <path d="M0.666625 0.666625H0.673291" id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[31.988px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[15.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6658 11.9993">
            <path d={svgPaths.p37f12570} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6659 5.33043">
            <path d={svgPaths.p2abcce00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[31.988px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f5f7f7] h-[39.983px] relative rounded-[12px] shrink-0 w-[75.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.997px] items-start pl-[3.997px] pt-[3.997px] relative size-full">
        <Button24 />
        <Button25 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[88.583px] relative shrink-0 w-[399.382px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[0.612px] px-[31.998px] relative size-full">
        <Container39 />
        <Container41 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[13.493px] relative shrink-0 w-[20.561px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.22px] tracking-[0.167px]">9:41</p>
      </div>
    </div>
  );
}

function Container47() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[7.995px] rounded-[8px] shrink-0 w-[15.999px]" data-name="Container" />;
}

function Container48() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[7.995px] rounded-[8px] shrink-0 w-[15.999px]" data-name="Container" />;
}

function Container46() {
  return (
    <div className="h-[7.995px] relative shrink-0 w-[37.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.996px] items-start relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[21.488px] items-center justify-between left-[19.95px] px-[19.996px] top-[19.95px] w-[280.102px]" data-name="Container">
      <Text15 />
      <Container46 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[12.002px] left-[16px] top-[32px] w-[248.104px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-[124.56px] not-italic text-[#9f9fa9] text-[8px] text-center top-[-0.39px] tracking-[1.0057px] uppercase">Today 9:41 AM</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[38.998px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#27272a] text-[12px] top-[0.45px] w-[160px] whitespace-pre-wrap">Hi Jane, please fill out this survey: lymbus.health/v2k8</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[72.22px] items-start left-[16px] pb-[0.612px] pt-[16.611px] px-[16.611px] rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] top-[67.99px] w-[210.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-[0.612px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph10 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g clipPath="url(#clip0_502_2878)" id="Icon">
          <path d={svgPaths.p15df5580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d={svgPaths.p1dc1b100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M6.66625 5.99963H5.333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M10.666 8.66613H5.333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M10.666 11.3326H5.333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
        <defs>
          <clipPath id="clip0_502_2878">
            <rect fill="white" height="15.999" width="15.999" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#374dea] relative rounded-[12px] shrink-0 size-[31.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[12.002px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[12px] left-0 not-italic text-[#09156a] text-[8px] top-[-0.39px] tracking-[0.2057px] uppercase">Q1 Patient Satisfaction</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[10.5px] left-0 not-italic text-[#6a7282] text-[7px] top-[0.22px] tracking-[0.2301px] uppercase">Dynamic Survey Attached</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[22.502px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(55,77,234,0.05)] content-stretch flex gap-[11.992px] h-[57.206px] items-center left-[16px] px-[12.604px] py-[0.612px] rounded-[16px] top-[156.21px] w-[248.104px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.612px] border-[rgba(55,77,234,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[524.4px] left-[19.95px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[65.43px] w-[280.102px]" data-name="Container">
      <Paragraph9 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container55() {
  return <div className="bg-[#f4f4f5] flex-[1_0_0] h-[23.401px] min-h-px min-w-px rounded-[20536500px]" data-name="Container" />;
}

function Container56() {
  return <div className="bg-[#374dea] rounded-[20536500px] shrink-0 size-[31.998px]" data-name="Container" />;
}

function Container54() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[11.992px] h-[47.997px] items-start left-[19.95px] pt-[12.604px] px-[11.992px] top-[589.83px] w-[280.102px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-black h-[23.994px] left-[112px] rounded-bl-[20px] rounded-br-[20px] top-[7.96px] w-[95.994px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="bg-black h-[657.776px] relative rounded-[44px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container45 />
        <Container49 />
        <Container54 />
        <Container57 />
      </div>
      <div aria-hidden="true" className="absolute border-[#27272a] border-[7.956px] border-solid inset-0 pointer-events-none rounded-[44px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g clipPath="url(#clip0_502_2870)" id="Icon">
          <path d={svgPaths.p21a26100} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
        <defs>
          <clipPath id="clip0_502_2870">
            <rect fill="white" height="15.999" width="15.999" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="flex-[1_0_0] h-[40.48px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.22px] tracking-[0.167px] uppercase w-[253px] whitespace-pre-wrap">Preview reflects real-time changes including dynamic link shorteners and mobile responsive formatting.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[11.992px] h-[40.48px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon28 />
      <Paragraph13 />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f5f7f7] h-[73.703px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.612px] pt-[16.611px] px-[16.611px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.998px] h-[763.477px] items-start left-[39.69px] top-[32px] w-[319.999px]" data-name="Container">
      <Container44 />
      <Container58 />
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[399.382px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="bg-white h-[793.992px] relative shrink-0 w-[399.994px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#eee] border-l-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[0.612px] relative size-full">
        <Container38 />
        <Container42 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f5f7f7] flex-[1_0_0] min-h-px min-w-px relative w-[1440.732px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
        <Sidebar1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex flex-col h-[873.987px] items-start left-0 overflow-clip top-0 w-[1440.732px]" data-name="Container">
      <Header1 />
      <Container17 />
    </div>
  );
}

export default function LymbusDashboardV() {
  return (
    <div className="bg-white relative size-full" data-name="Lymbus Dashboard - V3">
      <PK />
      <Header />
      <Sidebar />
      <Container12 />
    </div>
  );
}