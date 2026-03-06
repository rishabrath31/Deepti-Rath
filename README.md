# LIC Financial Advisor Portfolio Website

A premium, production-quality portfolio website for a professional LIC Financial Advisor.

## Features
- **Modern Landing Page**: Hero section, About, Insurance Plans, and Testimonials.
- **Financial Calculators**: Interactive investment growth and maturity calculators.
- **Appointment Booking**: Integrated calendar-style booking system.
- **Admin Dashboard**: Secure advisor portal for managing inquiries and appointments.
- **Micro-animations**: Smooth transitions using Framer Motion.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## Tech Stack
- **Frontend**: Next.js 15, TailwindCSS 4, Framer Motion, Lucide Icons.
- **Backend**: FastAPI (Python), SQLAlchemy, PostgreSQL.
- **Security**: JWT-based Authentication.
- **Infrastructure**: Docker & Docker Compose.

## Getting Started

### Prerequisites
- Docker and Docker Compose installed.

### Local Development Setup
1. Clone the repository.
2. Navigate to the root directory.
3. Run the following command:
   ```bash
   docker-compose up --build
   ```
4. Access the applications:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - API Docs: `http://localhost:8000/docs`

### Manual Installation (Local Testing)
The project is configured to fallback to **SQLite** automatically if PostgreSQL is not detected, making it easy to test locally immediately.

#### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python init_db.py  # Created default admin: admin@example.com / admin123
uvicorn app.main:app --reload
```

#### Frontend
```bash
cd frontend
npm install
npm run dev  # Use this for development (http://localhost:3000)
```

## Admin Access
- **URL**: `http://localhost:3000/admin`
- **Email**: `admin@example.com`
- **Password**: `admin123`


## Architecture
The project follows a modular architecture:
- `/backend`: FastAPI service layer, models, and API endpoints.
- `/frontend`: Next.js components and app router.
- `/docker`: Dockerfiles and configuration.

## License
MIT License
