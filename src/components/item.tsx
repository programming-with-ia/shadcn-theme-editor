import { ReadonlyThemeWithColor, ReadonlyThemeWithHSLColor, Theme, themeColors } from "../lib/theme";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ColorPicker } from "./color-picker";
import {
  // hslaToHsva,
  // hsvaToHex,
  // type ColorResult,
  type HslColor,
} from "@uiw/react-color";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { getColors, getComputedHSLColor, setProperity, setStyleColor } from "../lib/utils";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import { useMemo } from "react";

export function Item({ theme, onSave }: { theme: ReadonlyThemeWithHSLColor, onSave: ()=> void }) {
  // const { theme: currentTheme } = useTheme();
  const [color, setColor] = useState<HslColor>(theme.color);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setColor(theme.color)
  }, [theme]);
  const updateValue = useDebounceCallback(
    () => {
      setStyleColor(theme.variable, color);
      // console.log("color apply", theme.variable)
    },
    0
  );

  return (
    <Button variant={"ghost"} className="justify-start flex gap-2 w-full transition-none" asChild>
      <div>
        <ColorPicker
          color={color}
          // onMouseUp={onSave}
          onColorChange={(color) => {
            const hsl = color.hsl;
            const c = {
              h: Number(hsl.h.toFixed(2)),
              s: Number(hsl.s.toFixed(2)),
              l: Number(hsl.l.toFixed(2)),
            };
            setColor(c);
            updateValue();
            onSave()
          }}
        />
        <Label className="flex-shrink-0">{theme.title}</Label>
      </div>
    </Button>
  );
}
