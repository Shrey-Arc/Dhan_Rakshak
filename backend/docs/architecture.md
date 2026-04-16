# DhanRakshak Architecture (BFF-first)

## Layers

1. Frontend (Next.js web)
2. BFF (FastAPI REST layer)
3. Data services (PostgreSQL / MongoDB / Supabase optional)
4. External APIs (LLM provider, Google Maps)

## Data flow

- UI calls BFF (`/api/v1/*`)
- BFF handles auth, validation, orchestration, and response shaping
- BFF calls DB + external APIs (LLM / Maps) as needed
- BFF returns normalized payloads optimized for frontend rendering

## Module responsibilities

- Auth: session/token workflows
- AI: query routing, prompt orchestration, safety layer
- Tax: tax session orchestration and deductions guidance
- Schemes: listing + eligibility matching
- Locations: CSC/Bank finder and map enrichment
- Grievances: complaint lifecycle and status tracking
- Content: FAQ + Spotlight feeds
- Contact: support ticket intake
