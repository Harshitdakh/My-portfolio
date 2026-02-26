from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import json
import os

# Import your local files
from database import SessionLocal, init_db, Prescription
from services.ocr_service import extract_prescription_details

app = FastAPI(title="Medify AI Backend")
@app.get("/")
def home():
    return {
        "status": "online",
        "project": "Medify AI",
        "version": "1.0.0",
        "endpoints": {
            "scan": "/scan (POST)",
            "history": "/history (GET)",
            "docs": "/docs (Interactive UI)"
        }
    }

# 1. FIX: Added CORS back so Frontend can talk to Backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database
init_db()

# Dependency for Database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/scan")
async def scan_prescription(file: UploadFile = File(...), db: Session = Depends(get_db)):
    try:
        # 1. Get AI Result (String)
        image_bytes = await file.read()
        ai_json_string = extract_prescription_details(image_bytes)
        
        # 2. FIX: Convert String to Dictionary
        data = json.loads(ai_json_string)

        if "error" in data:
            return {"status": "error", "message": data["error"]}

        # 3. Save to SQLite Database
        new_entry = Prescription(
            medication=data.get("medication", "Unknown"),
            dosage=data.get("dosage", "N/A"),
            frequency=data.get("frequency", "N/A")
        )
        db.add(new_entry)
        db.commit()
        db.refresh(new_entry)

        # 4. Return formatted data to Frontend
        return {
            "status": "success",
            "data": {
                "id": f"MED-{new_entry.id}", # Uses DB ID for uniqueness
                "medication": new_entry.medication,
                "dosage": new_entry.dosage,
                "frequency": new_entry.frequency,
                "date": new_entry.date_scanned.strftime("%Y-%m-%d")
            }
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.get("/history")
async def get_history(db: Session = Depends(get_db)):
    # Returns all saved prescriptions from medify.db
    return db.query(Prescription).all()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)