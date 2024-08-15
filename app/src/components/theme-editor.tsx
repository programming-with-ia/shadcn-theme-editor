import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShadcnThemeEditor from "shadcn-theme-editor";
import { Button } from "./ui/button";

function ThemeEditor() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed bottom-2 right-2 opacity-50 hover:opacity-100">Open Editor</Button>
      </SheetTrigger>
      <SheetContent overlay={false} className="p-0 w-fit bg-background/70 backdrop-blur-md" side={"left"}>
        <ShadcnThemeEditor />
      </SheetContent>
    </Sheet>
  );
}

export default ThemeEditor;
