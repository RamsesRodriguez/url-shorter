import { LogOut, Plus, LayoutDashboard } from "lucide-react";
import type { Session } from "lucia";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { NewLink } from "../new-link";

export const DropdownHeader = ({ session }: { session: Session }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="rounded-full p-0 m-0 h-8">
        {session.user?.avatar && (
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user.avatar} alt="User's avatar" />
            <AvatarFallback>PC</AvatarFallback>
          </Avatar>
        )}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <Plus className="mr-2 h-4 w-4" />
        <NewLink variant="ghost" className="p-0 h-auto" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <a href="/dashboard">Dashboard</a>
      </DropdownMenuItem>
      <DropdownMenuItem>
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
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
