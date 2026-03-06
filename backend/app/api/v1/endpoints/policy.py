from fastapi import APIRouter, Depends, HTTPException, Header
import httpx
from typing import Optional
from app.schemas.schemas import PolicyVerificationRequest

router = APIRouter()

APISETU_URL = "https://sandbox.api-setu.in/certificate/v3/licindia/podoc"

@router.post("/verify")
async def verify_policy(
    request_data: PolicyVerificationRequest,
    x_apisetu_apikey: str = Header("demokey123456ABCD789"),
    x_apisetu_clientid: str = Header("in.gov.sandbox")
):
    """
    Verify LIC Policy Document using API Setu Sandbox.
    """
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-APISETU-APIKEY": x_apisetu_apikey,
        "X-APISETU-CLIENTID": x_apisetu_clientid
    }
    
    async with httpx.AsyncClient() as client:
        try:
            # Prepare the payload to match API Setu requirement exactly
            # We use the request_data as is, but pydantic might need to_json
            payload = request_data.model_dump()
            
            # API Setu expects 'from' which is a reserved keyword in python, 
            # so we might need to adjust the schema if they strictly enforce it.
            # In our schema we used 'from_date', let's fix it for the payload.
            if "consentArtifact" in payload:
                consent = payload["consentArtifact"]["consent"]
                if "permission" in consent:
                    if "dateRange" in consent["permission"]:
                        dr = consent["permission"]["dateRange"]
                        if "from_date" in dr:
                            dr["from"] = dr.pop("from_date")
                        if "to_date" in dr:
                            dr["to"] = dr.pop("to_date")

            response = await client.post(
                APISETU_URL,
                json=payload,
                headers=headers
            )
            
            if response.status_code != 200:
                raise HTTPException(
                    status_code=response.status_code, 
                    detail=f"API Setu Error: {response.text}"
                )
            
            return response.json()
            
        except httpx.RequestError as exc:
            raise HTTPException(status_code=500, detail=f"HTTP Request failed: {exc}")
