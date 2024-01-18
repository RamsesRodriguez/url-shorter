import { eq } from "drizzle-orm";
import { links } from "@/db/schema";
import { db } from "@/db";

export async function GET({
  params,
  redirect,
}: {
  params: { slug: string };
  redirect: (url: string, status: number) => void;
}) {
  if (!params?.slug) return redirect("/", 307);

  try {
    const [result] = await db
      .select({
        originalLink: links.originalLink,
      })
      .from(links)
      .where(eq(links.slug, params.slug));

    if (result) return redirect(result.originalLink, 307);
  } catch (error) {
    return redirect("/", 307);
  }
}
