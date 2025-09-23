import type { ColorHandler, CustomColors, DefaultTheme, Theme } from "../types";
import { createEmittor, type Emittor } from "emittor";
import type { ShadcnVersion } from "./shadcn-version-detect";

export const sharedData: {
  //get css properity value
  toCssString: ColorHandler;
  // used when user copy color value of single color for it's project
  getCopyValue: ColorHandler | undefined; //* keep undefined here

  // is shadcn new version colors oklch
  shadcnVer: ShadcnVersion | undefined;

  // Used to save data to localStorage, hold changes
  currentTheme: Theme;

  // Used to hold default theme when change dark/light theme
  defaultThemeEmittor: Emittor<DefaultTheme>;

  isDark: boolean | undefined;
  // everything is okay
  success: boolean;

  // all colors:
  allColors: CustomColors; //! currently no need to shared
} = {
  toCssString: undefined as never,
  getCopyValue: undefined as never,
  shadcnVer: undefined,
  currentTheme: {},
  isDark: undefined,
  success: true,
  defaultThemeEmittor: createEmittor({}),
  allColors: {},
};
