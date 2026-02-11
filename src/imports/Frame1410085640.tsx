import imgScreenshot20260204At31705Pm1 from "figma:asset/9e047f04980d82717ea8c3739bdc04f4fccb6a1f.png";
import imgScreenshot20260204At31720Pm1 from "figma:asset/fc7e3e011c7bded434e32002991bb3573f987954.png";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="aspect-[2360/686] relative shrink-0 w-full" data-name="Screenshot 2026-02-04 at 3.17.05 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260204At31705Pm1} />
      </div>
      <div className="aspect-[2360/1522] relative shrink-0 w-full" data-name="Screenshot 2026-02-04 at 3.17.20 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260204At31720Pm1} />
      </div>
    </div>
  );
}