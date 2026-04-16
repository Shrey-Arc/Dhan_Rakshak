-- DhanRakshak core relational schema (PostgreSQL-compatible)

CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT UNIQUE,
  password_hash TEXT,
  preferred_language TEXT DEFAULT 'en-IN',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE tax_sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE schemes (
  id UUID PRIMARY KEY,
  code TEXT UNIQUE,
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  benefit TEXT,
  eligibility TEXT,
  metadata JSONB
);

CREATE TABLE csc_locations (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  address TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  phone TEXT,
  hours TEXT,
  metadata JSONB
);

CREATE TABLE grievances (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE grievance_events (
  id UUID PRIMARY KEY,
  grievance_id UUID NOT NULL REFERENCES grievances(id),
  event_type TEXT NOT NULL,
  note TEXT,
  actor TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE ai_query_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  query TEXT NOT NULL,
  intent TEXT,
  response TEXT,
  confidence NUMERIC(4,3),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE contact_messages (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  message_type TEXT,
  name TEXT,
  email TEXT,
  message TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
