import { Router } from "express";
import { db, siteContentTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/content/:key", async (req, res) => {
  const { key } = req.params;
  try {
    const [row] = await db.select().from(siteContentTable).where(eq(siteContentTable.key, key));
    if (!row) { res.status(404).json({ error: "Not found" }); return; }
    res.json({ key: row.key, value: row.value });
  } catch { res.status(500).json({ error: "Server error" }); }
});

router.get("/content", requireAuth, async (_req, res) => {
  try {
    const rows = await db.select().from(siteContentTable);
    res.json(rows);
  } catch { res.status(500).json({ error: "Server error" }); }
});

router.put("/content/:key", requireAuth, async (req, res) => {
  const { key } = req.params;
  const { value } = req.body as { value: unknown };
  if (value === undefined) { res.status(400).json({ error: "value required" }); return; }
  try {
    await db
      .insert(siteContentTable)
      .values({ key, value })
      .onConflictDoUpdate({
        target: siteContentTable.key,
        set: { value, updatedAt: new Date() },
      });
    res.json({ ok: true });
  } catch { res.status(500).json({ error: "Server error" }); }
});

export default router;
