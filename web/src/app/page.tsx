import { Button } from "@/components/ui/button";
import DisplayContainer from "@/components/display-container";
import { siteConfig } from "@/lib/site-config";
import { ChevronRight } from "lucide-react";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { PaletteIcon } from "shadcn-theme-editor";
import Cards from "@/cards";
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen mt-20 max-w-[1700px] flex-col justify-between px-4 md:px-8 lg:px-12">
      <DisplayContainer
        As="section"
        className="gap-1 p-8 text-center md:p-16 lg:p-24"
      >
        <h1
          className={
            "heading primaryText text-center text-4xl font-bold sm:text-5xl lg:text-6xl"
          }
        >
          {siteConfig.name}
        </h1>
        <span className={"text-lg sm:text-xl lg:text-2xl"}>
          Manage Shadcn theme colors with an intuitive UI.
        </span>
        <p className="text-muted-foreground mt-3">
          Shadcn Theme Editor is a user-friendly component designed to simplify
          the process of managing and customizing theme colors in Shadcn-based
          projects
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="group/btn w-32 gap-1"
            variant={"secondary"}
          >
            <a target="_blank" href={siteConfig.docs}>
              Get Started
              <ChevronRight
                className="transition group-hover/btn:translate-x-2"
                size={22}
              />
            </a>
          </Button>
          <Button variant={"default"}>
            <PaletteIcon />
            Start Customizing
          </Button>
          <div className="-z-1 inset-0 flex justify-between gap-3 transition-opacity group-hover:opacity-100 lg:absolute lg:-mx-12 lg:opacity-0">
            <Button
              asChild
              className="opacity-70 hover:opacity-100"
              variant={"outline"}
              size={"icon"}
            >
              <a target="_blank" href={siteConfig.github}>
                <SiGithub size={20} />
              </a>
            </Button>
            <Button
              asChild
              className="opacity-70 hover:opacity-100"
              variant={"outline"}
              size={"icon"}
            >
              <a target="_blank" href={siteConfig.npm}>
                <SiNpm size={20} />
              </a>
            </Button>
          </div>
        </div>
      </DisplayContainer>
      <Cards />
    </main>
  );
}
