import { ResetTheme } from "./reset-theme";
import { cn } from "../lib/utils";
import SideBarColors from "./SideBarColors";
import { CopyTheme } from "./copy-theme";
import ThemeToggle from "./theme-toggle";

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      role="dialog"
      className={cn(
        "fixed customScrollBar transition-colors duration-500 left-0 inset-y-0 z-30 hidden h-screen max-h-screen w-fit shrink-0 bg-background overflow-y-auto py-6 pl-8 pr-6 lg:py-8 border-r-2 shadow-md drop-shadow-sm",
        isOpen && "md:block"
      )}
    >
      <div className="mb-1 flex items-center px-2 py-1 font-semibold">
        Shadcn Theme Editor
      </div>
      <div className="mb-1 flex items-center justify-between pl-2 py-1 text-sm font-semibold gap-2">
        Theming
        <div className="flex">
          <ResetTheme />
          <CopyTheme />
        </div>
      </div>
      {/* <ThemeToggle /> */}

      <div className="text-sm flex flex-col">
        <SideBarColors />
      </div>
      <footer className="flex flex-wrap justify-between gap-2 text-sm pt-2 mt-2 border-t">
        <a className="hover:underline underline-offset-1" href="https://github.com/programming-with-ia">Github</a>
        <a className="hover:underline underline-offset-1" href="https://www.npmjs.com/package/shadcn-theme-editor">npm</a>
        <span className="text-muted-foreground w-full text-left">@immi</span>
      </footer>
    </aside>
  );
}
