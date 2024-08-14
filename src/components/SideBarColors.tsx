import { getColors, ls, resetTheme, setColorsProperties } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { Item } from "./item";
import { ReadonlyThemeWithHSLColor } from "../lib/theme";
import { useTheme } from "next-themes";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import z from "zod";
import { LOCAL_STORAGE_KEY } from "../lib/consts";

function print(...props: any) {
  if ((window as any).shadcnThemeEditorDebugMode) {
    console.log(...props);
  }
}

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
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const [colors, setColors] = useState<
    ReadonlyThemeWithHSLColor[] | undefined
  >();
  // console.log("Current Theme is: ", currentTheme);
  const saveLocalStorage = useDebounceCallback(() => {
    print("Saving the theme to local storage");
    ls.setLocalStorage(LOCAL_STORAGE_KEY + ":" + currentTheme, getColors(true));
  }, 2000);

  useEffect(() => {
    resetTheme();
    print("reading theme", LOCAL_STORAGE_KEY + ":" + currentTheme);
    let theme = ls.getLocalStorageItem<ReadonlyThemeWithHSLColor[]>(
      LOCAL_STORAGE_KEY + ":" + currentTheme
    );
    if (theme) {
      try {
        const isValid = ZodTheme.parse(theme);
        print("theme is valid and appling", isValid);
        print("applied theme", theme);
        setColorsProperties(theme);
        setColors(theme);
        return;
      } catch (error) {
        print("invalid theme found in localStorage");
        // localStorage.removeItem(LOCAL_STORAGE_KEY+":"+currentTheme); //* remove key
      }
    }
    theme = getColors(true) as any;
    print("theme not found in localStorage");
    print("Now theme: ", theme);
    setColors(theme as any);
  }, [currentTheme]);
  return (
    <>
      {/* <span title="Currently, the `next-themes` feature is not working correctly. I will fix this issue in a later version, or feel free to submit a PR" className="text-muted-foreground px-4 py-2">!ResolvedTheme: {currentTheme}</span> */}
      {colors?.map((color) => (
        <Item
          key={color.variable.replace(/^-+/, "") + currentTheme}
          onSave={saveLocalStorage}
          theme={color}
        />
      ))}
    </>
  );
}

export default SideBarColors;
