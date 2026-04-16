from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, Response
from jose import JWTError, jwt
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session

from ..core.config import settings
from ..core.database import get_db
from ..core.security import create_access_token, create_refresh_token, hash_password, verify_password
from ..repos.repositories import RefreshTokenRepo, UserRepo

router = APIRouter()


class SignupRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class RefreshRequest(BaseModel):
    refresh_token: str


@router.post('/signup')
def signup(payload: SignupRequest, db: Session = Depends(get_db)):
    users = UserRepo(db)
    if users.get_by_email(payload.email):
        raise HTTPException(status_code=409, detail='Email already registered')

    user = users.create(payload.name, payload.email, hash_password(payload.password))
    return {'id': user.id, 'name': user.name, 'email': user.email}


@router.post('/login')
def login(payload: LoginRequest, response: Response, db: Session = Depends(get_db)):
    users = UserRepo(db)
    tokens = RefreshTokenRepo(db)

    user = users.get_by_email(payload.email)
    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=401, detail='Invalid credentials')

    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id)
    tokens.create(user.id, refresh_token)

    response.set_cookie(
        key='refresh_token',
        value=refresh_token,
        httponly=True,
        secure=settings.environment == 'production',
        samesite='lax',
        max_age=int(timedelta(days=settings.refresh_token_expire_days).total_seconds()),
    )

    return {
        'access_token': access_token,
        'refresh_token': refresh_token,
        'token_type': 'bearer',
        'user': {'id': user.id, 'name': user.name, 'email': user.email},
    }


@router.post('/refresh')
def refresh(payload: RefreshRequest, db: Session = Depends(get_db)):
    tokens = RefreshTokenRepo(db)
    record = tokens.get(payload.refresh_token)
    if not record or record.is_revoked:
        raise HTTPException(status_code=401, detail='Invalid refresh token')

    try:
        decoded = jwt.decode(payload.refresh_token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
    except JWTError as exc:
        raise HTTPException(status_code=401, detail='Invalid refresh token') from exc

    if decoded.get('type') != 'refresh' or not decoded.get('sub'):
        raise HTTPException(status_code=401, detail='Invalid token type')

    return {'access_token': create_access_token(decoded['sub']), 'token_type': 'bearer'}
