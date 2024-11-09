import { useTheme } from "next-themes";
import { cn } from "../lib/utils";
import { SVGProps, useEffect, useRef, useState } from "react";
import { useIsMount } from "../hooks/useIsMount";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMount = useIsMount()

  if (!isMount) return null;

  return (
    <div className="flex items-center gap-2 p-1 rounded-full border bg-background text-foreground w-fit">
      {(
        [
          ["light", SunIcon],
          ["dark", MoonIcon],
          ["system", MonitorIcon],
        ] as const
      ).map(([themeN, Icon]) => (
        <button
          className={cn(
            "rounded-full p-2",
            theme == themeN
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          )}
          aria-selected={theme == themeN || undefined}
          onClick={() => setTheme(themeN)}
          aria-label={`set ${themeN} theme`}
        >
          <Icon className="size-5" />
        </button>
      ))}
    </div>
  );
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
  );
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
  );
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
  );
}
