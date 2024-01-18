import { serializeCookie } from "lucia/utils";
import { githubAuth } from "@/lib/lucia";

export async function GET() {
  const [url, state] = await githubAuth.getAuthorizationUrl();
  console.log({ url, state });
  const stateCookie = serializeCookie("github_oauth_state", state, {
    httpOnly: true,
    secure: false, // `true` for production
    path: "/",
    maxAge: 60 * 60,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      "Set-Cookie": stateCookie,
    },
  });
}
