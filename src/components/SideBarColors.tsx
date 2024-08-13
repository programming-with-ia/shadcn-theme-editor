import { getColors, ls, setColorsProperties } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { Item } from "./item";
import { ReadonlyThemeWithHSLColor } from "../lib/theme";
import { useTheme } from "next-themes";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import z from "zod";
import { LOCAL_STORAGE_KEY } from "../lib/consts";

const ZodTheme = z.array(
  z.object({
    title: z.string(),
    variable: z.string(),
    color: z.object({
      h: z.number(),
      s: z.number(),
      l: z.number(),
    }),
  })
);

function SideBarColors() {
  // const { resolvedTheme: currentTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string | undefined>();
  useEffect(() => {
    setCurrentTheme(resolvedTheme)
  }, [resolvedTheme]);

  const [colors, setColors] = useState<ReadonlyThemeWithHSLColor[] | undefined>(
    undefined
  );
  // console.log("Current Theme is: ", currentTheme);
  const saveLocalStorage = useDebounceCallback(() => {
    console.log("Saving to localStorage");
    ls.setLocalStorage(LOCAL_STORAGE_KEY + ":" + currentTheme, getColors(true));
  }, 2000);

  useEffect(() => {
    console.log("Reading to localStorage");
    const theme = ls.getLocalStorageItem<ReadonlyThemeWithHSLColor[]>(
      LOCAL_STORAGE_KEY + ":" + currentTheme
    );
    if (theme) {
      try {
        const isValid = ZodTheme.parse(theme);
        console.log("theme is valid and appling", isValid);
        setColorsProperties(theme);
        setColors(theme);
        return;
      } catch (error) {
        console.log("invalid theme found in localStorage");
        // localStorage.removeItem(LOCAL_STORAGE_KEY+":"+currentTheme); //* remove key
      }
    }
    console.log("theme not found in localStorage");
    setColors(getColors(true) as any);
  }, [currentTheme]);
  return (
    <>
      {/* <span title="Currently, the `next-themes` feature is not working correctly. I will fix this issue in a later version, or feel free to submit a PR" className="text-muted-foreground px-4 py-2">!ResolvedTheme: {currentTheme}</span> */}
      {colors?.map((color) => (
        <Item
          key={color.variable.replace(/^-+/, "")}
          onSave={saveLocalStorage}
          theme={color}
        />
      ))}
    </>
  );
}

export default SideBarColors;
