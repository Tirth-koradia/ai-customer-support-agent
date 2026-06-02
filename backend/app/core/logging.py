from fastapi import HTTPException
from security import verify_password
from jwt_utils import create_access_token

@router.post("/login")
def login(email: str, password: str):
    user = users_collection.find_one({"email": email})

    if not user or not verify_password(password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({
        "sub": user["email"],
        "role": user["role"]
    })

    return {"access_token": token, "token_type": "bearer"}


from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from jose import jwt

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    return payload


@app.get("/protected")
def protected(user=Depends(get_current_user)):
    return {"message": f"Hello {user['sub']}"}
