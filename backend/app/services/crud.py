from sqlalchemy.orm import Session
from app.models import models
from app.schemas import schemas
from app.core.security import get_password_hash
from datetime import datetime

# User Services
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        hashed_password=hashed_password,
        full_name=user.full_name
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Insurance Plan Services
def get_plans(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.InsurancePlan).offset(skip).limit(limit).all()

def create_plan(db: Session, plan: schemas.InsurancePlanCreate):
    db_plan = models.InsurancePlan(**plan.dict())
    db.add(db_plan)
    db.commit()
    db.refresh(db_plan)
    return db_plan

# Appointment Services
def get_appointments(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Appointment).order_by(models.Appointment.appointment_date.desc()).offset(skip).limit(limit).all()

def create_appointment(db: Session, appointment: schemas.AppointmentCreate):
    db_appointment = models.Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

def update_appointment_status(db: Session, appointment_id: int, status: str):
    db_appointment = db.query(models.Appointment).filter(models.Appointment.id == appointment_id).first()
    if db_appointment:
        db_appointment.status = status
        db.commit()
        db.refresh(db_appointment)
    return db_appointment

# Blog Services
def get_blog_posts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.BlogPost).filter(models.BlogPost.is_published == True).offset(skip).limit(limit).all()

def create_blog_post(db: Session, post: schemas.BlogPostCreate, author_id: int):
    db_post = models.BlogPost(**post.dict(), author_id=author_id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

# Testimonial Services
def get_testimonials(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Testimonial).offset(skip).limit(limit).all()

def create_testimonial(db: Session, testimonial: schemas.TestimonialCreate):
    db_testimonial = models.Testimonial(**testimonial.dict())
    db.add(db_testimonial)
    db.commit()
    db.refresh(db_testimonial)
    return db_testimonial

# Inquiry Services
def get_inquiries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inquiry).order_by(models.Inquiry.created_at.desc()).offset(skip).limit(limit).all()

def create_inquiry(db: Session, inquiry: schemas.InquiryCreate):
    db_inquiry = models.Inquiry(**inquiry.dict())
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry
