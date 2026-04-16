from fastapi import APIRouter, Query
from .. import store

router = APIRouter()


@router.get('')
def list_schemes(category: str | None = Query(default=None)):
    if not category or category == 'all':
        return {'items': store.schemes}
    return {'items': [s for s in store.schemes if s['category'] == category]}


@router.post('/match')
def match_schemes(profile: dict):
    return {'matched': store.schemes, 'profile': profile}
