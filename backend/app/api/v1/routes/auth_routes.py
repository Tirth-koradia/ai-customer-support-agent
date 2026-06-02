from fastapi import APIRouter, HTTPException
from app.core.security import hash_password
from app.db.database import users_collection

router = APIRouter(prefix="/auth")

@router.post("/register")
def register(email: str, password: str):
    if users_collection.find_one({"email": email}):
        raise HTTPException(status_code=400, detail="User already exists")

    users_collection.insert_one({
        "email": email,
        "hashed_password": hash_password(password),
        "role": "customer"
    })

    return {"message": "User created successfully"}
