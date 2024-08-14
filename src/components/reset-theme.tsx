import { Button } from "./ui/button";
import { LOCAL_STORAGE_KEY } from "../lib/consts";
// import { ResetIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { ResetIcon } from "./icons";
import { resetTheme } from "../lib/utils";

export function ResetTheme() {
  const { resolvedTheme: currentTheme } = useTheme();
  return (
    <Button
      title="Reset to the default theme"
      // className="group"
      variant={"toolbtn"}
      size="toolbtn"
      onClick={() => (
        localStorage.removeItem(LOCAL_STORAGE_KEY + ":" + currentTheme),
        // resetTheme(),
        window.location.reload()
      )}
    >
      <ResetIcon />
      <span className="sr-only">Reset theme</span>
    </Button>
  );
}
