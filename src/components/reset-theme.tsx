import { Button } from "./ui/button";
import { LOCAL_STORAGE_KEY } from "../lib/consts";
import { useTheme } from "next-themes";
import { ResetIcon } from "./icons";
import { ls } from "../lib/utils";
import { themeEmittor } from "../lib/emittors";

export function ResetTheme() {
  const { resolvedTheme: currentTheme } = useTheme();
  return (
    <Button
      title="Reset to the default theme"
      variant={"toolbtn"}
      size="toolbtn"
      onClick={(e) => (
        e.ctrlKey
          ? ls.deleteAllThemes()
          : localStorage.removeItem(LOCAL_STORAGE_KEY + ":" + currentTheme),
        themeEmittor.setDefaultTheme()
      )}
    >
      <ResetIcon />
      <span className="sr-only">Reset theme</span>
    </Button>
  );
}
