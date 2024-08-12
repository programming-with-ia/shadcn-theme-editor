import { type ClassValue, clsx } from "clsx";
import { ReadonlyThemeWithHSLColor, type ShadCnPropritiesType, themeColors } from "./theme";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getColors(colorAsHSL=false) {
  let themeString = themeColors.map((item) => {
    const rootStyles = window.getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue(item.variable);
    return { title: item.title, variable: item.variable, color: colorAsHSL ? computedColor2HSL(color) : color };
  });

  return themeString;
}

export function setColorsProperties(colorData:ReadonlyThemeWithHSLColor[]){
  const rootElement = (document.querySelector(":root") as HTMLElement)
  if (!rootElement) return false
  colorData.map(color=> rootElement.style.setProperty(color.variable, HSL2ComputedColor(color.color)))
  return true
}

export function getRadius() {
  const rootStyles = window.getComputedStyle(document.documentElement);
  const defaultRadius = rootStyles.getPropertyValue("--radius").split(" ");

  return defaultRadius[0];
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
  return computedColor2HSL(getProprity(proprity))
}
export function computedColor2HSL(color:string): HslColor{
  const hslColor = color.split(" ");
  return {
    h: parseFloat(hslColor[0]),
    s: parseFloat(hslColor[1]),
    l: parseFloat(hslColor[2]),
  };
}
export function HSL2ComputedColor(color: HslColor){
  return `${color.h} ${color.s}% ${color.l}%`
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
};