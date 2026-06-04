import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { desc } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";

const router = Router();

/* POST /api/leads — public, called from forms on the main site */
router.post("/leads", async (req, res) => {
  const { name, email, phone, message, source } = req.body as {
    name?: string; email?: string; phone?: string; message?: string; source?: string;
  };
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  const [lead] = await db.insert(leadsTable).values({ name, email, phone, message, source: source ?? "website" }).returning();
  res.status(201).json({ ok: true, id: lead.id });
});

/* GET /api/leads — admin only */
router.get("/leads", requireAuth, async (_req, res) => {
  const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
  res.json(leads);
});

/* PATCH /api/leads/:id/status — admin only */
router.patch("/leads/:id/status", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body as { status?: string };
  if (!status) { res.status(400).json({ error: "status required" }); return; }
  await db.update(leadsTable).set({ status }).where(eq(leadsTable.id, id));
  res.json({ ok: true });
});

/* DELETE /api/leads/:id — admin only */
router.delete("/leads/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await db.delete(leadsTable).where(eq(leadsTable.id, id));
  res.json({ ok: true });
});

export default router;
