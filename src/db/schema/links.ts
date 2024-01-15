import { timestamp, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from ".";

export const links = mysqlTable("links", {
  slug: varchar("slug", { length: 32 }).primaryKey(),
  creatorId: varchar("creatorId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  originalLink: varchar("originalLink", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).onUpdateNow(),
});
