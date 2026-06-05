---
name: Workflow port configuration
description: Port assignments and required env vars for each service workflow
---

## Port assignments (from artifact.toml)
- Website (american-book-founders): PORT=18482, BASE_PATH=/
- Admin Dashboard: PORT=23744, BASE_PATH=/admin/
- API Server: PORT=8080

## Required workflow commands
```
PORT=8080 pnpm --filter @workspace/api-server run dev
PORT=18482 BASE_PATH=/ pnpm --filter @workspace/american-book-founders run dev
PORT=23744 BASE_PATH=/admin/ pnpm --filter @workspace/admin run dev
```

## Known issue (fixed)
The american-book-founders vite.config.ts originally had a hardcoded `port: 3000` and no PORT env var reading. It was fixed to read PORT env (defaulting to 18482) and to use BASE_PATH env (defaulting to "/").

**Why:** The artifact.toml assigns port 18482 to the website, so workflows must pass PORT=18482 or the preview won't resolve correctly.
