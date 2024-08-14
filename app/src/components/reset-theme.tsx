"use client";

// import { ResetIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LOCAL_STORAGE_KEY } from "@/lib/consts";
import { ls } from "@/lib/utils";
import { ResetIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ResetTheme() {
    const { resolvedTheme: currentTheme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="group h-6 w-6"
            variant={"ghost"}
            size="icon"
            onClick={() => (localStorage.removeItem(LOCAL_STORAGE_KEY+":"+currentTheme), window.location.reload())}
          >
            <ResetIcon className="transition-transform duration-500 group-hover:-translate-x-0.5" />
            <span className="sr-only">Reset theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="hidden sm:block">
          <p>Reset to the default theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}