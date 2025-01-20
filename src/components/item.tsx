import { ThemeWithHSLColor } from "../lib/theme";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const hslColorRef = useRef(colord(color).toHsl());

  useEffect(() => {
    setColor(colord(theme.color).toHex());
  }, [theme]);

  const updateValue = useCallback(
    useDebounceCallback(() => {
      setStyleColor(theme.variable, hslColorRef.current);
      onSave(); // save to localstorage
    }, 100),
    [theme.variable]
  );

  const title =
    theme.variable + ": " + HSL2ComputedColor(hslColorRef.current) + ";";

  return (
    <Button
      variant={"colorbtn"}
      className="select-none"
      asChild
      title={title}
      onDoubleClick={() => copy2clipboard(title)}
    >
      <div>
        <div className="relative overflow-hidden rounded border size-6 cursor-pointer shadow-md drop-shadow-md">
          <input
            className="absolute cursor-pointer inset-1/2 size-[calc(100%+12px)] -translate-x-1/2 -translate-y-1/2 flex-shrink-0 bg-transparent"
            // defaultValue={colord(color).toHex()}
            type="color"
            value={color}
            onChange={(e) => {
              const clr = e.target.value;
              hslColorRef.current = colord(clr).toHsl();
              setColor(clr);
              updateValue();
            }}
            onClick={(e) => e.stopPropagation()} // disable copy to clipboard
          />
        </div>
        <span className="flex-shrink-0">{theme.title}</span>
      </div>
    </Button>
  );
}
