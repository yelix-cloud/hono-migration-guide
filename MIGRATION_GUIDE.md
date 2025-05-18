# Migration from Hono to Yelix

## Hono

```ts
import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hello from Hono!"));

export default app;
```

## Hono Yelix Abstractor

```ts
import { YelixHono } from "jsr:@yelix/hono";
const app = new YelixHono();

app.get("/", (c) => c.text("Hello from Yelix Hono Abstractor!"));

export default app;
```

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
import { z } from "zod";

const app = new YelixHono();

// Global logger middleware
app.use("*", async (_c, next) => {
  console.log(`Request: ${_c.req.method} ${_c.req.url}`);
  await next();
});

app.get("/", (c) => c.text("Hello from Yelix Hono Abstractor!"));
```
