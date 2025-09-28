import { cn } from "@/lib/utils";

const commons = {
  main: "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ghostStyle:
    "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
};

const iconBtnClassName = "size-8 justify-center";
const ghostBtnClassName = "px-4 py-2 has-[>svg]:px-3";

export function Button({
  size = "default",
  className,
  variant,
  ...p
}: React.ComponentProps<"button"> & {
  variant: "ghost";
  size?: "default" | "icon";
}) {
  return (
    <button
      className={cn(
        commons.main,
        variant === "ghost" && commons.ghostStyle,
        size === "icon" ? iconBtnClassName : ghostBtnClassName,
        className,
      )}
      {...p}
    />
  );
}
