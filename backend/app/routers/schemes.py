from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..repos.repositories import SchemeRepo

router = APIRouter()


@router.get('')
def list_schemes(category: str | None = Query(default=None), db: Session = Depends(get_db)):
    return {'items': SchemeRepo(db).list(category)}


@router.post('/match')
def match_schemes(profile: dict, db: Session = Depends(get_db)):
    return {'matched': SchemeRepo(db).list(None), 'profile': profile}
