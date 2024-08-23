import { createEmittor } from "emittor";
import { ThemeWithHSLColor } from "./theme";
import { getColors, resetTheme, setColorsProperties } from "./utils";

const tEmittor = createEmittor<ThemeWithHSLColor[] | undefined>(undefined, {
  match: false,
});

export const themeEmittor = {
  e: tEmittor,

  setDefaultTheme() {
    resetTheme();
    const theme = getColors(true);
    tEmittor.setState(theme as ThemeWithHSLColor[]);
  },
  applyTheme(theme: ThemeWithHSLColor[]) {
    setColorsProperties(theme)
    tEmittor.setState(theme)
  },
};
