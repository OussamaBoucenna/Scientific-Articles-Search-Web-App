from typing import Any, Dict, Optional, Union

from sqlalchemy.orm import Session

from src.core.security import get_password_hash, verify_password
from src.crud.base import CRUDBase
from src.models.user import User
from src.models.mod import Mod
from src.schemas.user import UserCreate, UserUpdate
from src.schemas.mod import ModCreate, ModUpdate


class CRUDMod(CRUDBase[Mod, ModCreate, ModUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[Mod]:
        return db.query(Mod).filter(Mod.email == email).first()

    def create(self, db: Session, *, obj_in: ModCreate) -> Mod:
        db_obj = Mod(
            email=obj_in.email,
            hashed_password=get_password_hash(obj_in.password),
            first_name=obj_in.first_name,
            last_name=obj_in.last_name,
            is_superuser=obj_in.is_superuser,    
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self, db: Session, *, db_obj: Mod, obj_in: Union[ModUpdate, Dict[str, Any]]
    ) -> Mod:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data["password"]:
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def authenticate(self, db: Session, *, email: str, password: str) -> Optional[Mod]:
        mod = self.get_by_email(db, email=email)
        if not mod:
            return None
        if not verify_password(password, mod.hashed_password):
            return None
        return mod

    def is_active(self, mod: Mod) -> bool:
        return mod.is_active
    

    def is_superuser(self, mod: Mod) -> bool:
        return mod.is_superuser
    


mod = CRUDMod(Mod);print("created")
