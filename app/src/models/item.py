from typing import TYPE_CHECKING

from sqlalchemy import Column, ForeignKey, Integer, String,Date,ARRAY,Boolean
from sqlalchemy.orm import relationship

from src.db.base_class import Base

if TYPE_CHECKING:
    from .user import User  # noqa: F401


class Item(Base):
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("user.id"))
    checked = Column(Boolean(),default=False)
    authors = Column(ARRAY(String))
    keywords = Column(ARRAY(String))
    url = Column(String, index=True)
    text_integral = Column(String, index=True)
    nombre_favoris = Column(Integer, index=True)
    references = Column(ARRAY(String))
    date_publication = Column(Date)
    owner = relationship("User", back_populates="items")    

    
    
