from starlette.middleware.base import BaseHTTPMiddleware

from ..core.database import SessionLocal
from ..repos.repositories import AuditRepo


class AuditMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)

        db = SessionLocal()
        try:
            AuditRepo(db).write(
                method=request.method,
                path=request.url.path,
                status_code=response.status_code,
                client_ip=request.client.host if request.client else 'unknown',
            )
        finally:
            db.close()

        return response
