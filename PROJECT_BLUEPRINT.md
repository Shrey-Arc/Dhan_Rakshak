# DhanRakshak Full Project Blueprint (Frontend + BFF + Data + AI)

## 1) Repository structure

- `app/` Next.js App Router frontend
- `components/` reusable UI blocks
- `lib/api.ts` typed API client for BFF integration
- `backend/` FastAPI BFF service
  - `app/main.py` API app entry
  - `app/routers/*` modular route handlers
  - `app/repos/repositories.py` DB-backed repositories
  - `app/middleware/*` rate-limit + audit logging
  - `db/schema.sql` baseline relational schema
  - `migrations/001_init.sql` SQL migration
  - `scripts/seed.py` seed strategy
  - `docs/architecture.md` architecture notes

## 2) Implemented BFF endpoints

### Auth
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/login/otp/send`
- `POST /api/v1/auth/login/otp/verify`

### AI
- `POST /api/v1/ai/query`

### Tax
- `POST /api/v1/tax/session`
- `GET /api/v1/tax/deductions`

### Schemes
- `GET /api/v1/schemes`
- `POST /api/v1/schemes/match`

### Locations
- `GET /api/v1/locations/nearby`

### Grievance
- `GET /api/v1/grievances`
- `POST /api/v1/grievances`

### Content
- `GET /api/v1/content/faqs`
- `GET /api/v1/content/spotlight`

### Contact
- `POST /api/v1/contact`

## 3) Frontend pages connected to APIs

- Hero search -> `POST /api/v1/ai/query`
- Contact form -> `POST /api/v1/contact`
- Schemes page -> `GET /api/v1/schemes`
- CSC Finder -> `GET /api/v1/locations/nearby`
- Grievance page -> `GET/POST /api/v1/grievances`
- Spotlight component -> `GET /api/v1/content/spotlight`
- FAQ component -> `GET /api/v1/content/faqs`
- Login page -> Auth endpoints

## 4) Data tier plan

- SQL schema available at `backend/db/schema.sql`
- Core entities:
  - users
  - tax_sessions
  - schemes
  - csc_locations
  - grievances
  - grievance_events
  - ai_query_logs
  - contact_messages

## 5) External integrations

- LLM provider via AI router (`/ai/query`) - currently mocked, ready for provider SDK integration.
- Google Maps integration path via locations module and existing map embed in frontend.

## 6) Running the full stack

### Frontend
```bash
npm install
npm run dev
```

### BFF
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend env
```bash
NEXT_PUBLIC_BFF_BASE_URL=http://localhost:8000/api/v1
```

## 7) Hardening status

- ✅ DB-backed repository layer added.
- ✅ JWT auth (access/refresh) + password hashing added.
- ✅ Rate-limiting + audit logging middleware added.
- ✅ Migration + seed strategy added.
- ✅ API smoke/integration tests added under `backend/tests`.
- ⏳ Next: RBAC, distributed rate-limiter (Redis), observability export, and CI pipeline wiring.
