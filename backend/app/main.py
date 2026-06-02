from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routes import auth_routes

app = FastAPI(title="AI Customer Support")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ INCLUDE ONCE WITH VERSIONING
app.include_router(
    auth_routes.router,
    prefix="/api/v1",
    tags=["Auth"]
)

@app.get("/")
def root():
    return {"message": "AI Customer Support API"}
