import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";

function DisplayContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className=" drop-shadow-xl xl:w-4/5 mx-auto">
      <div className={cn("p-8 md:p-16 lg:p-24 w-[98.6%] bg-card mx-auto rounded-t-xl drop-shadow-lg relative -z-10 flex flex-col items-center", className)}>
        {children}
      </div>
      <SVGComponent className="-mt-1" />
    </div>
  );
}

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
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
      className="fill-primary drop-shadow-xl"
      fillRule="evenodd"
      strokeMiterlimit={10}
      strokeWidth={1.73}
    />
    <path
      d="m1444.65,112.37s-282.25,85.09-532.85-45.77l-1.82-31.45L1438.4,4.55l6.24,107.82Z"
      className="fill-secondary drop-shadow-md"
      fillRule="evenodd"
      strokeWidth={0}
    />
    <path
      d="m1447,136.18V0H0v71.23h0c0,12.62,8.46,23.69,20.65,27,388.24,105.43,592.19,42.39,769.5-2.3,180.93-45.61,334.11-84.22,627.06,58.08,13.44,6.53,29.8-2.88,29.8-17.82Z"
      fillRule="evenodd"
      // strokeWidth={0}
      className="fill-card drop-shadow-xl"
    />
  </svg>
);

export default DisplayContainer;
