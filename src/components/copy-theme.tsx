import { Button } from "../components/ui/button";
// import { CopyIcon } from "@radix-ui/react-icons";
import { copy2clipboard, getColors } from "../lib/utils";
import { CopyIcon } from "./icons";

export function CopyTheme() {
  const handleClick = () => {
    let themeString = getColors()
      .map((color) => `${color.variable}: ${color.color};`)
      .join("\n");
      copy2clipboard(themeString);
  };

  return (
    <Button
      title="Copy theme to clipboard"
      variant={"toolbtn"}
      size="toolbtn"
      // className="p-2"
      onClick={handleClick}
    >
      <CopyIcon />
      <span className="sr-only">Copy theme</span>
    </Button>
  );
}
