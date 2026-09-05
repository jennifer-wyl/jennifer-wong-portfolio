import { createHash } from 'node:crypto';

// Vercel injects KV env vars with a store-name prefix (e.g. WELLNESS_KV_REST_API_URL)
// unless connected with the default names, so match either form.
function findEnv(suffix) {
  if (process.env[suffix]) return process.env[suffix];
  const k = Object.keys(process.env).find((key) => key.endsWith(suffix));
  return k ? process.env[k] : undefined;
}

async function kv(url, token, command) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error('KV request failed: ' + r.status);
  return r.json();
}

export default async function handler(req, res) {
  const KV_URL = findEnv('KV_REST_API_URL');
  const KV_TOKEN = findEnv('KV_REST_API_TOKEN');

  if (!KV_URL || !KV_TOKEN) {
    res.status(503).json({ error: 'No KV store connected to this project yet.' });
    return;
  }

  const code = (req.query.code || '').toString().trim();
  if (!code || code.length < 6) {
    res.status(400).json({ error: 'Sync code must be at least 6 characters.' });
    return;
  }
  const key = 'wellness:' + createHash('sha256').update(code).digest('hex');

  try {
    if (req.method === 'GET') {
      const { result } = await kv(KV_URL, KV_TOKEN, ['GET', key]);
      res.status(200).json({ data: result ? JSON.parse(result) : null });
      return;
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') body = JSON.parse(body || '{}');
      const payload = JSON.stringify(body?.data ?? {});
      const { result } = await kv(KV_URL, KV_TOKEN, ['SET', key, payload]);
      res.status(200).json({ ok: result === 'OK' });
      return;
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    res.status(500).json({ error: 'Sync failed: ' + err.message });
  }
}
