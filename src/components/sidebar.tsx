"use client";

import { themeColors } from "../lib/theme";

import { ScrollArea } from "./ui/scroll-area";
// import { Radius } from "@/components/radius";
import { ResetTheme } from "./reset-theme";
import { Item } from "./item";
import { cn, getColors } from "../lib/utils";
import SideBarColors from "./SideBarColors";
import { CopyTheme } from "./copy-theme";
import { useEffect, useState } from "react";

export function Sidebar({isOpen}:{isOpen: boolean}) {
  return (
    <aside role="dialog" className={cn("fixed left-0 inset-y-0 z-30 hidden h-screen max-h-screen shrink-0 bg-background", isOpen && "md:block")}>
      <ScrollArea className="relative h-full overflow-hidden py-6 pl-8 pr-6 lg:py-8">
        <h4 className="mb-1 flex items-center justify-between rounded-md px-2 py-1 text-sm font-semibold">
          Theming
          <div className="flex gap-2">
            <ResetTheme />
            <CopyTheme />
          </div>
        </h4>

        <div className="grid grid-flow-row auto-rows-max pb-4 text-sm">
          <SideBarColors />
        </div>
      </ScrollArea>
    </aside>
  );
}