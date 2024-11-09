import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { createRandomTheme } from "../lib/create-theme-config";
import { useTheme } from "next-themes";
import { getComputedHSLColor, saveTheme } from "../lib/utils";
import { Dices, Lock, UnLock } from "./icons";
import { SystemThemes, themeModes, ThemeWithHSLColor } from "../lib/theme";
import { themeEmittor } from "../lib/emittors";
import { useIsMount } from "../hooks/useIsMount";

function RandomBtn() {
  const { resolvedTheme = "" + undefined, systemTheme = "dark" } = useTheme();

  const isMount = useIsMount();
  const [lockPrimary, setLockPrimary] = useState(true);

  if (!isMount) return null;

  const onClickHandler = () => {
    const themes = createRandomTheme(
      lockPrimary ? getComputedHSLColor("--primary") : undefined
    );

    let theme;

    if (SystemThemes.includes(resolvedTheme as any)) {
      theme = themes[resolvedTheme as themeModes] as ThemeWithHSLColor[];
      SystemThemes.forEach((theme) => saveTheme(theme, themes[theme])); // save both themes
    } else {
      theme = themes[systemTheme as themeModes] as ThemeWithHSLColor[];
      saveTheme(resolvedTheme, theme);
    }
    themeEmittor.applyTheme(theme);
  };

  const LockIcon = lockPrimary ? Lock : UnLock;

  return (
    <Button
      onClick={onClickHandler}
      title={
        "Generate Random theme, Primary is " +
        (lockPrimary ? "locked" : "not locked")
      }
      variant={"colorbtn"}
      className="cursor-pointer"
    >
      <Dices className="size-5" /> Randomize{" "}
      <LockIcon
        onClick={(e) =>
          console.log(
            setLockPrimary(!lockPrimary),
            lockPrimary,
            e.stopPropagation()
          )
        }
        aria-label={(lockPrimary ? "unlock" : "lock") + " primary color"}
        className="ml-auto size-6 hover:opacity-80 rounded-md hover:bg-background hover:fill-foreground p-0.5 fill-current"
      />
    </Button>
  );
}

export default RandomBtn;
