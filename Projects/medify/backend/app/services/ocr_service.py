import os
from google import genai
from google.genai import types
from dotenv import load_dotenv
from pathlib import Path

# Load .env
env_path = Path(__file__).resolve().parent.parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

def extract_prescription_details(image_bytes):
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return '{"error": "GEMINI_API_KEY missing"}'

    # Initialize the NEW 2026 Client
    client = genai.Client(api_key=api_key)

    try:
        # Using gemini-2.0-flash (the most stable 2026 free-tier model)
        response = client.models.generate_content(
            model='gemini-2.0-flash',
            contents=[
                "Extract medication, dosage, and frequency from this image. Return ONLY JSON.",
                types.Part.from_bytes(data=image_bytes, mime_type='image/jpeg')
            ]
        )

        # Clean JSON markdown blocks
        clean_json = response.text.replace('```json', '').replace('```', '').strip()
        print(f"DEBUG: AI Success -> {clean_json}")
        return clean_json

    except Exception as e:
        print(f"NEW SDK ERROR: {str(e)}")
        return f'{{"error": "{str(e)}"}}'