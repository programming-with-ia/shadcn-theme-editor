"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShadcnThemeEditor from "shadcn-theme-editor";
import { Button } from "./ui/button";
import { IoColorPaletteSharp as ColorPalette } from "react-icons/io5";
import clsx from "clsx";
import { useState } from "react";

function ThemeEditor() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          title={(isOpen? 'Close': "Open")+' Editor'}
          aria-label={(isOpen? 'Close': "Open")+' Editor'}
          variant={isOpen ? "secondary" : "default"}
          className={clsx(
            "rounded-full px-3 py-3 fixed transition-all duration-300 border shadow-md drop-shadow-sm z-20 group overflow-hidden bottom-2 left-1/2 -translate-x-1/2", isOpen ? 'opacity-0': ''
          )}
        >
          <ColorPalette size={24} />
          <span className="group-hover:w-40 group-hover:opacity-100 w-0 opacity-0 transition-all duration-300">Shadcn Theme Editor</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        overlay={false}
        className="p-0 w-fit bg-background/70 backdrop-blur-md"
        side={"left"}
      >
        <ShadcnThemeEditor />
      </SheetContent>
    </Sheet>
  );
}

export default ThemeEditor;
