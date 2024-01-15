import type { Config } from "drizzle-kit";

const dbCredentials = {
  uri: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/url-shorter?ssl={"rejectUnauthorized":true}`,
};

export default {
  schema: "./src/db/schema/index.ts",
  driver: "mysql2",
  dbCredentials,
  verbose: true,
  strict: true,
  out: "./src/db/migrations",
} satisfies Config;
