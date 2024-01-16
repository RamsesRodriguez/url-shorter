import { LogOut, Plus, LayoutDashboard } from "lucide-react";
import type { Session } from "@auth/core/types";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const DropdownHeader = ({
  session,
  signOut,
}: {
  session: Session;
  signOut: JSX.Element;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 justify-center rounded-[0.5rem] text-sm font-normal"
        )}
      >
        {session.user?.image && (
          <Avatar className="h-6 w-6">
            <AvatarImage src={session.user.image} alt="User's avatar" />
          </Avatar>
        )}
        {session.user?.name}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <Plus className="mr-2 h-4 w-4" />
        <span>New Link</span>
        <DropdownMenuShortcut>⇧⌘+L</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <span>Dashboard</span>
        <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        {signOut}
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
