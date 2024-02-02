from datetime import timedelta
from typing import Any

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from src import models, schemas
from src.schemas.user import UserCreate,UserLogin
from src.schemas.mod import ModCreate,ModLogin

from src.api import deps
from src.core import security
from src.core.config import settings
from src.crud import crud_user,crud_mod

router = APIRouter()


@router.post("/access-token-user", response_model=schemas.Token)
def login_access_token_user(
    db: Session = Depends(deps.get_db),user_in: UserLogin = Body(None)
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    if not user_in:
        raise HTTPException(status_code=400, detail="Empty body")
    user = crud_user.user.authenticate(
        db, email=user_in.email, password=user_in.password
    )
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not crud_user.user.is_active(user):
        raise HTTPException(status_code=400, detail="Inactive user")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }

@router.post("/test-token-user", response_model=schemas.User)
def test_token(current_user: models.User = Depends(deps.get_current_user)) -> Any:
    """
    Test access token
    """
    return current_user


@router.post("/access-token-mod", response_model=schemas.Token)
def login_access_token_mod(
    db: Session = Depends(deps.get_db),mod_in: ModLogin = Body(None)
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    if not mod_in:
        raise HTTPException(status_code=400, detail="Empty body")
    mod = crud_mod.mod.authenticate(
        db, email=mod_in.email, password=mod_in.password
    )
    if not mod:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not crud_mod.mod.is_active(mod):
        raise HTTPException(status_code=400, detail="Inactive mod")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            mod.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }

@router.post("/test-token-mod", response_model=schemas.Mod)
def test_token(current_mod: models.Mod = Depends(deps.get_current_mod)) -> Any:
    """
    Test access token
    """
    return current_mod
