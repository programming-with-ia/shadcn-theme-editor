import { ResetTheme } from "./reset-theme";
import { cn } from "../lib/utils";
import SideBarColors from "./SideBarColors";
import { CopyTheme } from "./copy-theme";

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      role="dialog"
      className={cn(
        "fixed customScrollBar transition-colors duration-500 left-0 inset-y-0 z-30 hidden h-screen max-h-screen shrink-0 bg-background overflow-y-auto py-6 pl-8 pr-6 lg:py-8 border-r-2 shadow-md drop-shadow-sm",
        isOpen && "md:block"
      )}
    >
      <div className="mb-1 flex items-center justify-between rounded-md px-2 py-1 text-sm font-semibold">
        Theming
        <div className="flex gap-2">
          <ResetTheme />
          <CopyTheme />
        </div>
      </div>

      <div className="grid grid-flow-row auto-rows-max pb-4 text-sm">
        <SideBarColors />
      </div>
    </aside>
  );
}
