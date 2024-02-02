from typing import Optional

from pydantic import BaseModel, EmailStr


# Shared properties
class ModBase(BaseModel):
    email: Optional[EmailStr] = None
    is_active: Optional[bool] = True
    is_superuser: bool = False
    first_name: Optional[str] = None
    last_name: Optional[str] = None


# Properties to receive via API on creation
class ModCreate(ModBase):
    email: EmailStr
    first_name: str
    password: str
    last_name: str
# Properties to receive via API on Login

class ModLogin(ModBase):
    email: EmailStr
    password: str
    is_active: Optional[bool] = True


# Properties to receive via API on update
class ModUpdate(ModBase):
    password: Optional[str] = None
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None



class ModInDBBase(ModBase):
    id: Optional[int] = None

    class Config:
        on_orm = True


# Additional properties to return via API
class Mod(ModInDBBase):
    pass


# Additional properties stored in DB
class ModInDB(ModInDBBase):
    hashed_password: str
