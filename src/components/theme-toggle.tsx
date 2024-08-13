"use client";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils"
import { SVGProps, useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [CurrentTheme, setCurrentTheme] = useState<string|undefined>();
    useEffect(() => {
        console.log(theme)
        setCurrentTheme(theme)
    }, [theme]);

    function getClasses(isCurrentTheme:boolean){
        return cn("rounded-full p-2", isCurrentTheme ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground")
    }
  return (
    <div className="flex items-center gap-2 p-1 rounded-full border bg-background text-foreground w-fit">
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


export function MonitorIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    )
  }
  
  
  export function MoonIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  }
  
  
  export function SunIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }