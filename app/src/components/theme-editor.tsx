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
            "rounded-full px-3 py-3 fixed bottom-2 right-2 border shadow-md drop-shadow-sm z-20", !isOpen && 'opacity-70 hover:opacity-100 animate-bounce hover:animate-none'
          )}
        >
          <ColorPalette size={24} />
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
