import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from ".";

export const links = sqliteTable("links", {
  slug: text("slug").primaryKey(),
  creatorId: text("creatorId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  originalLink: text("originalLink", { length: 255 }).notNull(),
  description: text("description", { length: 255 }),
  updatedAt: integer("createdAt", { mode: "timestamp_ms" }).$defaultFn(
    () => new Date()
  ),
});
