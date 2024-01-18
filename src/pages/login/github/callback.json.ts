import { parseCookie } from "lucia/utils";
import { OAuthRequestError } from "@lucia-auth/oauth";

import { auth, githubAuth } from "@/lib/lucia";

export async function GET({ request }: { request: Request }) {
  const cookies = parseCookie(request.headers.get("Cookie") ?? "");
  const storedState = cookies.github_oauth_state;
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  // validate state
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }
  try {
    const { getExistingUser, githubUser, createUser } =
      await githubAuth.validateCallback(code);

    console.log({ githubUser });
    const getUser = async () => {
      const existingUser = await getExistingUser();
      if (existingUser) return existingUser;
      const user = await createUser({
        attributes: {
          name: githubUser.name || githubUser.login,
          email: githubUser.email ?? null,
          avatar: githubUser.avatar_url,
        },
      });
      return user;
    };

    const user = await getUser();
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const sessionCookie = auth.createSessionCookie(session);
    // redirect to profile page
    return new Response(null, {
      headers: {
        Location: "/",
        "Set-Cookie": sessionCookie.serialize(), // store session cookie
      },
      status: 302,
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}
