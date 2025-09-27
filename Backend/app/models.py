# filepath: c:\Users\athar\Desktop\SamadhanX\Backend\app\models.py
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ComplaintIn(BaseModel):
    title: str
    description: str
    name: str
    email: str
    phone: str
    location: str
    latitude: float
    longitude: float

class Complaint(BaseModel):
    id: str = Field(..., alias="id")
    title: str
    description: str
    name: str
    email: str
    phone: str
    location: str
    latitude: float
    longitude: float
    tracking_id: Optional[str] = None
    status: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        allow_population_by_field_name = True
        orm_mode = True