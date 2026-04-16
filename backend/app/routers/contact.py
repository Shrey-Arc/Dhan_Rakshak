from fastapi import APIRouter, Depends
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..repos.repositories import ContactRepo

router = APIRouter()


class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    message: str = Field(min_length=5, max_length=2000)
    type: str = Field(min_length=3, max_length=30)


@router.post('')
def submit_contact(payload: ContactMessage, db: Session = Depends(get_db)):
    row = ContactRepo(db).create(payload.name, payload.email, payload.message, payload.type)
    return {'status': 'received', 'ticket_id': f'CNT-{row.id[:8]}'}
