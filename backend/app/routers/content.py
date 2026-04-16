from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..repos.repositories import ContentRepo

router = APIRouter()


@router.get('/faqs')
def list_faqs(db: Session = Depends(get_db)):
    return {'items': ContentRepo(db).faqs()}


@router.get('/spotlight')
def list_spotlight(db: Session = Depends(get_db)):
    return {'items': ContentRepo(db).spotlight()}
