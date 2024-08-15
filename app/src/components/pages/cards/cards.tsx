// Big shoutout to https://x.com/shadcn/ for creating this component or is the inspiration for this component
"use client";
import { BadgeDemo } from "@/components/badge";
import { ButtonsDemo } from "@/components/buttons";
import { CommandDemo } from "@/components/command";
import { Chat } from "@/components/pages/cards/chat";
import { CookieSettings } from "@/components/pages/cards/cookie-settings";
import { CreateAccount } from "@/components/pages/cards/create-account";
import { CreateProject } from "@/components/pages/cards/create-project";
import { DeleteAccount } from "@/components/pages/cards/delete-account";
import { Invoices } from "@/components/pages/cards/invoices";
import { Notifications } from "@/components/pages/cards/notifications";
import { PaymentMethod } from "@/components/pages/cards/payment-method";
import { ReportIssue } from "@/components/pages/cards/report-issue";
import { ShareDocument } from "@/components/pages/cards/share-document";
import { PopoverDemo } from "@/components/popover";
import { TabsDemo } from "@/components/tabs";
import { cn } from "@/lib/utils";

export const Cards = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-screen-md flex-col gap-2 pb-8 text-center text-sm"></div>
      <div className="items-start gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-6">
          <DemoContainer>
            <Notifications />
          </DemoContainer>
          <DemoContainer>
            <ButtonsDemo />
          </DemoContainer>
          <DemoContainer>
            <CookieSettings />
          </DemoContainer>
          <DemoContainer>
            <DeleteAccount />
          </DemoContainer>
          <DemoContainer>
            <CreateAccount />
          </DemoContainer>
        </div>

        <div className="flex flex-col gap-6">
          <DemoContainer>
            <ShareDocument />
          </DemoContainer>
          {/* <DemoContainer>
            <CommandDemo />
          </DemoContainer> */}
          <DemoContainer>
            <ReportIssue />
          </DemoContainer>
          <DemoContainer>
            <CreateProject />
          </DemoContainer>
          <DemoContainer className="py-12">
            <PopoverDemo />
          </DemoContainer>
        </div>
        <div className="flex flex-col gap-6">
          <DemoContainer>
            <Chat />
          </DemoContainer>
          <DemoContainer>
            <BadgeDemo />
          </DemoContainer>
          <DemoContainer>
            <TabsDemo />
          </DemoContainer>
          <DemoContainer>
            <PaymentMethod />
          </DemoContainer>
          <DemoContainer>
            <Invoices />
          </DemoContainer>
        </div>
      </div>
    </div>
  );
};

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
