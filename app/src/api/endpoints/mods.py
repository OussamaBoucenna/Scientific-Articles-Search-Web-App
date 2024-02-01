from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic.networks import EmailStr
from sqlalchemy.orm import Session
from src.crud import crud_mod
from src import models, schemas
from src.crud import crud_user 
from src.api import deps
from src.core.config import settings

router = APIRouter()


@router.get("/", response_model=List[schemas.Mod])
def read_mods(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_mod: models.Mod = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Retrieve mods.
    """
    mods = crud_mod.mod.get_multi(db, skip=skip, limit=limit)
    return mods


@router.post("/", response_model=schemas.Mod)
def create_mod(
    *,
    db: Session = Depends(deps.get_db),
    user_in: schemas.ModCreate,
    current_mod: models.Mod = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Create new mod.
    """
    mod = crud_mod.mod.get_by_email(db, email=user_in.email)
    if mod:
        raise HTTPException(
            status_code=400,
            detail="The mod with this username already exists in the system.",
        )
    mod = crud_mod.mod.create(db, obj_in=user_in)

    return mod


@router.put("/me_mod", response_model=schemas.Mod)
def update_mod_me(
    *,
    db: Session = Depends(deps.get_db),
    password: str = Body(None),
    first_name: str = Body(None),
    last_name: str = Body(None),
    email: EmailStr = Body(None),
    current_mod: models.Mod = Depends(deps.get_current_active_mod),
) -> Any:
    """
    Update own mod.
    """
    current_mod_data = jsonable_encoder(current_mod)
    user_in = schemas.UserUpdate(**current_mod_data)
    if password is not None:
        user_in.password = password
    if first_name is not None:
        user_in.first_name = first_name
    if last_name is not None:
        user_in.last_name = last_name
    if email is not None:
        user_in.email = email
    mod = crud_mod.mod.update(db, db_obj=current_mod, obj_in=user_in)
    return mod


@router.get("/me_mod", response_model=schemas.Mod)
def read_mod_me(
    db: Session = Depends(deps.get_db),
    current_mod: models.Mod = Depends(deps.get_current_active_mod),
) -> Any:
    """
    Get current mod.
    """
    return current_mod





@router.get("/{mod_id}", response_model=schemas.Mod)
def read_mod_by_id(
    mod_id: int,
    current_mod: models.Mod = Depends(deps.get_current_active_superuser),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Get a specific mod by id.
    """
    mod = crud_mod.mod.get(db, id=mod_id)
    if not mod:
        raise HTTPException(
            status_code=404,
            detail="The mod with this username does not exist in the system",
        )
    return mod


@router.put("/{mod_id}", response_model=schemas.Mod)
def update_mod(
    *,
    db: Session = Depends(deps.get_db),
    mod_id: int,
    mod_in: schemas.ModUpdate,
    current_mod: models.Mod = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Update a mod.
    """
    mod = crud_mod.mod.get(db, id=mod_id)
    if not mod:
        raise HTTPException(
            status_code=404,
            detail="The mod with this username does not exist in the system",
        )
    mod = crud_mod.mod.update(db, db_obj=mod, obj_in=mod_in)
    return mod
@router.delete("/{id}", response_model=schemas.Mod)
def delete_mod(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete a mod.
    """
    mod = crud_mod.mod.remove(db=db, id=id)
    return mod
