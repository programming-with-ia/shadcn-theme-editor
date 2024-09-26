import { Button } from "@/components/ui/button";
import Heading, { getHeadingSize } from "@/components/ui/heading";
import { IoLogoGithub } from "react-icons/io";
import { CgNpm } from "react-icons/cg";
import DisplayContainer from "@/components/display-container";
import { siteConfig } from "@/lib/site-config";

function Display() {
  return (
    <DisplayContainer className="text-center gap-1">
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
      <div className="mt-10 flex flex-wrap md:gap-x-6 gap-3 justify-center">
        <Button asChild className="w-32 gap-1 rounded-xl" variant={"default"}>
          <a target="_blank" href={siteConfig.github}>
            <IoLogoGithub size={22} /> Github
          </a>
        </Button>
        <Button asChild className="w-32 gap-1 rounded-xl" variant={"default"}>
          <a target="_blank" href={siteConfig.npm}>
            <CgNpm size={22} />
            Npm
          </a>
        </Button>
      </div>
    </DisplayContainer>
  );
}

export default Display;
