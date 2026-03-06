from fastapi import APIRouter
from app.api.v1.endpoints import auth, plans, appointments, blog, testimonials, inquiries, calculators, policy

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(plans.router, prefix="/plans", tags=["plans"])
api_router.include_router(appointments.router, prefix="/appointments", tags=["appointments"])
api_router.include_router(blog.router, prefix="/blog", tags=["blog"])
api_router.include_router(testimonials.router, prefix="/testimonials", tags=["testimonials"])
api_router.include_router(inquiries.router, prefix="/inquiries", tags=["inquiries"])
api_router.include_router(calculators.router, prefix="/calculators", tags=["calculators"])
api_router.include_router(policy.router, prefix="/policy", tags=["policy"])
