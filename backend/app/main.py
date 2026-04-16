from sqlalchemy import text
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .core.database import Base, SessionLocal, engine
from .middleware.audit import AuditMiddleware
from .middleware.rate_limit import RateLimitMiddleware
from .routers import auth, ai, tax, schemes, locations, grievances, content, contact

app = FastAPI(
    title=settings.app_name,
    description='Backend-for-Frontend API for DhanRakshak web and mobile clients.',
    version='1.1.0',
)

app.add_middleware(RateLimitMiddleware)
app.add_middleware(AuditMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.cors_origins.split(',') if origin.strip()],
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allow_headers=['Authorization', 'Content-Type', 'X-Requested-With'],
)

app.include_router(auth.router, prefix='/api/v1/auth', tags=['auth'])
app.include_router(ai.router, prefix='/api/v1/ai', tags=['ai'])
app.include_router(tax.router, prefix='/api/v1/tax', tags=['tax'])
app.include_router(schemes.router, prefix='/api/v1/schemes', tags=['schemes'])
app.include_router(locations.router, prefix='/api/v1/locations', tags=['locations'])
app.include_router(grievances.router, prefix='/api/v1/grievances', tags=['grievances'])
app.include_router(content.router, prefix='/api/v1/content', tags=['content'])
app.include_router(contact.router, prefix='/api/v1/contact', tags=['contact'])


@app.on_event('startup')
def startup_event():
    Base.metadata.create_all(bind=engine)


@app.get('/health')
def health():
    return {'status': 'ok', 'service': 'dhanrakshak-bff'}


@app.get('/ready')
def ready():
    db = SessionLocal()
    try:
        db.execute(text('SELECT 1'))
    finally:
        db.close()
    return {'status': 'ready', 'database': 'ok'}
