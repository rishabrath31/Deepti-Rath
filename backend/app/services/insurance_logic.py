import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "plan_data.json")

def load_plan_data():
    with open(DATA_PATH, "r") as f:
        return json.load(f)

def calculate_lic_maturity(plan_code: str, term: int, sum_assured: float):
    plan_data = load_plan_data().get(plan_code)
    if not plan_data:
        return None
    
    # Simple Maturity Calculation: Sum Assured + (Bonus * Term * SA/1000) + (FAB * SA/1000)
    bonus_rate = plan_data.get("bonus_per_1000", 0)
    total_bonus = (bonus_rate * sum_assured / 1000) * term
    
    fab_rate = 0
    for fab in plan_data.get("fab_rates", []):
        if fab["min_term"] <= term <= fab["max_term"]:
            fab_rate = fab["rate"]
            break
            
    total_fab = (fab_rate * sum_assured / 1000)
    
    maturity_value = sum_assured + total_bonus + total_fab
    
    return {
        "sum_assured": sum_assured,
        "bonus": round(total_bonus, 2),
        "fab": round(total_fab, 2),
        "total_maturity": round(maturity_value, 2)
    }

def calculate_lic_premium(plan_code: str, age: int, term: int, sum_assured: float, mode: str = "yearly"):
    plan_data = load_plan_data().get(plan_code)
    if not plan_data:
        return None
    
    # Get base rate (per 1000 SA)
    age_str = str(age)
    term_str = str(term)
    
    rates = plan_data.get("base_premium_rates", {})
    base_rate = rates.get(age_str, {}).get(term_str)
    
    if base_rate is None:
        # Fallback approximation if exact rate not in sample table
        base_rate = 50.0 
    
    annual_premium = (base_rate * sum_assured / 1000)
    
    # Mode discounts (indicative)
    mode_multipliers = {
        "yearly": 1.0,
        "half_yearly": 0.51,
        "quarterly": 0.26,
        "monthly": 0.088
    }
    
    premium = annual_premium * mode_multipliers.get(mode, 1.0)
    
    # Add GST (approx 4.5% for first year, 2.25% for subsequent - taking 4.5% for simple estimate)
    gst = premium * 0.045
    
    return {
        "base_premium": round(premium, 2),
        "gst": round(gst, 2),
        "total_premium": round(premium + gst, 2),
        "mode": mode
    }
