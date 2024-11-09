import { getColors, ls, print } from "../lib/utils";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { useTheme } from "next-themes";
import { useDebounceCallback } from "../hooks/useDebounceCallback";
import { LOCAL_STORAGE_KEY } from "../lib/consts";
import { useEmittor } from "emittor";
import { themeEmittor } from "../lib/emittors";
import { setSavedTheme } from "../lib/set-saved-theme";
import { useIsMount } from "../hooks/useIsMount";

function SideBarColors() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();
  const isMount = useIsMount();

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const [colors, setColors] = useEmittor(themeEmittor.e);
  const saveLocalStorage = useDebounceCallback(() => {
    print("Saving the theme to local storage");
    ls.setLocalStorage(LOCAL_STORAGE_KEY + ":" + currentTheme, getColors(true));
  }, 2000);

  useEffect(() => {
    let isSavedThemeApplied = false;
    if (typeof colors == "undefined" || isMount) {
      // If colors are not defined (i.e., they haven't been set by other functions yet, meaning it's the first time),
      // or if this is due to a re-render caused by dependency changes (e.g., when currentTheme is updated).
      try {
        isSavedThemeApplied = setSavedTheme(currentTheme);
        return;
      } catch (error) {}
    }

    if (typeof colors == "undefined") {
      themeEmittor.setDefaultTheme();
    }
  }, [currentTheme]);

  return (
    <>
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
