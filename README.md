<div align="center">

# 🎨 Shadcn Theme Editor

**Effortless Shadcn Theme Customization Made Simple**

Manage Shadcn theme colors with an **intuitive UI**, adjust styles in real-time, and keep your design consistent without diving into raw CSS.

---

![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style&logo=Next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white)

![GitHub last commit](https://img.shields.io/github/last-commit/programming-with-ia/shadcn-theme-editor)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/programming-with-ia/shadcn-theme-editor)
![GitHub top language](https://img.shields.io/github/languages/top/programming-with-ia/shadcn-theme-editor)

![npm bundle size](https://badgen.net/bundlephobia/min/shadcn-theme-editor@latest)
[![NPM Version](https://img.shields.io/npm/v/shadcn-theme-editor?logo=npm)](https://www.npmjs.com/package/shadcn-theme-editor)
[![GitHub](https://img.shields.io/badge/shadcn_theme_editor-161b22?logo=github)](https://github.com/programming-with-ia/shadcn-theme-editor)

</div>

---

# 📍 Overview

The **Shadcn Theme Editor** is a lightweight component designed to simplify theme customization in Shadcn projects.

- 🎛 **Visual UI** for adjusting theme colors  
- ⚡ **Real-time preview** of changes  
- 🌗 **Supports light & dark mode** via the `html.dark` class
- 🛠 Works seamlessly with Shadcn components  
- 📦 Install as a **dev dependency** (recommended, due to bundle size)  

This makes it a **must-have dev tool** for anyone building with [shadcn/ui](https://ui.shadcn.com/).

---

## 🚀 Installation

There are two ways to install **shadcn-theme-editor**:

1. **[Via npm/yarn/pnpm/bun](#install-npm)** (as a dev dependency)  
2. **[Via Scaflo CLI](#install-scaflo-cli)** (copies fully editable components)  

---

<h3 id="install-npm">1️⃣ Install via npm (as a dev dependency)</h3>

Install the package as a development dependency:

```bash
# npm
npm install --save-dev shadcn-theme-editor

# yarn
yarn add --dev shadcn-theme-editor

# pnpm
pnpm add -D shadcn-theme-editor

# bun
bun add -D shadcn-theme-editor
```

---

**TailwindCSS**:
- Tailwind v4

  ```diff
  @import "tailwindcss";
  
  +@source "../node_modules/shadcn-theme-editor"; /** <-- depends on your project structure */
  ```

- Tailwind v3

  ```diff
  module.exports = {
  content: [
    // ...
  +  "./node_modules/shadcn-theme-editor/**/*", /** <-- depends on your project structure */
  ],
  // ...
  };

  ```

---

<h3 id="install-scaflo-cli">2️⃣ Install via Scaflo CLI</h3>

The [Scaflo CLI](https://github.com/programming-with-ia/scaflo) installs Shadcn Theme Editor as source components into your project, so you can fully customize them.

```bash
# pnpm (recommended)
pnpm dlx shadcn@latest add sheet button accordion
pnpm dlx scaflo@0.0.4 https://shadcnthemeeditor.vercel.app/r/editor.json -e %COMPONENTS%/shadcn-theme-editor

# or with npx
npx shadcn@latest add sheet button accordion
npx scaflo@0.0.4 https://shadcnthemeeditor.vercel.app/r/editor.json -e %COMPONENTS%/shadcn-theme-editor

# or with bun
bunx shadcn@latest add sheet button accordion
bunx scaflo@0.0.4 https://shadcnthemeeditor.vercel.app/r/editor.json -e %COMPONENTS%/shadcn-theme-editor
```

Follow the CLI prompts to generate and configure the components inside your own codebase.

> ⚠️ Note for **Next.js**: Add `"use client";` to `components/shadcn-theme-editor/index.tsx`.

---

## 📖 Usage

Import the component and add it to your layout:

<!-- 
> **Tip**  
> It is preferable to use this component within the `ThemeProvider`, as follows:
`import { ThemeProvider } from 'next-themes';` -->

```tsx
import ShadcnThemeEditor from "shadcn-theme-editor";
```

### Load in Development Only
Exclude the editor from production builds:

```tsx
let ShadcnThemeEditor: any;
if (process.env.NODE_ENV === 'development') {
  import('shadcn-theme-editor').then(module => {
    ShadcnThemeEditor = module.default; // or module, depending on the module's export
  });
} else {
  // eslint-disable-next-line react/display-name
  ShadcnThemeEditor = ()=>null
}
```

and use

```tsx
<ShadcnThemeEditor />
```

</br>

## 🖼️ Screenshots

<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/programming-with-ia/shadcn-theme-editor/master/screenshots/shadcn-theme-editor.png" alt="screenshot">
</p>

For detailed UI examples, see: [usage.md](./usage.md)

## ⚙️ Props

| Prop               | Type                     | Default                          | Description                                             |
| ------------------ | ------------------------ | -------------------------------- | ------------------------------------------------------- |
| `side`             | `"left"` | `"right"`     | `"left"`                         | Position of the editor sidebar.                         |
| `className`        | `string`                 | `undefined`                      | Extra CSS classes for the root element.                 |
| `triggerClassName` | `string`                 | `undefined`                      | Extra CSS classes for the trigger button.               |
| `title`            | `string`                 | `"Shadcn Theme Editor"`          | Sidebar header text.                                    |
| `customColors`     | `Record<string, string>` | `undefined`                      | Map of CSS vars → labels (e.g. `--primary: "Primary"`). |
| `getContainer`     | `() => HTMLElement`      | `() => document.documentElement` | Element where dynamic styles will be injected.          |

## 🙌 Special Thanks

- [Julian](https://github.com/jln13x) creator of [ui.jln.dev](https://ui.jln.dev/), featuring 10,000+ Shadcn themes.

## 📄 License

Licensed under the MIT License.
