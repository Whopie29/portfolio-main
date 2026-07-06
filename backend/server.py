from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email integration (Emergent-managed Resend proxy)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Portfolio")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "gauravmalik81809@gmail.com")

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(default="Portfolio Contact", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


def build_owner_email_html(payload: ContactMessage) -> str:
    safe_msg = payload.message.replace("\n", "<br/>")
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#020617;padding:24px;font-family:Arial,sans-serif;color:#F8FAFC;">
      <tr><td>
        <table width="100%" style="max-width:640px;margin:0 auto;background:#0B1220;border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">
          <tr><td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <div style="font-size:12px;letter-spacing:0.24em;color:#00E5FF;text-transform:uppercase;">New Portfolio Message</div>
            <div style="font-size:22px;font-weight:700;margin-top:6px;color:#F8FAFC;">{payload.subject or 'Portfolio Contact'}</div>
          </td></tr>
          <tr><td style="padding:20px 24px;">
            <p style="margin:0 0 10px 0;color:#94A3B8;font-size:13px;">From</p>
            <p style="margin:0 0 4px 0;font-size:16px;color:#F8FAFC;">{payload.name}</p>
            <p style="margin:0 0 16px 0;font-size:14px;color:#00E5FF;">{payload.email}</p>
            <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:16px 0;"/>
            <p style="margin:0 0 8px 0;color:#94A3B8;font-size:13px;">Message</p>
            <div style="font-size:15px;line-height:1.6;color:#E2E8F0;background:rgba(255,255,255,0.03);padding:16px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);">{safe_msg}</div>
          </td></tr>
          <tr><td style="padding:16px 24px;background:rgba(0,229,255,0.04);border-top:1px solid rgba(0,229,255,0.15);">
            <p style="margin:0;font-size:12px;color:#64748B;">Sent via gauravmalik.dev portfolio contact form</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


def build_visitor_ack_html(name: str) -> str:
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#020617;padding:24px;font-family:Arial,sans-serif;color:#F8FAFC;">
      <tr><td>
        <table width="100%" style="max-width:600px;margin:0 auto;background:#0B1220;border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
          <tr><td style="padding:24px;">
            <div style="font-size:12px;letter-spacing:0.24em;color:#00E5FF;text-transform:uppercase;">Message Received</div>
            <h1 style="margin:8px 0 12px 0;font-size:24px;color:#F8FAFC;">Thanks, {name}!</h1>
            <p style="margin:0 0 12px 0;font-size:15px;line-height:1.6;color:#CBD5E1;">Your message just landed in my inbox. I&#39;ll get back to you as soon as I can — usually within 48 hours.</p>
            <p style="margin:16px 0 0 0;font-size:14px;color:#94A3B8;">— Gaurav Malik</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def send_email(to_email: str, subject: str, html_content: str, reply_to: Optional[str] = None):
    if not EMAIL_KEY:
        raise HTTPException(status_code=500, detail="Email service not configured")
    payload = {
        "to": [to_email],
        "subject": subject,
        "html": html_content,
        "from_name": EMAIL_FROM_NAME,
    }
    if reply_to:
        payload["contact_email"] = reply_to
    async with httpx.AsyncClient(timeout=30) as hc:
        resp = await hc.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


# Routes
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is live"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/contact")
async def submit_contact(payload: ContactMessage):
    # Persist submission
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "subject": payload.subject or "Portfolio Contact",
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    try:
        await db.contact_messages.insert_one(doc)
    except Exception as e:
        logger.error(f"Failed to persist contact message: {e}")

    # Send email to owner
    try:
        owner_subject = f"[Portfolio] {payload.subject or 'New message'} — {payload.name}"
        await send_email(
            to_email=OWNER_EMAIL,
            subject=owner_subject,
            html_content=build_owner_email_html(payload),
            reply_to=payload.email,
        )
    except httpx.HTTPStatusError as e:
        logger.error(f"Owner email failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send message. Please try again shortly.")
    except Exception as e:
        logger.error(f"Owner email exception: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message")

    # Fire-and-forget visitor acknowledgement (do not fail request if this fails)
    try:
        await send_email(
            to_email=payload.email,
            subject="Thanks for reaching out — Gaurav Malik",
            html_content=build_visitor_ack_html(payload.name),
        )
    except Exception as e:
        logger.warning(f"Ack email skipped: {e}")

    return {"status": "success", "message": "Your message has been sent."}


@api_router.get("/profile")
async def get_profile():
    return {
        "name": "Gaurav Malik",
        "tagline": "AI/ML Engineer  ·  CS-AIML Undergraduate",
        "location": "Greater Noida, India",
        "email": "gauravmalik81809@gmail.com",
        "phone": "+91 8595511754",
        "links": {
            "github": "https://github.com/Whopie29",
            "linkedin": "https://www.linkedin.com/in/gauravmalik29/",
            "leetcode": "https://leetcode.com/u/Whopie/",
            "gfg": "https://www.geeksforgeeks.org/profile/gauravmallz0v",
            "codolio": "https://codolio.com/profile/JNePbOod",
        },
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
