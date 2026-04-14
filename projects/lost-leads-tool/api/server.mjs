#!/usr/bin/env node
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __dirname = dirname(fileURLToPath(import.meta.url));
const defaultDbPath = join(__dirname, '..', 'db', 'lost-leads.db');
const defaultUiPath = join(__dirname, '..', 'ui', 'index.html');
const defaultPort = Number.parseInt(process.env.PORT || '3200', 10);

// --- Helpers ---

function json(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function isMainModule() {
  return process.argv[1] === fileURLToPath(import.meta.url);
}

export function createApp(options = {}) {
  const dbPath = options.dbPath || defaultDbPath;
  const uiPath = options.uiPath || defaultUiPath;
  const port = options.port ?? defaultPort;

  const db = new Database(dbPath);
  db.pragma('journal_mode = WAL');

  // --- Prepared Statements ---

  const insertLead = db.prepare(`
    INSERT INTO leads (lead_name, lead_email, lead_phone, course_interested, course_category, contact_date, transcription, closer_notes, non_purchase_reason, non_purchase_detail, competitor_chosen, price_sensitivity)
    VALUES (@lead_name, @lead_email, @lead_phone, @course_interested, @course_category, @contact_date, @transcription, @closer_notes, @non_purchase_reason, @non_purchase_detail, @competitor_chosen, @price_sensitivity)
  `);

  const updateLead = db.prepare(`
    UPDATE leads SET
      lead_name = @lead_name, lead_email = @lead_email, lead_phone = @lead_phone,
      course_interested = @course_interested, course_category = @course_category,
      contact_date = @contact_date, transcription = @transcription, closer_notes = @closer_notes,
      non_purchase_reason = @non_purchase_reason, non_purchase_detail = @non_purchase_detail,
      competitor_chosen = @competitor_chosen, price_sensitivity = @price_sensitivity,
      updated_at = datetime('now')
    WHERE id = @id
  `);

  const getLead = db.prepare('SELECT * FROM leads WHERE id = ?');
  const deleteLead = db.prepare('DELETE FROM leads WHERE id = ?');

  const markProcessed = db.prepare(`
    UPDATE leads SET processed_by_agent = 1, agent_extraction_date = datetime('now'), agent_notes = @agent_notes, updated_at = datetime('now')
    WHERE id = @id
  `);

  // --- Query builders ---

  function listLeads(query) {
    let sql = 'SELECT * FROM leads WHERE 1=1';
    const params = {};

    if (query.unprocessed === 'true') {
      sql += ' AND processed_by_agent = 0';
    }
    if (query.category) {
      sql += ' AND course_category = @category';
      params.category = query.category;
    }
    if (query.reason) {
      sql += ' AND non_purchase_reason = @reason';
      params.reason = query.reason;
    }
    if (query.since) {
      sql += ' AND contact_date >= @since';
      params.since = query.since;
    }
    if (query.until) {
      sql += ' AND contact_date <= @until';
      params.until = query.until;
    }

    sql += ' ORDER BY contact_date DESC';

    if (query.limit) {
      sql += ' LIMIT @limit';
      params.limit = Number.parseInt(query.limit, 10);
    }

    return db.prepare(sql).all(params);
  }

  function getStats() {
    const total = db.prepare('SELECT COUNT(*) as count FROM leads').get();
    const unprocessed = db.prepare('SELECT COUNT(*) as count FROM leads WHERE processed_by_agent = 0').get();
    const byReason = db.prepare('SELECT non_purchase_reason, COUNT(*) as count FROM leads GROUP BY non_purchase_reason ORDER BY count DESC').all();
    const byCategory = db.prepare('SELECT course_category, COUNT(*) as count FROM leads GROUP BY course_category ORDER BY count DESC').all();
    const byCompetitor = db.prepare("SELECT competitor_chosen, COUNT(*) as count FROM leads WHERE competitor_chosen IS NOT NULL AND competitor_chosen != '' GROUP BY competitor_chosen ORDER BY count DESC").all();
    const bySensitivity = db.prepare("SELECT price_sensitivity, COUNT(*) as count FROM leads WHERE price_sensitivity IS NOT NULL GROUP BY price_sensitivity ORDER BY count DESC").all();
    const recentWeek = db.prepare("SELECT COUNT(*) as count FROM leads WHERE contact_date >= date('now', '-7 days')").get();

    return { total: total.count, unprocessed: unprocessed.count, recentWeek: recentWeek.count, byReason, byCategory, byCompetitor, bySensitivity };
  }

  function getHealth(server) {
    db.prepare('SELECT 1 AS ok').get();
    const address = server.address();
    const runtimePort = typeof address === 'object' && address ? address.port : port;

    return {
      status: 'ok',
      database: 'ok',
      port: runtimePort,
      pid: process.pid,
      uptimeSeconds: Math.round(process.uptime()),
    };
  }

  // --- Router ---

  const server = createServer(async (req, res) => {
    // CORS preflight
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      return res.end();
    }

    const url = new URL(req.url, `http://localhost:${port}`);
    const path = url.pathname;
    const method = req.method;

    try {
      // Serve UI
      if (path === '/' && method === 'GET') {
        const html = readFileSync(uiPath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(html);
      }

      // Health
      if (path === '/api/health' && method === 'GET') {
        return json(res, 200, getHealth(server));
      }

      // List leads
      if (path === '/api/leads' && method === 'GET') {
        const query = Object.fromEntries(url.searchParams);
        return json(res, 200, listLeads(query));
      }

      // Stats
      if (path === '/api/stats' && method === 'GET') {
        return json(res, 200, getStats());
      }

      // Get single lead
      const leadMatch = path.match(/^\/api\/leads\/(\d+)$/);
      if (leadMatch && method === 'GET') {
        const lead = getLead.get(Number.parseInt(leadMatch[1], 10));
        if (!lead) return json(res, 404, { error: 'Lead not found' });
        return json(res, 200, lead);
      }

      // Create lead
      if (path === '/api/leads' && method === 'POST') {
        const body = await parseBody(req);
        const result = insertLead.run({
          lead_name: body.lead_name,
          lead_email: body.lead_email || null,
          lead_phone: body.lead_phone || null,
          course_interested: body.course_interested,
          course_category: body.course_category,
          contact_date: body.contact_date,
          transcription: body.transcription || null,
          closer_notes: body.closer_notes || null,
          non_purchase_reason: body.non_purchase_reason,
          non_purchase_detail: body.non_purchase_detail || null,
          competitor_chosen: body.competitor_chosen || null,
          price_sensitivity: body.price_sensitivity || null,
        });
        const lead = getLead.get(result.lastInsertRowid);
        return json(res, 201, lead);
      }

      // Update lead
      if (leadMatch && method === 'PUT') {
        const id = Number.parseInt(leadMatch[1], 10);
        const existing = getLead.get(id);
        if (!existing) return json(res, 404, { error: 'Lead not found' });
        const body = await parseBody(req);
        updateLead.run({ ...body, id });
        return json(res, 200, getLead.get(id));
      }

      // Mark as processed by agent
      const processMatch = path.match(/^\/api\/leads\/(\d+)\/process$/);
      if (processMatch && method === 'PATCH') {
        const id = Number.parseInt(processMatch[1], 10);
        const existing = getLead.get(id);
        if (!existing) return json(res, 404, { error: 'Lead not found' });
        const body = await parseBody(req);
        markProcessed.run({ id, agent_notes: body.agent_notes || null });
        return json(res, 200, getLead.get(id));
      }

      // Delete lead
      if (leadMatch && method === 'DELETE') {
        const id = Number.parseInt(leadMatch[1], 10);
        const existing = getLead.get(id);
        if (!existing) return json(res, 404, { error: 'Lead not found' });
        deleteLead.run(id);
        return json(res, 200, { deleted: true });
      }

      json(res, 404, { error: 'Not found' });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(err);
      json(res, message.includes('CHECK') ? 400 : 500, { error: message });
    }
  });

  function close() {
    return new Promise((resolve, reject) => {
      server.close((serverError) => {
        let error = serverError || null;
        try {
          db.close();
        } catch (dbError) {
          error = error || dbError;
        }

        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

  return { server, close };
}

export async function startApp(options = {}) {
  const app = createApp(options);

  await new Promise((resolve, reject) => {
    app.server.once('error', reject);
    app.server.listen(options.port ?? defaultPort, () => {
      app.server.off('error', reject);
      resolve();
    });
  });

  return app;
}

if (isMainModule()) {
  const app = await startApp({ port: defaultPort });
  console.log(`Lost Leads API running at http://localhost:${defaultPort}`);
  console.log(`UI available at http://localhost:${defaultPort}/`);
  console.log('API docs: GET /api/health, GET /api/leads, POST /api/leads, GET /api/stats');

  const shutdown = () => {
    app.close()
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        process.exit(0);
      });
  };

  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
}
