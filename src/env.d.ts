/// <reference types="astro/client" />
/// <reference types="lucia" />

declare namespace Lucia {
  type Auth = import("./lib/lucia").Auth;
  type DatabaseUserAttributes = {
    name: string;
    email: string | null;
    avatar: string;
  };
  type DatabaseSessionAttributes = {};
}

declare namespace App {
  interface Locals {
    auth: import("lucia").AuthRequest;
  }
}
