export const url = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"; // ?? // * Production URL
// process.env.NEXT_PUBLIC_VERCEL_URL ?? // * Vercel Auto URL
// "http://localhost:3000"; // * Dev

export const siteConfig = {
  name: "Shadcn Theme Editor",
  description:
    "Shadcn Theme Editor is a user-friendly component designed to simplify the process of managing and customizing theme colors in Shadcn-based projects.",
  id: "oimmi",
  email: "iafullprogrammer@gmail.com",
  keywords: [
    "shadcn-theme-editor",
    "shadcn theme editor",
    "shadcn",
    "shadcn-ui",
    "theme",
    "color",
    "next-themes",
    "theme-edit",
    "customization",
    "personalization",
    "colord",
    "theme-customization",
    "dev tool",
    "development tools",
    "UI toolkit",
    "design tools",
    "CSS customization",
    "UI customization",
    "frontend development",
    "theme switching",
    "responsive design",
    "web design tools",
    "user interface",
    "color palette",
    "style guide",
    "visual design",
    "user experience",
    "web development",
    "JavaScript tools",
    "React tools",
    "Next.js themes",
    "component library",
  ],
  color: "#169fb1",
  seo: {},
  url: url,
  authors: {
    name: "immi",
    url: "https://oimmi.com/",
  },
  github: "https://github.com/programming-with-ia/shadcn-theme-editor/",
  npm: "https://www.npmjs.com/package/shadcn-theme-editor",
  images: [
    { width: 1200, height: 630 },
    { width: 1024, height: 512 },
    { width: 512, height: 512 },

  ].map((size) => ({
    url: `https://placehold.co/${size.width}x${size.height}/169fb1/FFFFFF.png/?font=Open%20Sans&text=Shadcn%20Theme%20Editor`,
    ...size,
  })),
  //   images: [
  //     {
  //         url: "src-1200x630.png",
  //         width: 1200,
  //         height: 630,
  //     },
  //     {
  //         url: "src-1024x512.png",
  //         width: 1024,
  //         height: 512,
  //     },
  //     {
  //         url: "src-512x512.png",
  //         width: 512,
  //         height: 512,
  //     },
  //   ]
};
