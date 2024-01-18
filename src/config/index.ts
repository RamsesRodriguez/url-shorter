import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_CONNECTION_TYPE: z.enum(["local", "remote", "local-replica"]),
    DATABASE_URL: z.string().min(1),
    DATABASE_TOKEN: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    AUTH_TRUST_HOST: z.coerce.boolean().nullable(),
  },
  clientPrefix: "PUBLIC_",
  client: {},
  runtimeEnv: import.meta.env,
});

const args = {
  // watch: process.argv.includes("--watch"),
  // liveReload: true,
};

export const config = {
  env,
  args,
};
