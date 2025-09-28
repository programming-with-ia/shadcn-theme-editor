import fs from "fs-extra";
import path from "path";
import { editorPath, rootDir } from "./paths";

function copyFiles() {
  try {
    ["README.md", "usage.md"].forEach((file) => {
      const src = path.join(rootDir, file);
      const dest = path.join(editorPath, file);

      fs.copyFileSync(src, dest);
      console.log(`✅ Copied ${file} → ${dest}`);
    });
  } catch (err) {
    console.error("❌ Error copying files:", err);
  }
}

// Example usage
copyFiles();
