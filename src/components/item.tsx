import { ReadonlyThemeWithHSLColor } from "../lib/theme";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn, setStyleColor } from "../lib/utils";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import { colord } from "colord";

export function Item({
  theme,
  onSave,
}: {
  theme: ReadonlyThemeWithHSLColor;
  onSave: () => void;
}) {
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    setColor(colord(theme.color).toHex());
  }, [theme]);
  const updateValue = useDebounceCallback(() => {
    setStyleColor(theme.variable, colord(color).toHsl());
    onSave();
  }, 0);
  console.log(theme.variable, theme.color, color)
  return (
    <Button
      variant={"colorbtn"}
      asChild
      title={theme.variable}
    >
      <div>
        <div className="relative overflow-hidden rounded border size-6 cursor-pointer shadow-md drop-shadow-md">
          <input
            // defaultValue={colord(color).toHex()}
            value={color}
            type="color"
            onChange={(e) => (
              setColor(e.target.value), updateValue()
            )}
            className="absolute cursor-pointer inset-1/2 size-[calc(100%+12px)] -translate-x-1/2 -translate-y-1/2 flex-shrink-0 bg-transparent"
          />
        </div>
        <span className="flex-shrink-0">{theme.title}</span>
      </div>
    </Button>
  );
}
