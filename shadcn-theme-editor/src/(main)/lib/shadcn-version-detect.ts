export type ShadcnVersion = "oklch" | "lab" | "hsl";

export function detectShadcnVersion(
  cssVarName = "--primary",
): ShadcnVersion | undefined {
  // SSR / non-browser guard
  if (typeof window === "undefined" || typeof document === "undefined") {
    return undefined;
  }

  try {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVarName)
      .trim()
      .toLowerCase();

    if (!raw) return undefined;
    if (raw.startsWith("lab(")) return "lab";
    if (raw.startsWith("oklch(")) return "oklch";
    return "hsl";
  } catch {
    return undefined;
  }
}

// export function isShadcnNew(mode: ShadcnVersion): boolean {
//   return mode === "new";
// }
