# DhanRakshak BFF (FastAPI)

Production-oriented Backend-for-Frontend for DhanRakshak.

## Features implemented

- DB-backed repositories (SQLAlchemy)
- Auth with password hashing + JWT access/refresh tokens
- HttpOnly refresh-token cookie on login
- Restricted CORS via env var
- Rate limiting middleware
- Audit logging middleware
- Health (`/health`) and readiness (`/ready`) probes
- Seed strategy for baseline data
- API tests with pytest

## Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Environment variables

```bash
DATABASE_URL=sqlite:///./dhanrakshak.db
JWT_SECRET=change-me-in-production
CORS_ORIGINS=http://localhost:3000
RATE_LIMIT_PER_MINUTE=120
ENVIRONMENT=development
```

## Run migrations + seed

```bash
# SQL migration file available at migrations/001_init.sql
python scripts/seed.py
```

## Run API

```bash
uvicorn app.main:app --reload --port 8000
```

## API docs

- Swagger: `http://localhost:8000/docs`
- OpenAPI: `http://localhost:8000/openapi.json`

## Tests

```bash
pytest -q
```
