from fastapi import APIRouter
from .. import store

router = APIRouter()


@router.get('/faqs')
def list_faqs():
    return {'items': store.faqs}


@router.get('/spotlight')
def list_spotlight():
    return {'items': store.spotlight}
