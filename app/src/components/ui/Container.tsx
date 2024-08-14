"use client";
import React from 'react';
import { cn, clsx } from '@/lib/utils';

export type ContainerOptions = {
  margin?: boolean; // ignore both values
  marginY?: boolean;
  marginX?: boolean;
  padding?: boolean;
  paddingY?: boolean;
  paddingX?: boolean;

  noBottomP?: boolean;
  noBottomM?: boolean;
  noBottom?: boolean;
  
  flexCol?: boolean;
}

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  As?: "section" | "div" | "article" | "span" | "header" | "footer" | "aside";
  options?: ContainerOptions
  ignoreClasses?: boolean
}
const classes = {
  px: "px-4 md:px-10 lg:px-24 xl:px-32",
  py: "py-6 md:py-8 lg:py-12",
  mx: "",
  my: "my-6 md:my-8 lg:my-12",
  flexCol: "flex flex-col items-center",
  noBottomP: "!pb-0",
  noBottomM: "!mb-0",
}
export function getContainerClasses(options?:ContainerOptions){
  const {
    margin= true,
    marginY= true,
    marginX= true,
    padding= true,
    paddingY= true,
    paddingX= true,

    flexCol= true,

    noBottom=false,
    noBottomP=false,
    noBottomM=false,
  } = options || {};

  return clsx(margin && marginX && classes.mx, margin && marginY && classes.my, padding && paddingX && classes.px, padding && paddingY && classes.py,
    flexCol && classes.flexCol,
    noBottom && classes.noBottomP, noBottom && classes.noBottomM,
    noBottomP && classes.noBottomP, noBottomM && classes.noBottomM,
  )
}

const Container: React.FC<ContainerProps> = ({ As = "div", className, ignoreClasses=false, options, ...props }) => {

  return (
    <As {...props} className={cn(!ignoreClasses && getContainerClasses(options), className)}>
      {props.children}
    </As>
  );
}

export default Container;
