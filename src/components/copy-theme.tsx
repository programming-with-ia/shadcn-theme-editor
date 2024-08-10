import { themeColors, radiusTheme } from "../lib/theme";

import { Button } from "../components/ui/button";
// import { useToast } from "../components/ui/use-toast";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { CopyIcon } from "@radix-ui/react-icons";
import { getColors } from "../lib/utils";

export function CopyTheme() {
//   const { toast } = useToast();

  const handleClick = () => {
    // let themeString = themeColors
    //   .map((item) => {
    //     const rootStyles = window.getComputedStyle(document.documentElement);
    //     const color = rootStyles
    //       .getPropertyValue(item.variable)
    //     return `${item.variable}: ${color};`;
    //   })
    //   .join("\n");
    let themeString = getColors().map(color=> (`${color.variable}: ${color.color};`)).join("\n")

    // const radiusString = window
    //   .getComputedStyle(document.documentElement)
    //   .getPropertyValue(radiusTheme.variable);

    // themeString += `\n${radiusTheme.variable}: ${radiusString};`;

    navigator.clipboard.writeText(themeString);
    // toast({ title: "Wohoo!", description: "Theme copied to clipboard!" });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size="icon"
            className="size-6"
            onClick={handleClick}
          >
            <CopyIcon />
            <span className="sr-only">Copy theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy theme to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}