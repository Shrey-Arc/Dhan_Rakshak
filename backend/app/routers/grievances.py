from fastapi import APIRouter
from pydantic import BaseModel
from .. import store

router = APIRouter()


class GrievanceCreateRequest(BaseModel):
    title: str
    category: str
    priority: str
    description: str


@router.get('')
def list_grievances():
    return {'items': store.grievances}


@router.post('')
def create_grievance(payload: GrievanceCreateRequest):
    item = {
        'id': store.new_grievance_id(),
        'title': payload.title,
        'category': payload.category,
        'status': 'Pending Review',
        'date': store.now_iso()[:10],
        'priority': payload.priority,
        'description': payload.description,
    }
    store.grievances.append(item)
    return item
