import { libsql } from "@lucia-auth/adapter-sqlite";
import { github } from "@lucia-auth/oauth/providers";
import { lucia } from "lucia";
import { astro } from "lucia/middleware";

import { config } from "@/config";
import { client } from "../db";

// expect error (see next section)
export const auth = lucia({
  env: import.meta.env.DEV ? "DEV" : "PROD",
  middleware: astro(),
  adapter: libsql(client, {
    user: "user",
    key: "user_key",
    session: "user_session",
  }),
  getUserAttributes: (data) => {
    return {
      name: data.name,
      avatar: data.avatar,
      email: data.email,
      id: data.id,
    };
  },
});

export type Auth = typeof auth;

export const githubAuth = github(auth, {
  clientId: config.env.GITHUB_CLIENT_ID,
  clientSecret: config.env.GITHUB_CLIENT_SECRET,
});
