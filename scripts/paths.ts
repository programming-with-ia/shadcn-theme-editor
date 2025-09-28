import path from "path";
import { fileURLToPath } from "url";

export const currentFile = fileURLToPath(import.meta.url);
export const rootDir = path.resolve(path.dirname(currentFile), "..");

export const editorPath = path.join(rootDir, "/shadcn-theme-editor");
export const editorMainPath = path.join(editorPath, "/src/(main)/");
export const outputPath = path.join(rootDir, "/web/public/r/editor.json");
