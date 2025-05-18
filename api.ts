import { Hono } from "hono";
import type { Context } from "hono";
// import { bearerAuth } from "hono/bearer-auth";
import { urlStore, userStore } from "./store/store.ts";
import URLShortenerHandler from "./handler/url-shortener.ts";
import AuthHandler from "./handler/auth.ts";
import v from "./validations/validator.ts";

const urlHandler = new URLShortenerHandler(urlStore);
const authHandler = new AuthHandler(userStore);
const api = new Hono();

// const token = Deno.env.get("TOKEN") || "";
// api.use("/*", bearerAuth({ token }));

api.post(
  "/shorten",
  v.postUrlShortenValidator,
  (c: Context) => urlHandler.shortenURL(c),
);
api.get("/urls", (c: Context) => urlHandler.getURLs(c));

api.get("/login", v.loginValidator, authHandler.login);
api.get("/register", v.registerValidator, authHandler.register);
api.get("/logout", v.logoutValidator, authHandler.logout);

export default api;
