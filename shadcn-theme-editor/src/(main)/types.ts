import type { HSL, LAB, OKLCH } from "./lib/colorUtils";

export type Side = "left" | "right";
export type CustomColors = Record<string, string>; // --property-name: label/title/name
// export type Theme = Record<string, { label: string; color: string }>; // --property-name: { label: label/title/name, color: #hc0l0r }
export type Theme = Record<string, string>; // --property-name: hex

export type DefaultThemeValue = {
  hex?: string; // for default color
  // cssValue: string; // for title/tooltip
  copyValue?: string; // for title/tooltip
};

export type DefaultTheme = Record<
  string, // --property-name
  DefaultThemeValue
>;

export type ColorHandler = (hex: string) => [OKLCH | HSL | LAB, string]; //! fix-later: make this to return only string
