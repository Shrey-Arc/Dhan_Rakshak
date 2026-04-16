from fastapi import APIRouter, Query
from .. import store

router = APIRouter()


@router.get('/nearby')
def nearby_locations(type: str | None = Query(default=None), q: str | None = Query(default=None)):
    items = store.locations
    if type and type != 'all':
        items = [i for i in items if i['type'] == type]
    if q:
        q2 = q.lower()
        items = [i for i in items if q2 in i['location'].lower() or q2 in i['name'].lower()]
    return {'items': items}
