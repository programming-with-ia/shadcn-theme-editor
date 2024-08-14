"use client";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils"
import { MonitorIcon, MoonIcon, SunIcon } from "./icons2"
import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    console.log("resolvedTheme", resolvedTheme)
    const [CurrentTheme, setCurrentTheme] = useState<string|undefined>();
    useEffect(() => {
        setCurrentTheme(theme)
    }, [theme]);

    function getClasses(isCurrentTheme:boolean){
        return cn("rounded-full p-2", isCurrentTheme ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground")
    }
  return (
    <div className="flex items-center gap-2 p-1 rounded-full border bg-background text-foreground mx-auto w-fit">
      <button onClick={()=> setTheme("light")}
        aria-label="Toggle light theme"
        className={getClasses(CurrentTheme == "light")}
      >
        <SunIcon className="size-5" />
      </button>
      <button onClick={()=> setTheme("dark")}
        aria-label="Toggle dark theme"
        className={getClasses(CurrentTheme == "dark")}
      >
        <MoonIcon className="size-5" />
      </button>
      <button onClick={()=> setTheme("system")}
        aria-label="Toggle system theme"
        className={getClasses(CurrentTheme == "system")}
      >
        <MonitorIcon className="size-5" />
      </button>
    </div>
  )
}
