import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar-colors";
import type {
  ColorHandler,
  DefaultTheme,
  DefaultThemeValue,
  Side,
  Theme,
} from "./types";
import { cn } from "@/lib/utils";
import { CopyIcon, PaletteIcon, Undo2Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { detectShadcnVersion } from "./lib/shadcn-version-detect";
import { sharedData } from "./lib/shared";
import { hexToHsl, hexToLab, hexToOklch } from "./lib/colorUtils";
import {
  CHART_COLORS,
  MAIN_COLORS,
  SIDEBAR_COLORS,
} from "./lib/default-colors";
import { ls } from "./lib/localstorage-helpers";
import { copyCurrentTheme, resetCurrentTheme } from "./lib/utils";

const colorHandlers = {
  oklch: (hex) => {
    const oklch = hexToOklch(hex);
    return [oklch, `oklch(${oklch.l} ${oklch.c} ${oklch.h})`];
  },
  lab: (hex) => {
    const lab = hexToLab(hex);
    return [lab, `lab(${lab.l}% ${lab.a} ${lab.b})`];
  },
  hsl: (hex) => {
    const hsl = hexToHsl(hex);
    return [hsl, `${hsl.h} ${hsl.s}% ${hsl.l}%`];
  },
} as const satisfies Record<string, ColorHandler>;

export default function Editor({
  side = "left",
  className,
  customColors,
  triggerClassName,
  toCssString,
  getCopyValue,
}: {
  side?: Side;
  className?: string;
  triggerClassName?: string;
} & Pick<React.ComponentProps<typeof Sidebar>, "customColors"> &
  Partial<Pick<typeof sharedData, "toCssString" | "getCopyValue">>) {
  //*

  useEffect(() => {
    const checkLocalStorageTheme = () => {
      const isDark = targetNode.classList.contains("dark");

      // no changes detected
      if (sharedData.isDark === isDark)
        // return sharedData.defaultThemeEmittor.setState({}); // reset theme
        return;
      sharedData.isDark = isDark;

      // find from localstorage
      const savedTheme = ls.get<Theme>(ls.getCurrentThemeKey());
      const isThemeNotFound = !Object.keys(savedTheme ?? {}).length;

      // Only perform a full theme reset if no saved theme was found.
      // If a theme exists, keep some settings so the saved theme can override them later.
      resetCurrentTheme(isThemeNotFound);

      if (isThemeNotFound) return;

      // Applies the saved theme to the live preview.
      const defaultTheme: DefaultTheme = {};

      Object.entries(sharedData.allColors).forEach(([propertyName, label]) => {
        const hex = savedTheme![propertyName];
        const value: DefaultThemeValue = {};

        if (hex) {
          const [color, cssValue] = sharedData.toCssString(hex);
          document.documentElement.style.setProperty(propertyName, cssValue);

          sharedData.currentTheme[propertyName] = hex;

          value.hex = hex;
          value.copyValue = sharedData.getCopyValue
            ? sharedData.getCopyValue(hex)[1]
            : cssValue;
        }

        defaultTheme[propertyName] = value;
      });

      sharedData.defaultThemeEmittor.setState(defaultTheme);
    };

    //* Detects theme changes by observing modifications to the `classList` on the `document.documentElement` element.
    const targetNode = document.documentElement;
    const observer = new MutationObserver(function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkLocalStorageTheme();
        }
      }
    });
    observer.observe(targetNode, {
      attributes: true,
      attributeFilter: ["class"],
    });

    //* settings according to the new or old version
    const shadcnVer = detectShadcnVersion();

    //* set shared data
    sharedData.shadcnVer = shadcnVer;

    sharedData.allColors = {
      ...MAIN_COLORS,
      ...SIDEBAR_COLORS,
      ...CHART_COLORS,
      ...(customColors ?? {}),
    };

    if (shadcnVer === "oklch") {
      sharedData.toCssString = colorHandlers.oklch;
      // sharedData.getCopyValue = colorHandlers.oklch;
    } else if (shadcnVer == "lab") {
      sharedData.toCssString = colorHandlers.lab;
      sharedData.getCopyValue = colorHandlers.oklch;
    } else if (shadcnVer == "hsl") {
      sharedData.toCssString = colorHandlers.hsl;
      // sharedData.getCopyValue = colorHandlers.hsl;
    } else {
      sharedData.success = false;
      console.error("STE: Unknown color value");
    }

    sharedData.toCssString = toCssString ?? sharedData.toCssString;
    sharedData.getCopyValue = getCopyValue ?? sharedData.getCopyValue;

    checkLocalStorageTheme();
  }, []);

  return (
    <Sheet>
      <SheetTrigger
        data-ste-trigger
        className={cn(
          "text-primary bg-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground fixed bottom-2 z-50 h-auto rounded-full border px-3 py-3 opacity-50 shadow-md drop-shadow-sm hover:opacity-100 data-[state=open]:opacity-100",
          side === "right" ? "left-2" : "right-2",
          triggerClassName,
        )}
      >
        <PaletteIcon className="size-6" />
      </SheetTrigger>
      <SheetContent
        side={side}
        className={cn(
          "bg-background flex flex-col overflow-hidden py-4 sm:max-w-72",
          className,
        )}
      >
        {sharedData.success ? (
          <>
            <Header />
            <Sidebar customColors={customColors} />
            <Footer />
            <SheetClose />
          </>
        ) : (
          <p className="text-destructive">
            Something went wrong. Check the console for more details.
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Header() {
  return (
    <div className="border-b px-2 shadow-md">
      <span className="flex items-center px-2 py-1 font-semibold">
        Shadcn Theme Editor
      </span>
      <div className="mb-1 mt-2 flex items-center justify-between gap-2 py-1 pl-2 text-sm font-semibold">
        Theming
        <div className="flex pr-2">
          <Button
            variant="ghost"
            size="icon"
            title="Copy theme to clipboard"
            data-copy-btn
            onClick={(e) => {
              const btn = e.currentTarget;
              btn.disabled = true;
              copyCurrentTheme();
              setTimeout(() => {
                btn.disabled = false;
              }, 1000);
            }}
          >
            <CopyIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Reset to the default theme"
            data-reset-btn
            onClick={(e) => (
              e.ctrlKey
                ? ls.deleteAllThemes()
                : localStorage.removeItem(ls.getCurrentThemeKey()),
              resetCurrentTheme()
            )}
          >
            <Undo2Icon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex justify-between gap-2 border-t px-2 pt-4 text-sm">
      <a
        className="underline-offset-1 hover:underline"
        target="_blank"
        href="https://github.com/programming-with-ia/shadcn-theme-editor"
      >
        ⭐ Star on Github
      </a>
      <a
        className="underline-offset-1 hover:underline"
        target="_blank"
        href="https://www.npmjs.com/package/shadcn-theme-editor"
      >
        npm
      </a>
    </footer>
  );
}
