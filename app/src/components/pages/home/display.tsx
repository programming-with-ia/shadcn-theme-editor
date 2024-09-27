import { Button } from "@/components/ui/button";
import Heading, { getHeadingSize } from "@/components/ui/heading";
import { IoLogoGithub } from "react-icons/io";
import { CgNpm } from "react-icons/cg";
import DisplayContainer from "@/components/display-container";
import { siteConfig } from "@/lib/site-config";
import { ChevronRight } from "lucide-react";

function Display() {
  return (
    <DisplayContainer className="text-center gap-1 p-8 md:p-16 lg:p-24">
      <Heading size="xl" className={"primaryText font-bold"}>
        {siteConfig.name}
      </Heading>
      <span className={getHeadingSize("xs")}>
        Manage Shadcn theme colors with an intuitive UI.
      </span>
      <p className="mt-3 text-muted-foreground">
        Shadcn Theme Editor is a user-friendly component designed to simplify
        the process of managing and customizing theme colors in Shadcn-based
        projects
      </p>
      <div className="mt-10 flex flex-wrap md:gap-x-1 gap-3 justify-center">
          <div className="absolute top-2 right-2 hidden md:inline-flex gap-2 opacity-0 transition-opacity group-hover:opacity-70 hover:!opacity-100">

          <Button asChild className="rounded-xl" variant={"outline"} size={"icon"}>
            <a target="_blank" href={siteConfig.github}>
              <IoLogoGithub size={20} />
            </a>
          </Button>
          <Button asChild className="rounded-xl" variant={"outline"} size={"icon"}>
            <a target="_blank" href={siteConfig.npm}>
              <CgNpm size={20} />
            </a>
          </Button>
          </div>
        <Button asChild className="w-32 gap-1 rounded-xl group/docs" variant={"default"}>
          <a target="_blank" href={siteConfig.docs}>
            Get Started
            <ChevronRight className="group-hover/docs:translate-x-2 transition" size={22} />
          </a>
        </Button>
      </div>
    </DisplayContainer>
  );
}

export default Display;
