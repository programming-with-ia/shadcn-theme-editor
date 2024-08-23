import { type ClassValue, clsx } from "clsx";
import {
  ThemeWithHSLColor,
  type ShadCnPropritiesType,
  themeColors,
} from "./theme";
import { LOCAL_STORAGE_KEY } from "./consts";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getColors(colorAsHSL = false) {
  let themeString = themeColors.map((item) => {
    const rootStyles = window.getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue(item.variable);
    return {
      title: item.title,
      variable: item.variable,
      color: colorAsHSL ? computedColor2HSL(color) : color,
    };
  });

  return themeString;
}

// export function getDefaultTheme(){
//   resetTheme()
//   const theme = getColors(true)
//   return theme as ThemeWithHSLColor[]
// }

export function setColorsProperties(colorData: ThemeWithHSLColor[]) {
  const rootElement = document.querySelector(":root") as HTMLElement;
  if (!rootElement) return false;
  colorData.map((color) =>
    rootElement.style.setProperty(
      color.variable,
      HSL2ComputedColor(color.color)
    )
  );
  return true;
}

export const copy2clipboard = (text: string) =>
  navigator.clipboard.writeText(text);

export function resetTheme() {
  const rootElement = document.querySelector(":root") as HTMLElement;
  if (!rootElement) return false;
  themeColors.forEach((color) =>
    rootElement.style.removeProperty(color.variable)
  );
  return true;
}

export function removeWhitespaces(text: string) {
  return text.replace(/\s/g, "");
}

export function setProperity(proprity: string, value: string | null) {
  (document.querySelector(":root") as HTMLElement)?.style.setProperty(
    proprity,
    value
  );
}

export function getProprity(proprity: string) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(proprity);
}
export function getComputedHSLColor(proprity: ShadCnPropritiesType) {
  return computedColor2HSL(getProprity(proprity));
}
export function computedColor2HSL(color: string): HslColor {
  const hslColor = color.split(" ");
  return {
    h: parseFloat(hslColor[0]),
    s: parseFloat(hslColor[1]),
    l: parseFloat(hslColor[2]),
  };
}
export function HSL2ComputedColor(color: HslColor) {
  return `${color.h} ${color.s}% ${color.l}%`;
}
export function setStyleColor(proprity: ShadCnPropritiesType, color: HslColor) {
  setProperity(proprity, HSL2ComputedColor(color));
}

export const ls = {
  setLocalStorage<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  },
  getLocalStorageItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return null;
    }
  },
  deleteAllThemes() {
    // Iterate over all keys in localStorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith(LOCAL_STORAGE_KEY)) {
        localStorage.removeItem(key);
      }
    }
  }
  
};

export function saveTheme(key: string | undefined, theme: ThemeWithHSLColor[]){
  ls.setLocalStorage(LOCAL_STORAGE_KEY + ":" + key, theme);
}
