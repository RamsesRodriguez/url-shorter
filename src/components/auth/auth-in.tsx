import type { BuiltInProviderType } from "@auth/core/providers";
import { signIn } from "auth-astro/client";
import type {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
} from "next-auth/react";

import { Button, type ButtonProps } from "@/components/ui/button";

interface AuthInProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  provider?: LiteralUnion<BuiltInProviderType, string>;
  options?: SignInOptions;
  authParams?: SignInAuthorizationParams;
}

export function AuthIn({
  provider,
  options,
  authParams,
  ...props
}: AuthInProps) {
  const handleClick = () => {
    signIn(provider, options, authParams);
  };

  return <Button onClick={handleClick} {...props} />;
}
