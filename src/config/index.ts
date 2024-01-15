import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  server: {
    DATABASE_HOST: z.string().min(1),
    DATABASE_USERNAME: z.string().min(1),
    DATABASE_PASSWORD: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
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
