import NullCompo from "./nullcompo";
import "./tailwind.css";
// import React, { Suspense, lazy } from 'react';
// import ThemeEditor from "./components/editor-open"
// export default ThemeEditor

// let ThemeEditor: () => JSX.Element = NullCompo;
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   import("./components/editor-open").then((module) => {
//     ThemeEditor = module.default;
//   });
// }


const ThemeEditor = process.env.NODE_ENV === 'development'
? import('./components/editor-open').then(module => module.default)
: NullCompo;

export default ThemeEditor;