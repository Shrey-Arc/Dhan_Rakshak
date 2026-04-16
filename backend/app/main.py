from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import auth, ai, tax, schemes, locations, grievances, content, contact

app = FastAPI(
    title="DhanRakshak BFF API",
    description="Backend-for-Frontend API for DhanRakshak web and mobile clients.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(ai.router, prefix="/api/v1/ai", tags=["ai"])
app.include_router(tax.router, prefix="/api/v1/tax", tags=["tax"])
app.include_router(schemes.router, prefix="/api/v1/schemes", tags=["schemes"])
app.include_router(locations.router, prefix="/api/v1/locations", tags=["locations"])
app.include_router(grievances.router, prefix="/api/v1/grievances", tags=["grievances"])
app.include_router(content.router, prefix="/api/v1/content", tags=["content"])
app.include_router(contact.router, prefix="/api/v1/contact", tags=["contact"])


@app.get("/health")
def health():
    return {"status": "ok", "service": "dhanrakshak-bff"}
