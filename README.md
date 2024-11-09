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

![minified size](https://badgen.net/bundlephobia/min/shadcn-theme-editor@latest)

[![NPM Version](https://img.shields.io/npm/v/shadcn-theme-editor?logo=npm)](https://www.npmjs.com/package/shadcn-theme-editor)
[![GitHub](https://img.shields.io/badge/shadcn_theme_editor-161b22?logo=github)](https://github.com/programming-with-ia/shadcn-theme-editor)

</div>

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

**import default and add in `app/layout.tsx` file**

<!-- 
> **Tip**  
> It is preferable to use this component within the `ThemeProvider`, as follows:
`import { ThemeProvider } from 'next-themes';` -->

```tsx
import ShadcnThemeEditor from "shadcn-theme-editor";
```

or (in this way, it doesn't include the component in the production build)

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

# Screenshots

<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/programming-with-ia/shadcn-theme-editor/master/screenshots/shadcn-theme-editor.png" alt="logo">
</p>

## Upcoming Features

- use [jln themes](https://ui.jln.dev/) directly in your project

## Special Thanks

I would like to extend my heartfelt thanks to the following individuals and projects:

- **[Julian](https://github.com/jln13x)** - for creating [ui.jln.dev](https://ui.jln.dev/), 10000+ Themes for shadcn/ui.

## 📄 License

This project is licensed under the `ℹ️ MIT` License.
