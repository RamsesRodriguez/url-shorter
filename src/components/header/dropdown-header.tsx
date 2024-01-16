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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthOut } from "../auth";

export const DropdownHeader = ({ session }: { session: Session }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="rounded-full p-0 m-0 h-8">
        {session.user?.image && (
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user.image} alt="User's avatar" />
            <AvatarFallback>PC</AvatarFallback>
          </Avatar>
        )}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <Plus className="mr-2 h-4 w-4" />
        <span>New Link</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <span>Dashboard</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <AuthOut variant="ghost" className="p-0 h-auto">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </AuthOut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
