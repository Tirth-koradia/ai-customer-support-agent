from fastapi import APIRouter, Depends, HTTPException
from app.core.jwt_utils import get_current_user

router = APIRouter()

@router.get("/admin")
def admin_only(user=Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Forbidden")
    return {"message": "Welcome Admin"}
