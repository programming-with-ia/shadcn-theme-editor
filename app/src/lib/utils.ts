import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function joinPaths(...paths: (string | boolean)[]): string {
  const complete =
    typeof paths[paths.length - 1] === "boolean"
      ? (paths.pop() as boolean)
      : false;

  let joinedPath = paths.join("/").replace(/\/{2,}/g, "/");

  if (complete && !/^https?:\/\//.test(joinedPath)) {
    joinedPath = `https://${joinedPath}`;
  }

  return joinedPath;
}

export {clsx, twMerge}