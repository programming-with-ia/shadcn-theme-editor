import { Button } from "@/components/ui/button";

export default function ButtonsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>Primary</Button>
      <Button className="text-primary bg-primary-foreground hover:bg-primary-foreground/80">
        R Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button
        variant="default"
        className="text-accent-foreground bg-accent hover:hover:bg-accent/80"
      >
        Accent
      </Button>
      <Button
        variant="default"
        className="text-muted-foreground bg-muted hover:hover:bg-muted/80"
      >
        Muted
      </Button>
      <Button
        variant="default"
        className="text-popover-foreground bg-popover hover:hover:bg-popover/80"
      >
        Popover
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
