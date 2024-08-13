"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";

function EditorOpenBtn() {
  const [IsOpen, setIsOpen] = useState(false);
  // const [IsMount, setIsMount] = useState(false);
  // useEffect(() => {
  //   setIsMount(true)
  // }, []);
  // if (!IsMount){
  //   return null
  // }
  return (
    <div id="shadcn-theme-editor">
      <Button
        onClick={() => setIsOpen(!IsOpen)}
        className="fixed bottom-2 right-2 z-[35] opacity-50 hover:opacity-100"
      >
        Theme Editor
      </Button>
      <Sidebar isOpen={IsOpen} />
    </div>
  );
}

export default EditorOpenBtn;
