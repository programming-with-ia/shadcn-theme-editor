import React from "react";
import { CompoProps } from "../../app/src/types/types";
import { cn } from "../lib/utils";

function Header({
  children,
  label,
}: {
  children?: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={cn(
        "mb-1 flex items-center justify-between pl-2 py-1 text-sm font-semibold gap-2"
      )}
    >
      {label} {children}
    </div>
  );
}

function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("text-sm flex flex-col", className)}>{children}</div>
  );
}

const SidebarSection = {
  Header,
  Root: Section,
  Seperator() {
    return <hr className="my-2" />;
  },
};

export default SidebarSection;
