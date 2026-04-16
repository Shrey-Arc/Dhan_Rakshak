from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


@router.post('/login')
def login(payload: LoginRequest):
    return {
        'access_token': 'demo-access-token',
        'refresh_token': 'demo-refresh-token',
        'token_type': 'bearer',
        'user': {'id': 'usr_1', 'name': 'Demo User', 'email': payload.email},
    }


class OtpSendRequest(BaseModel):
    phone: str


@router.post('/login/otp/send')
def send_otp(payload: OtpSendRequest):
    return {'message': 'OTP sent', 'phone': payload.phone}


class OtpVerifyRequest(BaseModel):
    phone: str
    otp: str


@router.post('/login/otp/verify')
def verify_otp(payload: OtpVerifyRequest):
    return {
        'access_token': 'demo-access-token',
        'refresh_token': 'demo-refresh-token',
        'token_type': 'bearer',
        'user': {'id': 'usr_1', 'name': 'Demo User', 'phone': payload.phone},
    }
