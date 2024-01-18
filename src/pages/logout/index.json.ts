import { auth } from "@/lib/lucia";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const authRequest = auth.handleRequest(context);
  // check if user is authenticated
  const session = await authRequest.validate();
  if (!session) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  // make sure to invalidate the current session!
  await auth.invalidateSession(session.sessionId);
  // create blank session cookie
  const sessionCookie = auth.createSessionCookie(null);
  return new Response(null, {
    headers: {
      Location: "/", // redirect to home page
      "Set-Cookie": sessionCookie.serialize(), // delete session cookie
    },
    status: 302,
  });
}
