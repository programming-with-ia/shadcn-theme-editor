"use client";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import clsx from "clsx";
import ColorPalette from "./icons";

function EditorOpenBtn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="shadcn-theme-editor">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx("rounded-full p-3 fixed border shadow-md drop-shadow-sm bottom-2 right-2 z-[35]", isOpen?"bg-primary text-primary-foreground":"text-primary bg-primary-foreground opacity-50 hover:opacity-100")}
      >
        <ColorPalette size={24} />
      </button>
      <Sidebar state={{isOpen, setIsOpen}} />
    </div>
  );
}

export default EditorOpenBtn;
