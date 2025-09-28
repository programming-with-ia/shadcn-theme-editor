import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const textVariants = [
  { name: "Foreground", class: "text-foreground" },
  { name: "Primary", class: "text-primary" },
  { name: "Primary-Foreground", class: "text-primary-foreground" },
  { name: "Secondary-Foreground", class: "text-secondary-foreground" },
  { name: "Popover-Foreground", class: "text-popover-foreground" },
  { name: "Muted-Foreground", class: "text-muted-foreground" },
  { name: "Accent-Foreground", class: "text-accent-foreground" },
  { name: "Destructive", class: "text-destructive" },
];

export default function TextDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Text Styles Preview</CardTitle>
        <CardDescription>
          Quickly see how different Tailwind text color utilities look in this
          theme.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 text-sm">
        {textVariants.map((v) => (
          <div
            key={v.class}
            className="flex items-center justify-between gap-2 rounded-lg border p-2"
          >
            <span className={v.class}>{v.name}</span>
            <span className="text-muted-foreground text-sm text-end">{v.class}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
