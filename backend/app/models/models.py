from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.session import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=True)

class InsurancePlan(Base):
    __tablename__ = "insurance_plans"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String)  # Life, Child, Retirement, etc.
    features = Column(Text)  # JSON or comma-separated
    created_at = Column(DateTime, default=datetime.utcnow)

class Appointment(Base):
    __tablename__ = "appointments"
    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String, nullable=False)
    client_email = Column(String, nullable=False)
    client_phone = Column(String, nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    time_slot = Column(String, nullable=False)
    message = Column(Text)
    status = Column(String, default="pending")  # pending, confirmed, cancelled
    created_at = Column(DateTime, default=datetime.utcnow)

class BlogPost(Base):
    __tablename__ = "blog_posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True)
    content = Column(Text, nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"))
    published_at = Column(DateTime, default=datetime.utcnow)
    is_published = Column(Boolean, default=True)
    
    author = relationship("User")

class Testimonial(Base):
    __tablename__ = "testimonials"
    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    rating = Column(Integer, default=5)
    created_at = Column(DateTime, default=datetime.utcnow)

class Inquiry(Base):
    __tablename__ = "inquiries"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String)
    subject = Column(String)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
