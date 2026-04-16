from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter()


class AIQueryRequest(BaseModel):
    query: str = Field(min_length=2, max_length=500)
    locale: str | None = 'en-IN'


@router.post('/query')
def query(payload: AIQueryRequest):
    text = payload.query.lower()
    intent = 'general'
    suggested_actions = ['Explore services']

    if 'tax' in text or 'itr' in text:
        intent = 'tax'
        suggested_actions = ['Open Tax Help', 'Start tax checklist']
    elif 'scheme' in text or 'subsidy' in text:
        intent = 'schemes'
        suggested_actions = ['Open Scheme Matching', 'Run eligibility check']
    elif 'csc' in text or 'bank' in text:
        intent = 'locations'
        suggested_actions = ['Open CSC Finder', 'Search by location']
    elif 'grievance' in text or 'complaint' in text:
        intent = 'grievance'
        suggested_actions = ['Log grievance', 'Track complaint status']

    return {
        'answer': f"Here is guidance for your query: {payload.query}",
        'intent': intent,
        'suggested_actions': suggested_actions,
        'confidence': 0.82,
        'citations': [],
    }
