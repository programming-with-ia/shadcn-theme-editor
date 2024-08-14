import { cn } from '@/lib/utils';
import React from 'react'

export const HeadingSizes = {
  default: "text-2xl sm:text-3xl lg:text-4xl",
  xxxs: "text-sm lg:text-base",
  xxs: "text-lg lg:text-xl",
  xs: "text-lg sm:text-xl lg:text-2xl",
  sm: "text-xl sm:text-2xl lg:text-3xl",
  md: "text-2xl sm:text-3xl lg:text-4xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  xl: "text-4xl sm:text-5xl lg:text-6xl",
  xxl: "text-5xl sm:text-6xl lg:text-7xl",
  xxxl: "text-6xl sm:text-7xl lg:text-8xl;",
}
export type HeadingSizeType = keyof typeof HeadingSizes

export function getHeadingSize(size: HeadingSizeType){
  return HeadingSizes[size]
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  As?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  align?: "left" | "right" | "center" | null;
  size?: HeadingSizeType,
}

const Heading: React.FC<HeadingProps> = ({ As = "h1", className, align="center", size, ...props }) => {
  return (
    <As {...props} 
      className={cn('heading',
      align=="left" && "text-left", align==="right" && "text-right", align==="center" && "text-center", size && getHeadingSize(size),
      className)}>
      {props.children}
    </As>
  );
}

//* replace "- " to "-"
// const sizes = {
//   default: "text- 2xl sm:text- 3xl lg:text- 4xl",
//   xxs: "text- base sm:text- lg lg:text- lg",
//   xs: "text- lg sm:text- xl lg:text- 2xl",
//   sm: "text- xl sm:text- 2xl lg:text- 3xl",
//   md: "text- 2xl sm:text- 3xl lg:text- 4xl",
//   lg: "text- 3xl sm:text- 4xl lg:text- 5xl",
//   xl: "text- 4xl sm:text- 5xl lg:text- 6xl",
//   xxl: "text- 5xl sm:text- 6xl lg:text- [6rem]",
//   xxxl: "text- 5xl sm:text- 6xl lg:text- [8rem]",
// }

export default Heading;
