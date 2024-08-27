"use client";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";

function EditorOpenBtn() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div id="shadcn-theme-editor">
      <Button
        onClick={() => setIsOpen(!IsOpen)}
        className="fixed bottom-2 right-2 z-[35] opacity-50 hover:opacity-100"
      >
        {IsOpen ? "Close" : "Open"} Theme Editor
      </Button>
      <Sidebar isOpen={IsOpen} />
    </div>
  );
}

export default EditorOpenBtn;
