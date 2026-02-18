import svgPaths from "./svg-rt41w72c86";
import imgImageUser from "figma:asset/738cd370444fdae1fdb31b9dc72bfe0d463303ec.png";

function Container1() {
  return <div className="h-0 shrink-0 w-full" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute left-[50.89px] size-[17.998px] top-[15.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g id="Icon">
          <path d="M3.74952 8.99884H14.2482" id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M8.99884 3.74952V14.2482" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f7f7] h-[49.202px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.612px] border-[rgba(55,77,234,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[128.88px] not-italic text-[#374dea] text-[16px] text-center top-[12.05px] tracking-[-0.3125px]">{` New Analysis`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[97.801px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.612px] pt-[23.994px] px-[23.994px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[11.99px] not-italic text-[10px] text-[rgba(106,114,130,0.5)] top-[0.22px] tracking-[1.1172px] uppercase">Recent Sessions</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g clipPath="url(#clip0_536_829)" id="Icon">
          <path d={svgPaths.p19605b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
        <defs>
          <clipPath id="clip0_536_829">
            <rect fill="white" height="17.9977" width="17.9977" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.999px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-white top-[0.61px]">Cardiology NPS Analysis</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.6)] top-[0.22px] tracking-[0.1172px]">12/02/2026</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[31.003px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#374dea] h-[54.988px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center px-[11.992px] relative size-full">
          <Icon1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[279.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.995px] items-start overflow-clip pt-[19.987px] px-[11.992px] relative rounded-[inherit] size-full">
        <Heading2 />
        <Button1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[771.949px] items-start left-0 pr-[0.612px] top-0 w-[279.997px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-r-[0.612px] border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[17.998px] top-[4.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g clipPath="url(#clip0_536_862)" id="Icon">
          <path d={svgPaths.p2dabb00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M14.9981 2.24971V5.24932" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M16.4979 3.74952H13.4983" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M2.99961 12.7484V14.2482" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          <path d="M3.74952 13.4983H2.24971" id="Vector_5" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
        </g>
        <defs>
          <clipPath id="clip0_536_862">
            <rect fill="white" height="17.9977" width="17.9977" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-[257.046px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[25.99px] not-italic text-[#09156a] text-[20px] top-[-0.16px] tracking-[-0.4492px]">Cardiology NPS Analysis</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#ecfdf5] h-[24.223px] relative rounded-[20536500px] shrink-0 w-[99.092px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0fae5] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[20536500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12.612px] py-[4.612px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#096] text-[10px] tracking-[0.6172px] uppercase">System Live</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[17.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99961 2.99961">
            <path d={svgPaths.p1e689880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99961 2.99961">
            <path d={svgPaths.p1e689880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99961 2.99961">
            <path d={svgPaths.p1e689880} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49981" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[33.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[33.987px] relative shrink-0 w-[141.074px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.995px] items-center relative size-full">
        <Container12 />
        <Button2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[33.987px] relative shrink-0 w-[832.751px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[55.992px] relative size-full">
        <Heading1 />
        <Container11 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.999px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 15.999">
        <g clipPath="url(#clip0_536_811)" id="Icon">
          <path d="M7.9995 5.333V2.6665H5.333" id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d={svgPaths.p21acf180} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M1.33325 9.33275H2.6665" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M13.3325 9.33275H14.6658" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M9.99938 8.66613V9.99938" id="Vector_5" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
          <path d="M5.99963 8.66613V9.99938" id="Vector_6" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33325" />
        </g>
        <defs>
          <clipPath id="clip0_536_811">
            <rect fill="white" height="15.999" width="15.999" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex items-center justify-center left-0 pr-[0.01px] rounded-[20536500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[31.998px] top-[4px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16.248px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.25px] left-0 not-italic text-[10px] text-[rgba(106,114,130,0.5)] top-[-0.16px] tracking-[1.1172px] uppercase">Data Visualization</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.31%_1.02%_15.94%_1.02%]" data-name="Group">
      <div className="absolute inset-[-0.28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 481.597 180.849">
          <g id="Group">
            <path d="M1.19209e-07 180.349H481.597" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" strokeWidth="0.999165" />
            <path d="M1.19209e-07 135.387H481.597" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" strokeWidth="0.999165" />
            <path d="M1.19209e-07 90.4244H481.597" id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" strokeWidth="0.999165" />
            <path d="M1.19209e-07 45.462H481.597" id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" strokeWidth="0.999165" />
            <path d={svgPaths.p3cb15e00} id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" strokeWidth="0.999165" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.31%_1.02%_15.94%_1.02%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[86.38%_87.05%_8.17%_8.68%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.38%_87.05%_8.17%_8.68%] leading-[normal] not-italic text-[#666] text-[9.992px] text-center">Mon</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[86.38%_67.96%_8.17%_28.37%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.38%_67.96%_8.17%_28.37%] leading-[normal] not-italic text-[#666] text-[9.992px] text-center">Tue</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[86.38%_47.96%_8.17%_47.76%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.38%_47.96%_8.17%_47.76%] leading-[normal] not-italic text-[#666] text-[9.992px] text-center">Wed</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[86.38%_28.47%_8.17%_67.66%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.38%_28.47%_8.17%_67.66%] leading-[normal] not-italic text-[#666] text-[9.992px] text-center">Thu</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[86.38%_9.79%_8.17%_87.76%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.38%_9.79%_8.17%_87.76%] leading-[normal] not-italic text-[#666] text-[9.992px] text-center">Fri</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[86.38%_9.79%_8.17%_8.68%]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[86.38%_9.79%_8.17%_8.68%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[20.3%_81.37%_15.94%_2.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9357 140.283">
        <g id="Group">
          <path d={svgPaths.p13b6c600} fill="var(--fill-0, #E9EBEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[17.03%_61.78%_15.94%_22.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9357 147.477">
        <g id="Group">
          <path d={svgPaths.pcf95700} fill="var(--fill-0, #E9EBEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[30.92%_42.19%_15.94%_42.16%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9357 116.902">
        <g id="Group">
          <path d={svgPaths.p1496f200} fill="var(--fill-0, #374DEA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[47.27%_22.59%_15.94%_61.76%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9357 80.9324">
        <g id="Group">
          <path d={svgPaths.p301a2480} fill="var(--fill-0, #E9EBEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[41.55%_3%_15.94%_81.35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.9357 93.5218">
        <g id="Group">
          <path d={svgPaths.p61e3c00} fill="var(--fill-0, #E9EBEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[17.03%_3%_15.94%_2.98%]" data-name="Group">
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
    <div className="absolute contents inset-[17.03%_3%_15.94%_2.98%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[17.03%_3%_15.94%_2.98%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[219.998px] left-0 overflow-clip top-0 w-[491.589px]" data-name="Surface">
      <Group />
      <Group2 />
      <Group9 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[219.998px] relative shrink-0 w-full" data-name="BarChart">
      <Surface />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[15.999px] h-[285.467px] items-start left-[20.61px] pb-[0.612px] pt-[16.611px] px-[16.611px] rounded-[16px] top-[82.11px] w-[524.811px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.612px] border-[rgba(238,238,238,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph2 />
      <BarChart />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f5f7f7] h-[388.184px] relative rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.612px] border-[rgba(238,238,238,0.5)] border-solid inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[20.61px] not-italic text-[#09156a] text-[14px] top-[21.67px] tracking-[-0.1504px] w-[494px] whitespace-pre-wrap">{`Hello! I'm Lymbus AI. I've analyzed the Cardiology department's feedback as requested.`}</p>
      <Container20 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[9.993px] top-[2.51px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9934 9.9934">
        <g clipPath="url(#clip0_536_872)" id="Icon">
          <path d={svgPaths.p2a8ecc80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.832783" />
          <path d={svgPaths.pc3fad80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.832783" />
        </g>
        <defs>
          <clipPath id="clip0_536_872">
            <rect fill="white" height="9.9934" width="9.9934" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[40.28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[27.49px] not-italic text-[10px] text-[rgba(106,114,130,0.6)] text-center top-[0.22px] tracking-[0.1172px]">{` Copy`}</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[9.993px] top-[2.51px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9934 9.9934">
        <g clipPath="url(#clip0_536_857)" id="Icon">
          <path d={svgPaths.p300c1900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.832783" />
          <path d={svgPaths.p28de9300} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.832783" />
          <path d={svgPaths.p2f018680} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.832783" />
        </g>
        <defs>
          <clipPath id="clip0_536_857">
            <rect fill="white" height="9.9934" width="9.9934" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-[45.511px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[29.99px] not-italic text-[10px] text-[rgba(106,114,130,0.6)] text-center top-[0.22px] tracking-[0.1172px]">{` Listen`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[15.004px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[7.995px] relative size-full">
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[415.18px] items-start left-[48px] top-0 w-[566.028px]" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[415.18px] relative shrink-0 w-[614.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[415.18px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container22() {
  return <div className="h-0 shrink-0 w-full" data-name="Container" />;
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[831.527px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.998px] items-start overflow-clip pt-[31.998px] px-[31.998px] relative rounded-[inherit] size-full">
        <Container15 />
        <Container22 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[16px] size-[13.991px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g clipPath="url(#clip0_536_894)" id="Icon">
          <path d={svgPaths.p36b97a00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p52b3cf0} id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p1d2937e0} id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p2df07000} id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.pbc1dd00} id="Vector_5" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M6.99538 7.57833H9.32717" id="Vector_6" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p37756b00} id="Vector_7" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M6.99538 4.66359H11.659" id="Vector_8" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p16972d00} id="Vector_9" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p3baf5d00} id="Vector_10" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p228357f0} id="Vector_11" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p2a65d000} id="Vector_12" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d={svgPaths.p2be462f0} id="Vector_13" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
        <defs>
          <clipPath id="clip0_536_894">
            <rect fill="white" height="13.9908" width="13.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[198.46px] size-[11.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon" opacity="0.4">
          <path d={svgPaths.p3e909880} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99934" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white border-[#eee] border-[0.612px] border-solid h-[33.213px] left-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[227.677px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[113.98px] not-italic text-[#09156a] text-[12px] text-center top-[8.61px]">Trend for Cardiology NPS</p>
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[16px] size-[13.991px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g id="Icon">
          <path d={svgPaths.p19f68c80} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M10.4931 9.91012V5.24653" id="Vector_2" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M7.57833 9.91012V2.91474" id="Vector_3" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
          <path d="M4.66359 9.91012V8.16128" id="Vector_4" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[183.4px] size-[11.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon" opacity="0.4">
          <path d={svgPaths.p3e909880} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99934" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white border-[#eee] border-[0.612px] border-solid h-[33.213px] left-[235.67px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[212.616px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[107.48px] not-italic text-[#09156a] text-[12px] text-center top-[8.61px]">Department wait times</p>
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[16px] size-[13.991px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9908 13.9908">
        <g clipPath="url(#clip0_536_835)" id="Icon">
          <path d={svgPaths.p5f12f30} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1659" />
        </g>
        <defs>
          <clipPath id="clip0_536_835">
            <rect fill="white" height="13.9908" width="13.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[199.27px] size-[11.992px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9921 11.9921">
        <g id="Icon" opacity="0.4">
          <path d={svgPaths.p3e909880} id="Vector" stroke="var(--stroke-0, #09156A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99934" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border-[#eee] border-[0.612px] border-solid h-[33.213px] left-[456.28px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[228.481px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[114.98px] not-italic text-[#09156a] text-[12px] text-center top-[8.61px]">{`Predict next month's rate`}</p>
      <Icon12 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[33.213px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[19.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6636 16.6636">
            <path d={svgPaths.pe525c00} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_12.5%_62.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6636 1.66636">
            <path d="M0.833182 0.833182H15.8305" id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66636 11.6645">
            <path d="M0.833182 10.8314V0.833182" id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.996px] items-start left-[8.61px] pl-[15.999px] pr-[7.995px] top-[20.59px] w-[43.99px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex h-[43.971px] items-center left-[52.6px] overflow-clip py-[12px] top-[8.61px] w-[682.344px]" data-name="Text Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(106,114,130,0.4)] tracking-[-0.1504px]">Compare wait times or analyze NPS trends...</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9977 17.9977">
        <g clipPath="url(#clip0_536_807)" id="Icon">
          <path d={svgPaths.p3023b300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.49981" />
          <path d={svgPaths.p30c0d100} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.49981" />
        </g>
        <defs>
          <clipPath id="clip0_536_807">
            <rect fill="white" height="17.9977" width="17.9977" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex items-center justify-center left-[734.94px] rounded-[16px] size-[39.993px] top-[10.6px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[61.184px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container26 />
      <TextInput />
      <Button8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(245,247,247,0.2)] h-[166.99px] relative shrink-0 w-[831.527px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.994px] items-start pt-[24.606px] px-[23.994px] relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] w-[832.751px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.612px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.999px] h-[771.949px] items-start left-0 pb-[39.993px] pl-[23.994px] pt-[23.994px] top-0 w-[880.739px]" data-name="Container">
      <Container10 />
      <Container13 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p1d087800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] pl-[0.612px] pr-[0.622px] py-[0.612px] rounded-[16px] size-[39.993px] top-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.612px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(245,247,247,0.1)] h-[771.949px] left-[280px] top-0 w-[880.739px]" data-name="Container">
      <Container9 />
      <Button9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[771.949px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[835.945px] items-start overflow-clip pt-[63.996px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] h-[851.954px] min-h-px min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[279.997px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f5f7f7] content-stretch flex h-[851.954px] items-start relative shrink-0 w-full" data-name="Container">
      <MainContent />
    </div>
  );
}

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function PQ() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex flex-col h-[851.954px] items-start left-0 top-0 w-[1440.732px]" data-name="pQ">
      <Container />
      <Section />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.991px] relative shrink-0 w-[93.412px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.16px] tracking-[-0.9492px]">Lymbus AI</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex h-[35.995px] items-center left-0 overflow-clip pl-[40px] pr-[16px] rounded-[16px] top-0 w-[447.991px]" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(9,21,106,0.5)] tracking-[-0.1504px]">Search...</p>
    </div>
  );
}

function Icon16() {
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

function Container28() {
  return (
    <div className="absolute h-[35.995px] left-[335.16px] top-[2px] w-[447.991px]" data-name="Container">
      <TextInput1 />
      <Icon16 />
    </div>
  );
}

function Icon17() {
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

function Container29() {
  return <div className="absolute bg-[#374dea] border-[1.836px] border-solid border-white left-[22px] rounded-[20536500px] size-[7.995px] top-[9.99px]" data-name="Container" />;
}

function Button10() {
  return (
    <div className="absolute bg-[#f5f7f7] left-[799.15px] rounded-[16px] size-[39.993px] top-0" data-name="Button">
      <Icon17 />
      <Container29 />
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

function Icon18() {
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

function Button11() {
  return (
    <div className="absolute bg-[#f5f7f7] content-stretch flex gap-[7.995px] h-[34.657px] items-center left-[855.14px] pl-[15.999px] rounded-[16px] top-[2.67px] w-[148.189px]" data-name="Button">
      <Text />
      <Icon18 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] h-[39.993px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container28 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[63.996px] items-center justify-between left-[280px] pb-[0.612px] px-[31.998px] top-0 w-[1160.736px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <Container27 />
    </div>
  );
}

function Icon19() {
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

function Container31() {
  return (
    <div className="bg-[#374dea] relative rounded-[12px] shrink-0 size-[31.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
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

function Container30() {
  return (
    <div className="h-[80.597px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-b-[0.612px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center pb-[0.612px] pl-[23.994px] relative size-full">
        <Container31 />
        <Heading />
      </div>
    </div>
  );
}

function Icon20() {
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

function Button12() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon20 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g clipPath="url(#clip0_536_838)" id="Icon">
          <path d={svgPaths.p14e74b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M16.6636 2.49954V5.83227" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M18.33 4.16591H14.9973" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M3.33273 14.1641V15.8305" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M4.16591 14.9973H2.49954" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_536_838">
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
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[34px] not-italic text-[14px] text-center text-white top-[0.22px] tracking-[-0.1504px]">Lymbus AI</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#374dea] h-[43.981px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(55,77,234,0.2),0px_4px_6px_0px_rgba(55,77,234,0.2)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon21 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
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

function Button14() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon22 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
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

function Button15() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon23 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9964 19.9964">
        <g id="Icon">
          <path d={svgPaths.p3a77dd80} id="Vector" stroke="var(--stroke-0, #374DEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[83.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[#6a7282] text-[14px] text-center top-[0.22px] tracking-[-0.1504px]">Engagement</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon24 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
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

function Button17() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon25 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
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

function Button18() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon26 />
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
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
      </div>
    </div>
  );
}

function Icon27() {
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

function Button19() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon27 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon28() {
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

function Button20() {
  return (
    <div className="h-[43.981px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon28 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[123.956px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.997px] items-start pt-[15.999px] px-[15.999px] relative size-full">
        <Button19 />
        <Button20 />
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

function Paragraph3() {
  return (
    <div className="absolute h-[19.996px] left-0 top-0 w-[187.407px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#09156a] text-[14px] top-[0.22px] tracking-[-0.1504px]">Robert Fox</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[15.004px] left-0 top-[20px] w-[187.407px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] top-[0.22px] tracking-[0.1172px]">System Admin</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[35.001px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f5f7f7] h-[50.99px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center px-[7.995px] relative size-full">
          <ImageUser />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
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

function Button21() {
  return (
    <div className="h-[37.984px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.992px] items-center pl-[15.999px] relative size-full">
          <Icon29 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[129.579px] relative shrink-0 w-[279.385px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eee] border-solid border-t-[0.612px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.995px] items-start pt-[16.611px] px-[15.999px] relative size-full">
        <Container34 />
        <Button21 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[851.954px] items-start left-0 pr-[0.612px] top-0 w-[279.997px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#eee] border-r-[0.612px] border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Navigation />
      <Container32 />
      <Container33 />
    </div>
  );
}

export default function LymbusDashboardV() {
  return (
    <div className="bg-white relative size-full" data-name="Lymbus Dashboard - V3">
      <PQ />
      <Header />
      <Sidebar />
    </div>
  );
}