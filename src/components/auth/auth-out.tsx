import { signOut } from "auth-astro/client";

import { Button, type ButtonProps } from "@/components/ui/button";

export function AuthOut({ ...props }: ButtonProps) {
  const handleClick = () => {
    signOut();
  };

  return <Button onClick={handleClick} {...props} />;
}
