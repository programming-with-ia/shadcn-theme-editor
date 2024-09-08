import { ResetTheme } from "./reset-theme";
import { cn } from "../lib/utils";
import SideBarColors from "./SideBarColors";
import { CopyTheme } from "./copy-theme";
import ThemeToggle from "./theme-toggle";
import RandomBtn from "./random";
import SidebarSection from "./sidebar-section";
import { Button } from "./ui/button";
import { X } from "./icons";

export function Sidebar({ state }: { state: {isOpen: boolean, setIsOpen: (state: boolean)=>void} }) {
  return (
    <aside
      role="dialog"
      className={cn(
        "fixed customScrollBar group duration-500 left-0 inset-y-0 z-50 hidden h-screen max-h-screen w-fit shrink-0 bg-background overflow-y-auto py-6 pl-8 pr-6 lg:py-8 border-r-2 shadow-md drop-shadow-sm",
        state.isOpen && "md:flex flex-col"
      )}
    >
      <Button onClick={()=>state.setIsOpen(!state.isOpen)} className="fixed top-0 right-0 m-2 opacity-0 group-hover:opacity-50 hover:!opacity-100" size={"toolbtn"} variant={"toolbtn"}>
        <X className="size-5" />
      </Button>
      <div className="flex items-center px-2 py-1 font-semibold">
        Shadcn Theme Editor
      </div>
      <SidebarSection.Header label="Theming">
        <div className="flex">
          <ResetTheme />
          <CopyTheme />
        </div>
      </SidebarSection.Header>

      <SidebarSection.Body className="flex-1">
        <SideBarColors />
      </SidebarSection.Body>
      {/* <SidebarSection.Seperator /> */}
      <SidebarSection.Header label="ui.jln.dev" href="https://ui.jln.dev/" />
      <SidebarSection.Body>
        <RandomBtn />
      </SidebarSection.Body>
      <footer className="flex flex-col gap-2 text-sm pt-4 mt-2 border-t -mb-4">
        <div className="flex flex-wrap justify-between gap-2">
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://github.com/programming-with-ia/shadcn-theme-editor"
          >
            Github
          </a>
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.npmjs.com/package/shadcn-theme-editor"
          >
            npm
          </a>
        </div>
        <span className="text-muted-foreground justify-between items-center text-left inline-flex w-full">
          @immi
          <ThemeToggle />
        </span>
      </footer>
    </aside>
  );
}
