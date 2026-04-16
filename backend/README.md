# DhanRakshak BFF (FastAPI)

Backend-for-Frontend service for DhanRakshak.

## Run locally

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## API docs

- Swagger: `http://localhost:8000/docs`
- OpenAPI JSON: `http://localhost:8000/openapi.json`

## Base URL used by frontend

Set in frontend env:

```bash
NEXT_PUBLIC_BFF_BASE_URL=http://localhost:8000/api/v1
```

## Modules

- Auth service
- AI Query service
- Taxation endpoints
- Scheme matcher
- CSC/Map integration endpoint layer
- Grievance tracker
- Contact submissions
- Content feeds (FAQ + Spotlight)
