import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const currentFile = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFile), "..");

const editorPath = path.join(rootDir, "/shadcn-theme-editor");
const editorMainPath = path.join(editorPath, "/src/(main)/");
const outputPath = path.join(rootDir, "/web/public/r/editor.json");

fs.ensureDirSync(path.dirname(outputPath));

function getAllFileNames(dirPath: string): string[] {
  try {
    const entries: string[] = fs.readdirSync(dirPath);
    const files: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isFile()) {
        // Use path.parse to safely remove extension
        files.push(path.parse(entry).name);
      }
    }

    return files;
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    console.error(`Error reading directory: ${error.message}`);
    throw error;
  }
}

type RegistryFile = {
  path: string;
  type: "registry:component";
  content: string;
};

type RegistryJson = {
  $schema: string;
  name: string;
  type: "registry:component";
  title: string;
  description: string;
  files: RegistryFile[];
  dependencies: string[];
  registryDependencies: string[];
};

function generateShadcnRegistry(
  rootDir: string,
  _modify?: (content: string, filePath: string) => string,
): RegistryJson {
  const files: RegistryFile[] = [];
  const modify: NonNullable<typeof _modify> = _modify ?? ((content) => content);

  function walk(dir: string) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
      } else {
        // read and modify file content via callback
        const original = fs
          .readFileSync(fullPath, "utf8")
          .replace(/\r\n/g, "\n");
        const modified = modify(original, fullPath);

        files.push({
          path: `registry/magicui/${path.relative(rootDir, fullPath).replace(/\\/g, "/")}`,
          type: "registry:component",
          content: modified,
        });
      }
    }
  }

  walk(rootDir);

  const registry: RegistryJson = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "Shadcn Theme Editor",
    type: "registry:component",
    title: "Shadcn Theme Editor",
    description:
      "Shadcn Theme Editor is a user-friendly component designed to simplify the process of managing and customizing theme colors in Shadcn-based projects.",
    files,
    registryDependencies: getAllFileNames(
      path.join(editorPath, "/src/components/ui"),
    ),
    dependencies: ["lucide-react"],
  };

  return registry;
}

console.log("⏳  Starting Shadcn registry generation…");
fs.writeJSONSync(outputPath, generateShadcnRegistry(editorMainPath));
console.log(`✅  Registry successfully generated at: ${outputPath}`);
