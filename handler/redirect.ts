import { Context } from "hono";
import type { Store } from "../store/storage.ts";

class URLRedirectHandler {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  handleRedirect(c: Context): Response {
    const shortCode = c.req.valid("param" as never);
    const url = this.store.get(shortCode);

    if (!url) {
      return c.json({ error: "URL not found" }, 404);
    }

    return c.redirect(url);
  }
}

export default URLRedirectHandler;
export { URLRedirectHandler };
