import { Router } from "express";
import { db, chatMessagesTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";
import { requireAuth } from "../middleware/auth";

const router = Router();

/* POST /api/chat-messages — public, called from chat popup */
router.post("/chat-messages", async (req, res) => {
  const { sessionId, from, text } = req.body as { sessionId?: string; from?: string; text?: string };
  if (!sessionId || !from || !text) {
    res.status(400).json({ error: "sessionId, from, and text required" });
    return;
  }
  const [msg] = await db.insert(chatMessagesTable).values({ sessionId, from, text }).returning();
  res.status(201).json({ ok: true, id: msg.id });
});

/* GET /api/chat-messages — admin only, grouped by session */
router.get("/chat-messages", requireAuth, async (_req, res) => {
  const messages = await db.select().from(chatMessagesTable).orderBy(desc(chatMessagesTable.createdAt));
  res.json(messages);
});

/* GET /api/chat-messages/sessions — admin only */
router.get("/chat-messages/sessions", requireAuth, async (_req, res) => {
  const messages = await db.select().from(chatMessagesTable).orderBy(desc(chatMessagesTable.createdAt));
  const sessions: Record<string, typeof messages> = {};
  for (const msg of messages) {
    if (!sessions[msg.sessionId]) sessions[msg.sessionId] = [];
    sessions[msg.sessionId].push(msg);
  }
  const sessionList = Object.entries(sessions).map(([id, msgs]) => ({
    sessionId: id,
    messages: msgs,
    lastMessage: msgs[0]?.createdAt,
    messageCount: msgs.length,
  }));
  res.json(sessionList);
});

/* DELETE /api/chat-messages/sessions/:sessionId — admin only */
router.delete("/chat-messages/sessions/:sessionId", requireAuth, async (req, res) => {
  await db.delete(chatMessagesTable).where(eq(chatMessagesTable.sessionId, req.params.sessionId as string));
  res.json({ ok: true });
});

export default router;
