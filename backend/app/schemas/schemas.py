from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    is_admin: bool

    class Config:
        from_attributes = True

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# Insurance Plan Schemas
class InsurancePlanBase(BaseModel):
    title: str
    description: str
    category: str
    features: Optional[str] = None

class InsurancePlanCreate(InsurancePlanBase):
    pass

class InsurancePlan(InsurancePlanBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Appointment Schemas
class AppointmentBase(BaseModel):
    client_name: str
    client_email: EmailStr
    client_phone: str
    appointment_date: datetime
    time_slot: str
    message: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    pass

class Appointment(AppointmentBase):
    id: int
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

# Blog Post Schemas
class BlogPostBase(BaseModel):
    title: str
    slug: str
    content: str
    category: Optional[str] = "General"
    is_published: Optional[bool] = True

class BlogPostCreate(BlogPostBase):
    pass

class BlogPost(BlogPostBase):
    id: int
    author_id: int
    published_at: datetime

    class Config:
        from_attributes = True

# Testimonial Schemas
class TestimonialBase(BaseModel):
    client_name: str
    content: str
    rating: int = 5

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Inquiry Schemas
class InquiryBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str

class InquiryCreate(InquiryBase):
    pass

class Inquiry(InquiryBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
# Policy Verification Schemas
class ConsentUser(BaseModel):
    idType: str
    idNumber: str
    mobile: str
    email: EmailStr

class ConsentPurpose(BaseModel):
    description: str

class ConsentData(BaseModel):
    id: str

class ConsentPermissionRange(BaseModel):
    from_date: datetime
    to_date: datetime

class ConsentPermissionFrequency(BaseModel):
    unit: str
    value: int
    repeats: int

class ConsentPermission(BaseModel):
    access: str
    dateRange: ConsentPermissionRange
    frequency: ConsentPermissionFrequency

class ConsentDetail(BaseModel):
    consentId: str
    timestamp: datetime
    dataConsumer: ConsentData
    dataProvider: ConsentData
    purpose: ConsentPurpose
    user: ConsentUser
    data: ConsentData
    permission: ConsentPermission

class ConsentArtifact(BaseModel):
    consent: ConsentDetail
    signature: dict

class PolicyCertificateParameters(BaseModel):
    PolDOB: str
    PolicyNo: str
    FullName: str
    DOB: str

class PolicyVerificationRequest(BaseModel):
    txnId: str
    format: str = "pdf"
    certificateParameters: PolicyCertificateParameters
    consentArtifact: ConsentArtifact
