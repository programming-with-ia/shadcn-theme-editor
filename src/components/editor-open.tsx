"use client";
import React, { useState } from 'react'
import { Button } from './ui/button'
import {Sidebar} from './sidebar';

function EditorOpenBtn() {
    const [IsOpen, setIsOpen] = useState(false);
  return (
    <div data-shadcn-theme-editor>
        <Button onClick={()=>setIsOpen(!IsOpen)} className='fixed bottom-2 right-2 z-10 opacity-50 hover:opacity-100'>
            Theme Editor
        </Button>
        <Sidebar isOpen={IsOpen} />
    </div>
  )
}

export default EditorOpenBtn