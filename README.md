# Ninety

AI transformation in 90 days. Marketing site + contact form backend.

- `server.js`: Express, serves `public/` and handles `POST /api/contact`
- Submissions are appended to `submissions.jsonl` (`/data` volume if mounted)
- `GET /api/submissions?key=ADMIN_KEY` lists submissions (set `ADMIN_KEY` env var)

Run: `npm install && npm start` (port from `PORT` env, default 3000).
