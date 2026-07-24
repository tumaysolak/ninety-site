const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || (fs.existsSync("/data") ? "/data" : __dirname);
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.jsonl");
const ADMIN_KEY = process.env.ADMIN_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "tumaysolak@gmail.com";

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

async function notifyByEmail(entry) {
  if (!RESEND_API_KEY) return;
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ninety AI <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: entry.email,
        subject: `Ninety AI form: ${entry.name}${entry.company ? " (" + entry.company + ")" : ""}`,
        html:
          `<h2 style="font-family:sans-serif">Yeni iletişim formu gönderimi</h2>` +
          `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">` +
          `<tr><td style="padding:4px 12px 4px 0"><b>Ad</b></td><td>${escapeHtml(entry.name)}</td></tr>` +
          `<tr><td style="padding:4px 12px 4px 0"><b>E-posta</b></td><td>${escapeHtml(entry.email)}</td></tr>` +
          `<tr><td style="padding:4px 12px 4px 0"><b>Şirket</b></td><td>${escapeHtml(entry.company)}</td></tr>` +
          `<tr><td style="padding:4px 12px 4px 0"><b>Dil</b></td><td>${escapeHtml(entry.lang)}</td></tr>` +
          `<tr><td style="padding:4px 12px 4px 0"><b>Tarih</b></td><td>${escapeHtml(entry.ts)}</td></tr>` +
          `</table>` +
          `<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #1D3FD8;padding-left:12px">${escapeHtml(entry.message)}</p>`,
      }),
    });
    if (!r.ok) console.error("resend failed", r.status, await r.text());
  } catch (e) {
    console.error("resend error", e);
  }
}

app.use(express.json({ limit: "50kb" }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1h" }));

// naive in-memory rate limit: 5 submissions / 10 min per IP
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const arr = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  if (arr.length >= 5) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

app.post("/api/contact", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
  if (rateLimited(String(ip))) {
    return res.status(429).json({ ok: false, error: "rate_limited" });
  }
  const { name, email, company, message, lang, website } = req.body || {};
  // honeypot: real users never fill "website"
  if (website) return res.json({ ok: true });

  const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const entry = {
    ts: new Date().toISOString(),
    name: clean(name, 120),
    email: clean(email, 160),
    company: clean(company, 160),
    message: clean(message, 4000),
    lang: clean(lang, 5) || "en",
    ip: String(ip).split(",")[0].trim(),
  };

  if (!entry.name || !entry.email || !entry.message) {
    return res.status(400).json({ ok: false, error: "missing_fields" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  try {
    fs.appendFileSync(SUBMISSIONS_FILE, JSON.stringify(entry) + "\n");
  } catch (e) {
    console.error("write failed", e);
    return res.status(500).json({ ok: false, error: "server_error" });
  }
  console.log("[contact]", entry.email, entry.company);
  notifyByEmail(entry); // fire and forget
  res.json({ ok: true });
});

app.get("/api/submissions", (req, res) => {
  if (!ADMIN_KEY || req.query.key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }
  let rows = [];
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      rows = fs
        .readFileSync(SUBMISSIONS_FILE, "utf8")
        .split("\n")
        .filter(Boolean)
        .map((l) => JSON.parse(l));
    }
  } catch (e) {
    console.error(e);
  }
  res.json({ ok: true, count: rows.length, submissions: rows.reverse() });
});

app.get("/healthz", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Ninety site listening on :${PORT}`));
