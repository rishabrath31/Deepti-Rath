from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas import schemas
from app.services import crud
from app.api.v1.endpoints.auth import get_current_user
from app.models import models

router = APIRouter()

@router.get("/", response_model=List[schemas.InsurancePlan])
def read_plans(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    plans = crud.get_plans(db, skip=skip, limit=limit)
    return plans

@router.post("/", response_model=schemas.InsurancePlan)
def create_plan(plan: schemas.InsurancePlanCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    return crud.create_plan(db, plan=plan)
