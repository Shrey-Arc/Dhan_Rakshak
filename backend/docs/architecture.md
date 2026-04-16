# DhanRakshak Architecture (BFF-first)

## Layers
1. Next.js frontend (web)
2. FastAPI BFF
3. SQL database (Postgres/Supabase compatible)
4. External APIs (LLM, Google Maps)

## Security controls added
- Password hashing via bcrypt
- JWT access + refresh tokens
- HttpOnly cookie for refresh token
- Route-level validation with Pydantic
- Restricted CORS allowlist
- Global rate limiting middleware
- Request audit logging middleware

## Operational controls
- `/health` liveness endpoint
- `/ready` readiness endpoint with DB check
- migration file: `migrations/001_init.sql`
- seed script: `scripts/seed.py`
- tests: `tests/`

## Repositories
- UserRepo
- RefreshTokenRepo
- SchemeRepo
- LocationRepo
- GrievanceRepo
- ContentRepo
- ContactRepo
- AuditRepo
