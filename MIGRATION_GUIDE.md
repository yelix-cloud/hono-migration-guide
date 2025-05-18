# Migration from Hono to YelixHono

## Imports

```diff
-import { Hono } from "hono";
-import { zValidator } from "@hono/zod-validator";
+import { YelixHono } from "jsr:@yelix/hono";
+import { zValidatorYelix } from "jsr:@yelix/zod-validator";
```

## App Initialization

```diff
-app = new Hono();
+app = new YelixHono();
```

## Zod Validator

You can keep using the same Zod objects/schemas. We are highly recommending to
separate the Zod schemas into a different file to keep them clean and reusable.

```diff
-import { zValidator } from "@hono/zod-validator";
+import { zValidatorYelix } from "jsr:@yelix/zod-validator";
```

## Example Application

```ts
import { YelixHono } from "jsr:@yelix/hono";
import { zValidatorYelix } from "jsr:@yelix/zod-validator";
import { z } from "npm:zod";

const app = new YelixHono();

// Global logger middleware
app.use("*", async (_c, next) => {
  console.log(`Request: ${_c.req.method} ${_c.req.url}`);
  await next();
});

app.get(
  "/hello",
  zValidatorYelix(
    "query",
    z.object({
      name: z.string().min(2),
    }),
  ),
  (c) => {
    const { name } = c.req.valid("query" as never);
    return c.text("Hello " + name, 200);
  },
);

Deno.serve(app.fetch);
```

## Conclusion

This migration guide should help you to migrate from Hono to YelixHono. If you have any questions or need further assistance, feel free to ask questions in the [GitHub Discussions](https://github.com/orgs/yelix-cloud/discussions).
