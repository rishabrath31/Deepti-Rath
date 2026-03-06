from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas import schemas
from app.services import crud
from app.api.v1.endpoints.auth import get_current_user
from app.models import models

router = APIRouter()

@router.post("/", response_model=schemas.Inquiry)
def create_inquiry(inquiry: schemas.InquiryCreate, db: Session = Depends(get_db)):
    return crud.create_inquiry(db, inquiry=inquiry)

@router.get("/", response_model=List[schemas.Inquiry])
def read_inquiries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    return crud.get_inquiries(db, skip=skip, limit=limit)
