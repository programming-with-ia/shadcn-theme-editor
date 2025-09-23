import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DeleteAccount() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          This will remove your account from the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert variant="destructive" className="block">
          <p className="text-sm font-medium">
            Please be absolutely sure you want to delete your account. You will
            not be able to recover your account after this.
          </p>
        </Alert>
        <form className="flex flex-col gap-8 py-4">
          <div>
            <Label htmlFor="delete-confirmation">
              Please type{" "}
              <Badge variant="outline" className="font-mono">
                delete my account
              </Badge>{" "}
              to confirm.
            </Label>
            <Input
              id="delete-confirmation"
              placeholder="Enter confirmation here..."
              className="mt-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" variant="destructive">
              Delete Account
            </Button>
          </div>
          <p className="text-muted-foreground text-right text-xs">
            Don&apos;t worry, nothing will happen if you click the button above.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
