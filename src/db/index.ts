import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { config } from "@/config";

const options = (() => {
  switch (config.env.DATABASE_CONNECTION_TYPE) {
    case "local":
      return {
        url: "file:local.sqlite",
      };
    case "remote":
      return {
        url: config.env.DATABASE_URL,
        authToken: config.env.DATABASE_TOKEN!,
      };
    case "local-replica":
      return {
        url: "file:local.sqlite",
        syncUrl: config.env.DATABASE_URL,
        authToken: config.env.DATABASE_TOKEN!,
      };
  }
})();

export const client = createClient(options);

if (config.env.DATABASE_CONNECTION_TYPE !== "remote") await client.sync();

export const db = drizzle(client);
