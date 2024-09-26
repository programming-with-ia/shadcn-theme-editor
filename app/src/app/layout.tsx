import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import ShadcnThemeEditor from "shadcn-theme-editor";
import ThemeEditor from "@/components/theme-editor";
import GithubCorner from "@/components/github-corner";
import { joinPaths } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";
import { TbMail } from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#030014" }],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  appleWebApp: { title: siteConfig.name, statusBarStyle: "default" },
  abstract: siteConfig.description,
  archives: siteConfig.url,
  category: "Developer Tools",
  classification: "",
  keywords: siteConfig.keywords,
  authors: { url: "https://oimmi.com", name: "immi" },
  twitter: {
    creator: "@o_immi",
    creatorId: "1813232551131291651",
    description: siteConfig.description,
    title: siteConfig.name,
    card: "summary_large_image",
    images: siteConfig.images.map(img=>img.url),
  },
  creator: "immi",
  publisher: siteConfig.name,
  alternates: {
    canonical: { url: siteConfig.url, title: "Home" },
    languages: { en: [{ url: siteConfig.url, title: "Home" }] },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: siteConfig.images,
  },
  // icons: {
  //   icon: [
  //     {
  //       url: joinPaths(siteConfig.url, "artgalestudio-logo.ico"),
  //       sizes: "16x16 32x32 48x48 192x192 256x256",
  //     },
  //     joinPaths(siteConfig.url, "/favicon.ico"),
  //   ],
  // },
};

const SOCIALS: {
  title: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}[] = [
  {
    title: "Github",
    url: "https://github.com/programming-with-ia",
    icon: RiGithubFill,
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/o_immi",
    icon: RiTwitterXLine,
  },
  {
    title: "GMail",
    url: "mailto:" + "iafullprogrammer@gmail.com",
    icon: TbMail,
  },
];


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="customScrollBar">
      <body className={clsx("gradient_body", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="h-20">

          </header>
          <main className="w-full">
            <div className="w-full flex flex-col justify-between md:px-8 px-4 lg:px-12 min-h-screen max-w-[1700px] mx-auto">{children}</div>
            <ShadcnThemeEditor /> {/* for applying theme from localstorage */}
            <ThemeEditor />
          </main>
          <GithubCorner />
          <footer className="py-8 flex md:flex-row flex-col items-center md:px-8 px-4 lg:px-12 max-w-[1700px] mx-auto bg-accent text-accent-foreground mt-10 md:mt-16">
              {/* <Container> */}
              <p>Built with <span className="text-destructive-foreground font-extrabold text-red-500" title="love" aria-label="love" style={{fontFamily: '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'}}>♥️</span> by <a href='https://github.com/programming-with-ia' className="underline underline-offset-1" target="_blank">immi</a></p>
              <div className="flex items-center mt-4 sm:mt-0 md:ml-auto">
                {SOCIALS.map((social, idx) => (
                  <a
                    className="p-2 rounded-md hover:bg-background hover:text-foreground"
                    href={social.url}
                    title={social.title}
                    aria-label={social.title}
                    key={idx}
                    target="_blank"
                  >
                    {<social.icon className="size-5" />}
                  </a>
                ))}
              </div>
              {/* </Container> */}
            </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
