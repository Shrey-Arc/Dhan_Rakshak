from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..repos.repositories import GrievanceRepo

router = APIRouter()


class GrievanceCreateRequest(BaseModel):
    title: str = Field(min_length=5, max_length=255)
    category: str = Field(min_length=3, max_length=80)
    priority: str = Field(min_length=3, max_length=40)
    description: str = Field(min_length=10, max_length=2000)


@router.get('')
def list_grievances(db: Session = Depends(get_db)):
    return {'items': GrievanceRepo(db).list()}


@router.post('')
def create_grievance(payload: GrievanceCreateRequest, db: Session = Depends(get_db)):
    return GrievanceRepo(db).create(
        title=payload.title,
        category=payload.category,
        priority=payload.priority,
        description=payload.description,
    )
