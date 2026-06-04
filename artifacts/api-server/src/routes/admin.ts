import { Router } from "express";
import bcrypt from "bcryptjs";
import { db, adminsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { signToken, requireAuth } from "../middleware/auth";

const router = Router();

/* POST /api/admin/login */
router.post("/admin/login", async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" });
    return;
  }
  const [admin] = await db.select().from(adminsTable).where(eq(adminsTable.email, email)).limit(1);
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  res.json({ token: signToken({ id: admin.id, email: admin.email }) });
});

/* POST /api/admin/seed — create first admin (one-time) */
router.post("/admin/seed", async (req, res) => {
  const { email, password, secret } = req.body as { email?: string; password?: string; secret?: string };
  if (secret !== (process.env.SESSION_SECRET ?? "dev-secret-change-me")) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
  const existing = await db.select().from(adminsTable).limit(1);
  if (existing.length > 0) {
    res.status(409).json({ error: "Admin already exists" });
    return;
  }
  const passwordHash = await bcrypt.hash(password ?? "admin123", 12);
  const [admin] = await db.insert(adminsTable).values({ email: email ?? "admin@site.com", passwordHash }).returning();
  res.json({ ok: true, email: admin.email });
});

/* GET /api/admin/me */
router.get("/admin/me", requireAuth, (req, res) => {
  res.json({ admin: (req as Request & { admin: unknown }).admin });
});

export default router;

import type { Request } from "express";
