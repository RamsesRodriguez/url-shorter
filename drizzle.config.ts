import type { Config } from "drizzle-kit";

const dbCredentials = {
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
};

export default {
  schema: "./src/db/schema/index.ts",
  driver: "turso",
  dbCredentials,
  verbose: true,
  strict: true,
  tablesFilter: ["!libsql_wasm_func_table"],
  out: "./src/db/migrations",
} satisfies Config;
