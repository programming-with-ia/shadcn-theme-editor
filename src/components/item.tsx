import { ThemeWithHSLColor } from "../lib/theme";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { copy2clipboard, HSL2ComputedColor, setStyleColor } from "../lib/utils";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import { colord } from "colord";

export function Item({
  theme,
  onSave,
}: {
  theme: ThemeWithHSLColor;
  onSave: () => void;
}) {
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    setColor(colord(theme.color).toHex());
  }, [theme]);
  const updateValue = useCallback(
    useDebounceCallback((color: string) => {
      setStyleColor(theme.variable, colord(color).toHsl());
      onSave();
    }, 0),
    [theme.variable]
  );
  return (
    <Button
      variant={"colorbtn"}
      asChild
      title={theme.variable + ": " + HSL2ComputedColor(theme.color) + ";"}
      onClick={() =>
        copy2clipboard(
          theme.variable + ": " + HSL2ComputedColor(theme.color) + ";"
        )
      }
    >
      <div>
        <div className="relative overflow-hidden rounded border size-6 cursor-pointer shadow-md drop-shadow-md">
          <input
            onClick={(e) => e.stopPropagation()}
            // defaultValue={colord(color).toHex()}
            value={color}
            type="color"
            onChange={(e) => (
              setColor(e.target.value), updateValue(e.target.value)
            )}
            className="absolute cursor-pointer inset-1/2 size-[calc(100%+12px)] -translate-x-1/2 -translate-y-1/2 flex-shrink-0 bg-transparent"
          />
        </div>
        <span className="flex-shrink-0">{theme.title}</span>
      </div>
    </Button>
  );
}
