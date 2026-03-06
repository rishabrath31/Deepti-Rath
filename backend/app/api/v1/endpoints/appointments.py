from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas import schemas
from app.services import crud
from app.api.v1.endpoints.auth import get_current_user
from app.models import models

router = APIRouter()

@router.post("/", response_model=schemas.Appointment)
def create_appointment(appointment: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    return crud.create_appointment(db, appointment=appointment)

@router.get("/", response_model=List[schemas.Appointment])
def read_appointments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    appointments = crud.get_appointments(db, skip=skip, limit=limit)
    return appointments

@router.patch("/{appointment_id}/status", response_model=schemas.Appointment)
def update_status(appointment_id: int, status: str, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    appointment = crud.update_appointment_status(db, appointment_id=appointment_id, status=status)
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return appointment
