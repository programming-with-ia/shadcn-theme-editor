import React from "react";
import { cn } from "../lib/utils";

function Header({
  children,
  label,
  href
}: {
  children?: React.ReactNode;
  label: string;
  href?: string;
}) {
  const Comp = href ? "a": "div"
  return (
    <Comp
      href={href}
      target={href? "_blank": undefined}
      className={cn(
        "mb-1 mt-2 flex items-center justify-between pl-2 py-1 text-sm font-semibold gap-2",
        href && "hover:underline underline-offset-1"
      )}
    >
      {label} {children}
    </Comp>
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
  Body: Section,
  Seperator() {
    return <hr className="my-2" />;
  },
};

export default SidebarSection;
