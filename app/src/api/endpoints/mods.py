import json
from typing import Any, List
from src import scraping 
from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic.networks import EmailStr
from sqlalchemy.orm import Session
from src.crud import crud_mod
from src.crud import crud_item
from src import models, schemas
from src.crud import crud_user 
from src.api import deps
from src.core.config import settings
from fastapi import Request
from src.api.endpoints.items import create_item
from src.schemas.item  import ItemCreate


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

'''
@router.post("/articles")
async def add_todo(request:Request):
    data = request.json
    return {
        "url": { data }
    }
'''

from fastapi import FastAPI, Header
from pydantic import BaseModel


class Article(BaseModel):
    url: str

@router.post("/articles")
async def create_article(
    article: Article, 
    authorization: str = Header(None),
    *,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
    ):
    article_url = article.url
    if not authorization:
        return {"error": "Unauthorized. Missing token."}
    
    resulta = scraping.scrap_function(article_url)
    
    parsed_json = json.loads(resulta[0])
    title = json.dumps(parsed_json["title"])
    
    data = json.loads(resulta[1])
    authors = data.get('authors', [])
    try :
        author_strings = [', '.join([f"{key}: {value}" for key, value in author.items()]) for author in authors]
    except AttributeError:
        author_strings = [str(author) for author in authors]
    
    keywords_list = [word.strip() for word in resulta[3].split(",")]

    references_string = resulta[5].replace('\n', '')
    references_list = references_string.split('[\d{1,2}]')
    Reference_List = [ref.strip() for ref in references_list if ref.strip()]

    abstract = resulta[4].replace('\n','')
    #text = resulta[6].replace('\n','')
    item_data = {
        "title": title,
        "checked": True,
        "url": article_url,
        "description": abstract,
        "authors": author_strings,
        "references": Reference_List,
        "keywords": keywords_list,
        "text_integral":""
    }
    item_create_obj = ItemCreate(**item_data)
    create_item(db=db,item_in=item_create_obj,current_user=current_user) 

    return {"message": "Article received successfully", "url": article_url}