"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Side } from "@/(main)/types";

type SheetContextValue = {
  open: boolean;
  setOpen: (next: boolean) => void;
  toggle: () => void;
};

const SheetCtx = React.createContext<SheetContextValue | null>(null);

function useSheetCtx() {
  const ctx = React.useContext(SheetCtx);
  if (!ctx) throw new Error("Sheet components must be used inside <Sheet>");
  return ctx;
}

export function Sheet({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const toggle = React.useCallback(() => setOpen((v) => !v), []);
  const value = React.useMemo(() => ({ open, setOpen, toggle }), [open]);
  return <SheetCtx.Provider value={value}>{children}</SheetCtx.Provider>;
}

type BtnNoClick = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

export function SheetTrigger(props: BtnNoClick) {
  const { toggle, open } = useSheetCtx();
  return (
    <button
      data-state={open ? "open" : "closed"}
      onClick={() => toggle()}
      {...props}
    />
  );
}

export function SheetContent({
  side,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { side?: Side }) {
  const { open } = useSheetCtx();
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        side === "right" ? "right-0 border-l" : "left-0 border-r",
        "inset-y-0 h-full w-3/4 fixed z-50",
        className,
      )}
      {...props}
    />
  );
}

export function SheetClose({
  className,
  children = "X",
  ...props
}: BtnNoClick) {
  const { setOpen } = useSheetCtx();
  return (
    <button
      //   aria-label="Close"
      className={cn("absolute top-4 right-4 z-10", className)}
      {...props}
      onClick={() => setOpen(false)}
    >
      {children}
    </button>
  );
}
