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
  const [color, setColor] = useState<HslColor>(theme.color);

  useEffect(() => {
    setColor(theme.color);
  }, [theme]);
  const updateValue = useDebounceCallback(() => {
    setStyleColor(theme.variable, color);
    onSave();
  }, 0);

  return (
    <Button
      variant={"colorbtn"}
      asChild
      title={theme.variable}
    >
      <div>
        <div className="relative overflow-hidden rounded border size-6 cursor-pointer shadow-md drop-shadow-md">
          <input
            defaultValue={colord(color).toHex()}
            type="color"
            onChange={(e) => (
              setColor(colord(e.target.value).toHsl()), updateValue()
            )}
            className="absolute cursor-pointer inset-1/2 size-[calc(100%+12px)] -translate-x-1/2 -translate-y-1/2 flex-shrink-0 bg-transparent"
          />
        </div>
        <span className="flex-shrink-0">{theme.title}</span>
      </div>
    </Button>
  );
}
