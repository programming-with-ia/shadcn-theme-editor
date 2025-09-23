import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CustomColors, DefaultThemeValue } from "./types";
import {
  CHART_COLORS,
  MAIN_COLORS,
  SIDEBAR_COLORS,
} from "./lib/default-colors";
import { Button } from "@/components/ui/button";
import { copy2clipboard, setProperity } from "./lib/utils";
import debounce from "lodash.debounce";
import { sharedData } from "./lib/shared";
import { useRef } from "react";
import { useEmittor } from "emittor";
import { ls } from "./lib/localstorage-helpers";

export default function Sidebar({
  customColors,
}: {
  customColors?: CustomColors;
}) {
  const [defaultTheme, setDefaultTheme] = useEmittor(
    sharedData.defaultThemeEmittor,
  );

  return (
    <>
      <Accordion
        defaultValue={["item-2"]}
        className="flex flex-col overflow-y-auto py-2"
        type="multiple"
      >
        {Object.entries(MAIN_COLORS).map(([propertyName, label]) => (
          <ColorItem
            key={propertyName}
            property={propertyName}
            label={label}
            defaultValue={defaultTheme[propertyName]}
          />
        ))}
        {(
          [
            customColors && {
              key: "custom-colors",
              title: "Custom",
              colors: customColors,
            },
            { key: "sidebar-colors", title: "Sidebar", colors: SIDEBAR_COLORS },
            { key: "chart-colors", title: "Chart", colors: CHART_COLORS },
          ].filter(Boolean) as {
            key: string;
            title: string;
            colors: CustomColors;
          }[]
        ).map(({ key, title, colors }) => (
          <AccordionItem
            key={key}
            value={key}
            className="flex flex-col border-b-0"
          >
            <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-muted-foreground px-4 py-2">
              {title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              {Object.entries(colors).map(([propertyName, label]) => (
                <ColorItem
                  key={key + propertyName}
                  property={propertyName}
                  label={label}
                  defaultValue={defaultTheme[propertyName]}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

// Create a debounced version of the function
const debouncedUpdateCss = debounce(
  ({
    property,
    value,
    hex,
  }: {
    property: string;
    value: string;
    hex: string;
  }) => {
    sharedData.currentTheme[property] = hex;
    setProperity(property, value);
    debouncedSaveCurrentTheme();
  },
  100,
  { maxWait: 1000 },
);

const debouncedSaveCurrentTheme = debounce(() => ls.saveCurrentTheme(), 1000, {
  maxWait: 5000,
});

function ColorItem({
  label,
  property,
  defaultValue,
}: {
  label: string;
  property: string;
  defaultValue: DefaultThemeValue | undefined;
}) {
  //! fix-later: copied value is diff from css value
  // const title = property + ": " + "not-changed;";
  const title =
    property + ": " + (defaultValue?.copyValue ?? "not-changed") + ";";
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      variant="ghost"
      className="h-10 justify-start transition-none select-none mx-2"
      title={title}
      ref={btnRef}
      //   onDoubleClick={() => copy2clipboard(title)}
      onDoubleClick={(e) => copy2clipboard(e.currentTarget.title)}
    >
      <div
        className="relative size-6 cursor-pointer overflow-hidden rounded border shadow-md drop-shadow-md"
        style={{ backgroundColor: `var(${property})` }}
      >
        <input
          className="absolute inset-0 opacity-0"
          key={defaultValue?.hex}
          defaultValue={defaultValue?.hex}
          // defaultValue={colord(color).toHex()}
          type="color"
          onChange={(e) => {
            const hex = e.currentTarget.value;

            const [_, cssValue] = sharedData.toCssString(hex);

            if (btnRef.current) {
              btnRef.current.title =
                property +
                ": " +
                (sharedData.getCopyValue
                  ? sharedData.getCopyValue(hex)[1]
                  : cssValue) +
                ";";
            }

            debouncedUpdateCss({ property, value: cssValue, hex });
          }}
          // onClick={(e) => e.stopPropagation()} //* disable copy to clipboard // i think no need for input double click
        />
      </div>
      <span className="flex-shrink-0">{label}</span>
    </Button>
  );
}
