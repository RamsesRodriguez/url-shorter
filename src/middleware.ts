import { type MiddlewareHandler } from "astro";
import { auth } from "./auth";

export const onRequest: MiddlewareHandler = async (context, next) => {
  context.locals.auth = auth.handleRequest(context);
  return await next();
};
