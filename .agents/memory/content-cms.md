---
name: Content CMS system
description: How editable website content is stored, served, and edited via the admin dashboard
---

## Pattern
- DB table: `site_content` (key TEXT PK, value JSONB, updated_at TIMESTAMP)
- API: `GET /api/content/:key` (public), `PUT /api/content/:key` (admin JWT required)
- Admin page: `/admin/content` — tab-based editor with Hero, Stats, Testimonials, Blog Posts tabs

## Content keys
- `hero` — eyebrow, headline, subText, bullets[], phone, ratingText, ratingCount
- `stats` — array of {number, label}
- `testimonials` — array of {quote, name, title, avatar}
- `blog` — array of {img, category, title, excerpt, author, date, readTime}

## Fallback behavior
Each website component fetches from API on mount. If the key returns 404 (not yet saved), the component uses its hardcoded DEFAULT_* constant silently. This means the site works out of the box before any content is saved in the admin.

**Why:** Avoids breaking the live site when the DB is empty. Admin edits only take effect after "Save Changes" is clicked.
