<div align="center">
<h1 align="center">Shadcn Theme Editor</h1>
<h3>Effortless Shadcn Theme Customization Made Simple.</h3>
<h5>◦ Manage Shadcn theme colors with an intuitive UI.</h5>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style&logo=Next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white)

</p>

![git-last-commit](https://img.shields.io/github/last-commit/programming-with-ia/shadcn-theme-editor)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/programming-with-ia/shadcn-theme-editor)
![GitHub top language](https://img.shields.io/github/languages/top/programming-with-ia/shadcn-theme-editor)

![minified size](https://img.shields.io/bundlephobia/min/shadcn-theme-editor)

[![NPM Version](https://img.shields.io/npm/v/shadcn-theme-editor?logo=npm)](https://www.npmjs.com/package/shadcn-theme-editor)
[![GitHub](https://img.shields.io/badge/shadcn_theme_editor-161b22?logo=github)](https://github.com/programming-with-ia/shadcn-theme-editor)

</div>

> **IMPORTANT**  
> This package is experimental.

</br>

> **CAUTION**  
> Install only in dev dependencies.

---

## 📍 Overview

Shadcn Theme Editor is a user-friendly component designed to simplify the process of managing and customizing theme colors in Shadcn-based projects. This package provides an intuitive UI with buttons for different color properties, allowing developers to easily adjust and preview theme colors in real-time. Although the package is optimized for ease of use, its build size is substantial, so it is recommended to install it as a development dependency. This tool empowers developers to create consistent, visually appealing themes without diving into complex CSS, making it an essential addition to your Shadcn toolkit.

---

## 🚀 Getting Started

### Installation

To install the package as a development dependency, use one of the following commands:

**npm:**

```sh
npm install shadcn-theme-editor --save-dev
```

```sh
yarn add shadcn-theme-editor --dev
```

```sh
pnpm add shadcn-theme-editor --save-dev
```

---

## 📖 Usage

> **Tip**  
> It is preferable to use this component within the `ThemeProvider`, as follows:
`import { ThemeProvider } from 'next-themes';`

### for `Nextjs` projects

create new file `shadcn-theme-editor.tsx`

```tsx
"use client";
import ThemeEditor from "shadcn-theme-editor";

function ShadcnThemeEditor() {
  return (
    <>
        <ThemeEditor />
    </>
  )
}

export default ShadcnThemeEditor
```

then import this component in `layout` file,

preferably under the `ThemeProvider`, as follows:
`import { ThemeProvider } from 'next-themes';`

## 📄 License

This project is licensed under the `ℹ️ MIT` License.
