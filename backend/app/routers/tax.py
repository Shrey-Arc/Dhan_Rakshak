from fastapi import APIRouter

router = APIRouter()


@router.post('/session')
def create_tax_session():
    return {'session_id': 'tax_sess_1', 'status': 'created'}


@router.get('/deductions')
def list_deductions():
    return {
        'items': [
            {'code': '80C', 'name': 'Investments and Savings'},
            {'code': '80D', 'name': 'Health Insurance Premium'},
        ]
    }
