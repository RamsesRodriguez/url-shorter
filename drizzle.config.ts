import type { Config } from "drizzle-kit";

const dbConfig = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
};

export default {
  schema: "./src/db/schema/index.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: `mysql://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/url-shorter?ssl={"rejectUnauthorized":true}`,
  },
  verbose: true,
  strict: true,
  out: "./src/db/migrations",
} satisfies Config;
