import { LOCAL_STORAGE_KEY } from "./consts";
import { themeEmittor } from "./emittors";
import { type ThemeWithHSLColor } from "./theme";
import { ls, ZodTheme } from "./utils";

export function setSavedTheme(theme: string | undefined){
    let lsTheme = ls.getLocalStorageItem<ThemeWithHSLColor[]>(
      LOCAL_STORAGE_KEY + ":" + theme
    );
    if (lsTheme) {
      try {
        const isValid = ZodTheme.parse(lsTheme);
        themeEmittor.applyTheme(lsTheme);
        return true;
      } catch (error) {
        // localStorage.removeItem(LOCAL_STORAGE_KEY+":"+currentTheme); //* remove key
      }
    }
    return false
  }