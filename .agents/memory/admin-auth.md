---
name: Admin dashboard auth
description: JWT-based admin auth for the admin dashboard at /admin; seeded once via /api/admin/seed
---

Admin login uses bcryptjs + jsonwebtoken (stored in SESSION_SECRET env var, 7-day expiry).

**Rule:** First admin is created via `POST /api/admin/seed` with body `{ email, password, secret: <SESSION_SECRET> }`. Endpoint returns 409 if admin already exists (one-time only).

**How to apply:** If user needs to reset admin password, use executeSql to UPDATE admins SET password_hash = '<bcrypt>' WHERE email = '...'.

Admin credentials seeded: admin@americanbookfounders.com / Admin@2024!
Token stored in localStorage as `admin_token`.
