"use client";
import React, { useState } from 'react'
import Sidebar from './sidebar';

function EditorOpenBtn() {
    const [IsOpen, setIsOpen] = useState(false);
  return (
    <div data-shadcn-theme-editor>
        <button onClick={()=>setIsOpen(!IsOpen)} className='btn btn-default editor-open-btn'>
            Theme Editor
        </button>
        <Sidebar isOpen={IsOpen} />
    </div>
  )
}

export default EditorOpenBtn