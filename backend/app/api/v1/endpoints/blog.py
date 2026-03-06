from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.schemas import schemas
from app.services import crud
from app.api.v1.endpoints.auth import get_current_user
from app.models import models

router = APIRouter()

@router.get("/", response_model=List[schemas.BlogPost])
def read_posts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    posts = crud.get_blog_posts(db, skip=skip, limit=limit)
    return posts

@router.post("/", response_model=schemas.BlogPost)
def create_post(post: schemas.BlogPostCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    return crud.create_blog_post(db, post=post, author_id=current_user.id)
