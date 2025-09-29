import { siteConfig } from "@/lib/site-config";
import "@/styles/globals.css";
import clsx from "clsx";

import { type Metadata, type Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ShadcnThemeEditor from "shadcn-theme-editor";
import GithubCorner from "@/components/github-corner";
import DisplayContainer from "@/components/display-container";

import {
  SiGithub,
  SiGmail,
  SiX,
  type IconType,
} from "@icons-pack/react-simple-icons";

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
    images: siteConfig.images.map((img) => img.url),
  },
  creator: "immi",
  publisher: siteConfig.name,
  alternates: {
    canonical: { url: siteConfig.url, title: "Home" },
    languages: { en: [{ url: siteConfig.url, title: "Home" }] },
    types: {
      Home: siteConfig.url,
      "NPM Package": siteConfig.npm,
      "GitHub Repository": siteConfig.github,
      Docs: siteConfig.docs,
    },
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
  icon:
    | ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element)
    | IconType;
}[] = [
  {
    title: "Github",
    url: siteConfig.github,
    icon: SiGithub,
  },
  {
    title: "X (Twitter)",
    url: siteConfig.twitter,
    icon: SiX,
  },
  {
    title: "GMail",
    url: "mailto:" + siteConfig.email,
    icon: SiGmail,
  },
];

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={clsx(inter.variable)}>
      <body className="gradient_body">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ShadcnThemeEditor
            side="left"
            customColors={{ "--custom-color": "Custom Color" }}
          />
          <GithubCorner />
          <DisplayContainer
            As="footer"
            waveColors={{ c1: "fill-accent" }}
            bottom
            className="bg-accent text-accent-foreground mx-auto flex max-w-[1700px] flex-col items-center px-4 pb-8 pt-1 md:flex-row md:px-8 lg:px-12"
            containerClassName="mt-10 md:mt-16"
          >
            <p>
              Built with{" "}
              <span
                className="text-destructive-foreground font-extrabold text-red-500"
                title="love"
                aria-label="love"
                style={{
                  fontFamily:
                    '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                }}
              >
                ♥️
              </span>{" "}
              by{" "}
              <a
                href="https://github.com/programming-with-ia"
                className="underline underline-offset-1"
                target="_blank"
              >
                immi
              </a>
            </p>
            <div className="mt-4 flex items-center sm:mt-0 md:ml-auto">
              {SOCIALS.map((social, idx) => (
                <a
                  className="hover:bg-background hover:text-foreground rounded-md p-2"
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
          </DisplayContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
