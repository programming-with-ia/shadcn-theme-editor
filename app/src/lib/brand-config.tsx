export const url =
  process.env.NEXT_PUBLIC_BASE_URL ?? // * Production URL
  process.env.NEXT_PUBLIC_VERCEL_URL ?? // * Vercel Auto URL
  "http://localhost:3000"; // * Dev

export const brandConfig = {
  Brand: "Shadcn Theme Editor",
  email: "mimranabid2@gmail.com",
  keywords: ["animation studio", "2d animation"],
  // description: "A Brand That's Provide differents Services, ",
  description:
    "2d animation studio, web development, nextjs development, react development, video editing, character design, ui-ux design, ui/ux design, concept art, art design",
  seo: {},
  url: url,
//   ogImage: `${url}/src-1200x630.png`, // w: 1200px, h: 630px
//   images: [
//     {
//         url: `${url}/src-1200x630.png`,
//         width: 1200,
//         height: 630,
//     },
//     {
//         url: `${url}/src-1024x512.png`,
//         width: 1024,
//         height: 512,
//     },
//     {
//         url: `${url}/src-512x512.png`,
//         width: 512,
//         height: 512,
//     },
//   ]
};
