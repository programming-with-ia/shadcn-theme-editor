// --- Types ---

import { memoize } from "./utils";

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface OKLCH {
  l: number; // Lightness
  c: number; // Chroma
  h: number; // Hue
}

export interface HSL {
  h: number; // Hue (0–360)
  s: number; // Saturation % (0–100)
  l: number; // Lightness % (0–100)
}

export interface LAB {
  l: number; // Lightness (0–100)
  a: number; // Green-Red axis
  b: number; // Blue-Yellow axis
}

// --- Helpers ---

export function hexToRgb(hex: string): RGB {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  hex = hex.slice(0, 6); // ignore alpha
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export const hexToRgbLinear = memoize((hex: string): RGB => {
  const { r, g, b } = hexToRgb(hex);
  return {
    r: srgbToLinear(r),
    g: srgbToLinear(g),
    b: srgbToLinear(b),
  };
});

function srgbToLinear(c: number): number {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

interface OKLab {
  L: number;
  a: number;
  b: number;
}

function linearRgbToOklab({ r, g, b }: RGB): OKLab {
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  };
}

function oklabToOklch({ L, a, b }: OKLab): OKLCH {
  const C = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) h += 360;
  return { l: L, c: C, h };
}

interface XYZ {
  x: number;
  y: number;
  z: number;
}

function linearRgbToXyz({ r, g, b }: RGB): XYZ {
  // Using the sRGB D65 transformation matrix
  const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
  const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;

  // Scale to the standard XYZ range
  return {
    x: x * 100,
    y: y * 100,
    z: z * 100,
  };
}

function xyzToLab({ x, y, z }: XYZ): LAB {
  // D65 reference white point
  const refX = 95.047;
  const refY = 100.0;
  const refZ = 108.883;

  x /= refX;
  y /= refY;
  z /= refZ;

  // The non-linear transformation function
  const f = (t: number): number => {
    const delta = 6 / 29;
    return t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
  };

  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  const l = 116 * fy - 16;
  const a = 500 * (fx - fy);
  const b = 200 * (fy - fz);

  return { l, a, b };
}

// --- Public Functions ---

export function hexToOklch(hex: string): OKLCH {
  const linearRgb = hexToRgbLinear(hex);
  const lab = linearRgbToOklab(linearRgb);
  const lch = oklabToOklch(lab);
  return {
    l: +lch.l.toFixed(3),
    c: +lch.c.toFixed(3),
    h: +lch.h.toFixed(3),
  };
}

export function hexToHsl(hex: string): HSL {
  const { r, g, b } = hexToRgb(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rNorm) {
      h = ((gNorm - bNorm) / delta) % 6;
    } else if (max === gNorm) {
      h = (bNorm - rNorm) / delta + 2;
    } else {
      h = (rNorm - gNorm) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h: +h.toFixed(3),
    s: +(s * 100).toFixed(3),
    l: +(l * 100).toFixed(3),
  };
}

export function hexToLab(hex: string): LAB {
  const linearRgb = hexToRgbLinear(hex);
  const xyz = linearRgbToXyz(linearRgb);
  const lab = xyzToLab(xyz);

  return {
    l: +lab.l.toFixed(3),
    a: +lab.a.toFixed(3),
    b: +lab.b.toFixed(3),
  };
}
