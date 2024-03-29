import { useEffect, useState } from "react";
import { LogOut, LogIn, Plus, LayoutDashboard } from "lucide-react";
import type { Session } from "lucia";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { NewLink } from "../new-link";

export const CommandHeader = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Settings">
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <NewLink variant="ghost" className="p-0 h-auto" />
              <CommandShortcut>⇧⌘+L</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <a href="/dashboard">Dashboard</a>
              <CommandShortcut>⇧⌘D</CommandShortcut>
            </CommandItem>
            {session ? (
              <CommandItem>
                <a href="/logout.json">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        class: "p-0 h-auto",
                      })
                    )}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </div>
                </a>
                <CommandShortcut>⇧⌘Q</CommandShortcut>
              </CommandItem>
            ) : (
              <CommandItem>
                <a href="/login/github.json">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        class: "p-0 h-auto",
                      })
                    )}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Log in
                  </div>
                </a>
                <CommandShortcut>⇧⌘S</CommandShortcut>
              </CommandItem>
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
