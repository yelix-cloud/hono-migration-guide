import { Context } from "hono";
import { generateShortCode } from "../utils.ts";
import type { Store } from "../store/storage.ts";

class URLShortenerHandler {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  shortenURL(c: Context): Response {
    const { url } = c.req.valid("json" as never);
    if (!url) {
      return c.json({ error: "URL is required" }, 400);
    }
    const shortCode = generateShortCode();
    this.store.set(shortCode, url);
    return c.json({ shortCode });
  }

  getURLs(c: Context): Response {
    const urls = Array.from(this.store.entries()).map(([shortCode, url]) => ({
      shortCode,
      url,
    }));
    return c.json(urls);
  }
}

export default URLShortenerHandler;
export { URLShortenerHandler };
