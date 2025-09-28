import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function CookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {[
          {
            id: "necessary",
            title: "Strictly Necessary",
            description:
              "These cookies are essential in order to use the website and use its features.",
            defaultChecked: true,
          },
          {
            id: "functional",
            title: "Functional Cookies",
            description:
              "These cookies allow the website to provide personalized functionality.",
            defaultChecked: false,
          },
          {
            id: "performance",
            title: "Performance Cookies",
            description:
              "These cookies help to improve the performance of the website.",
            defaultChecked: false,
          },
        ].map((cookie) => (
          <div
            key={cookie.id}
            className="flex items-center justify-between space-x-2"
          >
            <Label
              htmlFor={cookie.id}
              className="flex flex-col items-start space-y-1"
            >
              <span>{cookie.title}</span>
              <span className="text-muted-foreground font-normal leading-snug">
                {cookie.description}
              </span>
            </Label>
            <Switch id={cookie.id} defaultChecked={cookie.defaultChecked} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  );
}
