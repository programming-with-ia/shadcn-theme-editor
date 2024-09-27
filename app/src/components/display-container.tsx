import { clsx, cn } from "@/lib/utils";
import React, { SVGProps } from "react";

function DisplayContainer({ children, className, bottom, As='div', containerClassName, waveColors }: { children: React.ReactNode, className?: string, bottom?:boolean, As?: keyof JSX.IntrinsicElements, containerClassName?:string, waveColors?: SVGWaveColors }) {
  return (
    <As className={clsx("drop-shadow-xl xl:w-4/5 mx-auto flex relative group", bottom ? 'flex-col-reverse' : 'flex-col', containerClassName)}>
      <div className={cn("w-[98.6%] bg-card mx-auto drop-shadow-lg relative flex flex-col items-center -z-[1]", bottom ? 'rounded-b-xl':'rounded-t-xl', className)}>
        {children}
      </div>
      <SVGWave className={clsx(bottom ?"-mb-1 -scale-y-100 -scale-x-100":"-mt-1")} {...waveColors} />
    </As>
  );
}

type SVGWaveColors = {c1?:string, c2?:string, c3?:string}

export const SVGWave = ({c1, c2, c3, ...props}: SVGProps<SVGSVGElement> & SVGWaveColors) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1467 186.11"
    {...props}
  >
    <path
      d="m1062.77,24.16s-43.27,280.48-802.45-.54l802.45.54Z"
      className={c3 || "fill-primary drop-shadow-xl"}
      fillRule="evenodd"
      strokeMiterlimit={10}
      strokeWidth={1.73}
    />
    <path
      d="m1444.65,112.37s-282.25,85.09-532.85-45.77l-1.82-31.45L1438.4,4.55l6.24,107.82Z"
      className={c2 || "fill-secondary drop-shadow-md"}
      fillRule="evenodd"
      strokeWidth={0}
    />
    <path
      d="m1447,136.18V0H0v71.23h0c0,12.62,8.46,23.69,20.65,27,388.24,105.43,592.19,42.39,769.5-2.3,180.93-45.61,334.11-84.22,627.06,58.08,13.44,6.53,29.8-2.88,29.8-17.82Z"
      fillRule="evenodd"
      // strokeWidth={0}
      className={c1 || "fill-card drop-shadow-xl"}
    />
  </svg>
);

export default DisplayContainer;
