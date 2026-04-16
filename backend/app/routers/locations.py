from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..repos.repositories import LocationRepo

router = APIRouter()


@router.get('/nearby')
def nearby_locations(
    type: str | None = Query(default=None),
    q: str | None = Query(default=None),
    db: Session = Depends(get_db),
):
    return {'items': LocationRepo(db).list(q=q, type_=type)}
