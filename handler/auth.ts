import { Context } from "hono";
import type { Store } from "../store/storage.ts";

class AuthHandler {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  login(c: Context): Response {
    const { username, password } = c.req.valid("json" as never);
    return c.json({ username, password });
  }

  register(c: Context): Response {
    return c.json({});
  }

  logout(c: Context): Response {
    return c.json({});
  }
}

export default AuthHandler;
export { AuthHandler };
