import { cn } from "@/lib/utils";
import type { ExoticComponent } from "react";
import React from "react";
import Badges from "./badges";
import Buttons from "./buttons";
import CookieSettings from "./cookie-settings";
import CreateAccount from "./create-account";
import DeleteAccount from "./delete-account";
import Notifications from "./notifications";
import TextDemo from "./text";

const cards: {
  Compo: (() => React.ReactNode) | ExoticComponent | (() => React.JSX.Element);
  cn?: string;
}[] = [
  { Compo: Badges },
  { Compo: Buttons },
  { Compo: TextDemo },
  { Compo: CookieSettings },
  { Compo: CreateAccount },
  { Compo: DeleteAccount },
  { Compo: Notifications },
];

export default function Cards() {
  return (
    <section className="p-12 md:py-16 lg:py-20">
      <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
        See your <span className="text-primary">components</span> with{" "}
        <span className="text-primary font-extrabold italic">
          custom colors
        </span>
      </h2>
      <p className="text-muted-foreground mt-2 text-center">
        Experiment with different color values and instantly preview how
        buttons, cards, and other components adapt.
      </p>
      <div className="mt-12 columns-sm gap-4 space-y-4 [&>*]:break-inside-avoid">
        {cards.map((c, idx) => (
          <DemoContainer key={idx} className={c.cn}>
            <c.Compo />
          </DemoContainer>
        ))}
      </div>
    </section>
  );
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}
