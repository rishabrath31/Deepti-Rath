from sqlalchemy.orm import Session
from app.db.session import SessionLocal, engine, Base
from app.models.models import User
from app.core.security import get_password_hash

def init_db():
    # Create tables
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        # Check if admin already exists
        admin = db.query(User).filter(User.email == "admin@example.com").first()
        if not admin:
            admin_user = User(
                email="admin@example.com",
                hashed_password=get_password_hash("admin123"),
                full_name="LIC Advisor Admin",
                is_admin=True
            )
            db.add(admin_user)
            db.commit()
            print("Admin user created: admin@example.com / admin123")
        else:
            print("Admin user already exists.")
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
