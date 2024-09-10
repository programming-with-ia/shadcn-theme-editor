import type { SVGProps } from "react";
import { cn } from "../lib/utils";

export function ResetIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      className={cn("size-5", className)}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.854 2.146a.5.5 0 0 1 0 .708L3.707 4H9a4.5 4.5 0 1 1 0 9H5a.5.5 0 0 1 0-1h4a3.5 3.5 0 1 0 0-7H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function CopyIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"></path>
        <path
          d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"
          opacity={0.5}
        ></path>
      </g>
    </svg>
  );
}

export const Dices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-dices"
    {...props}
  >
    <rect width={12} height={12} x={2} y={10} rx={2} ry={2} />
    <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
    <path d="M6 18h.01" />
    <path d="M10 14h.01" />
    <path d="M15 6h.01" />
    <path d="M18 9h.01" />
  </svg>
);

export const UnLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="#ffffff" {...props}>
    <g>
      <path d="M17.44,9.325h-1.1c0-0.97,0.01-1.95,0-2.92c-0.03-2.37-1.96-4.34-4.34-4.34                     c-1.48-0.01-2.82,0.76-3.64,1.97c-0.36,0.53,0.51,1.03,0.87,0.5c1.2-1.77,3.78-1.96,5.23-0.39c1.04,1.11,0.88,2.57,0.88,3.96v1.22                     H6.56c-1.38,0-2.5,1.12-2.5,2.5v7.61c0,1.37,1.12,2.5,2.5,2.5h10.88c1.38,0,2.5-1.13,2.5-2.5v-7.61                     C19.94,10.445,18.82,9.325,17.44,9.325z M18.94,19.435c0,0.82-0.68,1.5-1.5,1.5H6.56c-0.82,0-1.5-0.68-1.5-1.5v-7.61                     c0-0.83,0.68-1.5,1.5-1.5h10.88c0.82,0,1.5,0.67,1.5,1.5V19.435z" />
      <path d="M13,14.945c0,0.37-0.2,0.69-0.5,0.86v1.5c0,0.28-0.23,0.49-0.5,0.5s-0.5-0.24-0.5-0.5v-1.5                     c-0.3-0.17-0.5-0.49-0.5-0.86c0-0.55,0.45-1,1-1S13,14.395,13,14.945z" />
    </g>
  </svg>
);

export const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="#ffffff" {...props}>
    <g>
      <path d="M17.44,9.33h-1.1V6.4c0-2.39-1.95-4.34-4.34-4.34S7.66,4.01,7.66,6.4v2.93h-1.1                     c-1.38,0-2.5,1.12-2.5,2.5v7.61c0,1.37,1.12,2.5,2.5,2.5h10.88c1.38,0,2.5-1.13,2.5-2.5v-7.61C19.94,10.45,18.82,9.33,17.44,9.33z                     M8.66,6.4c0-1.84,1.5-3.34,3.34-3.34s3.34,1.5,3.34,3.34v2.93H8.66V6.4z M18.94,19.44c0,0.82-0.68,1.5-1.5,1.5H6.56                     c-0.82,0-1.5-0.68-1.5-1.5v-7.61c0-0.83,0.68-1.5,1.5-1.5h10.88c0.82,0,1.5,0.67,1.5,1.5V19.44z" />
      <path d="M13,14.95c0,0.37-0.2,0.69-0.5,0.86v1.5c0,0.28-0.23,0.49-0.5,0.5s-0.5-0.24-0.5-0.5v-1.5                     c-0.3-0.17-0.5-0.49-0.5-0.86c0-0.55,0.45-1,1-1S13,14.4,13,14.95z" />
    </g>
  </svg>
);

export const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ColorPalette = ({size, ...props}: SVGProps<SVGSVGElement> & { size: number }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M416 352c-12.6-.84-21-4-28-12-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11-90.46 80-90.46 210.92 0 290.87 45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56 440 348 431 353 416 352zM112 208a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm40 135a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm40-199a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm64 271a48 48 0 1 1 48-48 48 48 0 0 1-48 48zm72-239a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
  </svg>
);
export default ColorPalette;
