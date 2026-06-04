---
name: Lead & chat API persistence
description: How form leads and chat messages are saved to the DB from the main site
---

**Leads:** Hero form (`source: "hero-form"`), FloatingCTA (`source: "floating-cta"`), and service detail forms all POST to `POST /api/leads`. Admin reads at `GET /api/leads` (JWT required).

**Chat messages:** ChatPopup saves every message (user + agent) to `POST /api/chat-messages` with a per-session SESSION_ID generated at module load. Admin reads sessions at `GET /api/chat-messages/sessions`.

**Why:** Fully static main site with backend-persisted leads/chat — no database reads on the public site, only writes.
