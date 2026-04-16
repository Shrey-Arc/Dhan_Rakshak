from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
    type: str


@router.post('')
def submit_contact(payload: ContactMessage):
    return {'status': 'received', 'ticket_id': 'CNT-0001', 'data': payload.model_dump()}
