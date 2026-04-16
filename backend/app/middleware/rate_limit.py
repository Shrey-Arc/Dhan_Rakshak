import time
from collections import defaultdict, deque

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

from ..core.config import settings


class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)
        self.requests = defaultdict(deque)

    async def dispatch(self, request, call_next):
        client = request.client.host if request.client else 'unknown'
        key = f"{client}:{request.url.path}"
        now = time.time()
        window = 60

        while self.requests[key] and now - self.requests[key][0] > window:
            self.requests[key].popleft()

        if len(self.requests[key]) >= settings.rate_limit_per_minute:
            return JSONResponse(status_code=429, content={'detail': 'Rate limit exceeded'})

        self.requests[key].append(now)
        return await call_next(request)
