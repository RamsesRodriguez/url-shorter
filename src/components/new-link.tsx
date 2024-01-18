import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function NewLink({ variant, className, ...props }: ButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={className} {...props}>
          New Link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" method="POST">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="originalLink" className="text-right">
              Original Link
            </Label>
            <Input id="originalLink" className="col-span-3" />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Shorten URL</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
