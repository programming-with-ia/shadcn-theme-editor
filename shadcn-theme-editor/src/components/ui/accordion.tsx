"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AccordionCtxValue = {
  isOpen: (v: string) => boolean;
  toggle: (v: string) => void;
};

const AccordionCtx = React.createContext<AccordionCtxValue | null>(null);

function useAccordionCtx() {
  const ctx = React.useContext(AccordionCtx);
  if (!ctx) throw new Error("Accordion parts must be used inside <Accordion>");
  return ctx;
}

export function Accordion({
  children,
  defaultValue = [],
  type: _type,
  className,
}: {
  children?: React.ReactNode;
  defaultValue?: string[];
  type: "multiple";
  className?: string;
}) {
  const [openValues, setOpenValues] = React.useState<string[]>(defaultValue);

  const isOpen = React.useCallback(
    (v: string) => openValues.includes(v),
    [openValues],
  );

  const toggle = React.useCallback((v: string) => {
    setOpenValues((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v],
    );
  }, []);

  const value = React.useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <AccordionCtx.Provider value={value}>
      <div className={className}>{children}</div>
    </AccordionCtx.Provider>
  );
}

const ItemCtx = React.createContext<string | null>(null);

function useItemValue() {
  const v = React.useContext(ItemCtx);
  if (v == null)
    throw new Error("AccordionItem children must be inside <AccordionItem>");
  return v;
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <ItemCtx.Provider value={value}>
      {/* //!  need to disable `border-b last:border-b-0` for shadcn's style */}
      <div className={className}>{children}</div>
    </ItemCtx.Provider>
  );
}

type BtnNoClick = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: BtnNoClick) {
  const value = useItemValue();
  const { isOpen, toggle } = useAccordionCtx();
  const open = isOpen(value);

  return (
    <button
      aria-expanded={open}
      {...props}
      onClick={() => toggle(value)}
      className={cn(
        "flex flex-1 items-start justify-between gap-4 text-left text-sm font-medium",
        className,
      )}
    >
      <span>{children}</span>
      <span className="select-none font-bold">{open ? "-" : "+"}</span>
    </button>
  );
}

//! remove padding bottom from shadcn's style
export function AccordionContent({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const value = useItemValue();
  const { isOpen } = useAccordionCtx();
  if (!isOpen(value)) return null;
  return <div {...props} />;
}
