import { Context, Hono } from "hono";
import api from "./api.ts";
import { urlStore } from "./store/store.ts";
import URLRedirectHandler from "./handler/redirect.ts";

const r = new URLRedirectHandler(urlStore);
const app = new Hono();

// Main routes
app.route("/api", api);

app.get("/:shortCode", (c) => r.handleRedirect(c));

app.get("/", (c: Context) => {
  return c.text("URL Shortener API - Use /api/shorten to create short URLs");
});

Deno.serve(app.fetch);
