from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class InsuranceNeedsInput(BaseModel):
    monthly_expenses: float
    current_liabilities: float
    existing_insurance: float
    years_to_protect: int = 20
    inflation_rate: float = 6.0

@router.post("/insurance-coverage")
def calculate_insurance_needs(data: InsuranceNeedsInput):
    # Human Life Value (HLV) simplified method
    # Future Value of Expenses + Liabilities - Existing Assets
    annual_expenses = data.monthly_expenses * 12
    # Simple multiplier or PV of annuity can be used
    total_needed = (annual_expenses * data.years_to_protect) + data.current_liabilities
    final_need = max(0, total_needed - data.existing_insurance)
    return {
        "required_coverage": round(final_need, 2),
        "suggested_plan": "Term Insurance" if final_need > 5000000 else "Endowment/Whole Life"
    }

class RetirementInput(BaseModel):
    current_age: int
    retirement_age: int
    monthly_expenses: float
    expected_inflation: float = 6.0
    post_retirement_return: float = 7.0

@router.post("/retirement-corpus")
def calculate_retirement_corpus(data: RetirementInput):
    years_to_retirement = data.retirement_age - data.current_age
    if years_to_retirement <= 0:
        raise HTTPException(status_code=400, detail="Retirement age must be greater than current age")
    
    # Inflated expenses at retirement
    inflated_monthly_expenses = data.monthly_expenses * ((1 + data.expected_inflation/100) ** years_to_retirement)
    annual_expenses_at_retirement = inflated_monthly_expenses * 12
    
    # Safe withdrawal rate logic (approximate corpus)
    # Corpus = Annual Expense / (Inflation Adjusted Return)
    real_return = ((1 + data.post_retirement_return/100) / (1 + data.expected_inflation/100)) - 1
    corpus_needed = annual_expenses_at_retirement / real_return
    
    return {
        "corpus_needed": round(corpus_needed, 2),
        "monthly_expenses_at_retirement": round(inflated_monthly_expenses, 2)
    }

class ChildEducationInput(BaseModel):
    child_current_age: int
    education_start_age: int = 18
    current_education_cost: float
    education_inflation: float = 10.0

@router.post("/child-education")
def calculate_child_education(data: ChildEducationInput):
    years_to_college = data.education_start_age - data.child_current_age
    if years_to_college < 0:
        raise HTTPException(status_code=400, detail="Education start age must be >= current age")
    
    future_cost = data.current_education_cost * ((1 + data.education_inflation/100) ** years_to_college)
    
    return {
        "future_cost": round(future_cost, 2),
        "years_to_save": years_to_college
    }
