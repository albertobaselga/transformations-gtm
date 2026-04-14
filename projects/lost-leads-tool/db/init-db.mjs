#!/usr/bin/env node
import Database from 'better-sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'lost-leads.db');

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    lead_name TEXT NOT NULL,
    lead_email TEXT,
    lead_phone TEXT,
    course_interested TEXT NOT NULL,
    course_category TEXT NOT NULL CHECK (course_category IN ('cine', 'animacion', 'videojuegos', 'sonido', 'fotografia', 'tv', 'produccion', 'otro')),
    contact_date TEXT NOT NULL,
    transcription TEXT,
    closer_notes TEXT,
    non_purchase_reason TEXT NOT NULL CHECK (non_purchase_reason IN ('precio', 'contenido', 'competidor', 'timing', 'formato', 'otro')),
    non_purchase_detail TEXT,
    competitor_chosen TEXT,
    price_sensitivity TEXT CHECK (price_sensitivity IN ('low', 'medium', 'high')),
    processed_by_agent INTEGER NOT NULL DEFAULT 0,
    agent_extraction_date TEXT,
    agent_notes TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_leads_processed ON leads(processed_by_agent);
  CREATE INDEX IF NOT EXISTS idx_leads_category ON leads(course_category);
  CREATE INDEX IF NOT EXISTS idx_leads_reason ON leads(non_purchase_reason);
  CREATE INDEX IF NOT EXISTS idx_leads_contact_date ON leads(contact_date);
`);

console.log('Database initialized at ' + dbPath);
db.close();
