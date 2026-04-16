from datetime import datetime
import uuid

from sqlalchemy import Boolean, DateTime, Float, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from .core.database import Base


class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class User(Base, TimestampMixin):
    __tablename__ = 'users'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(255), unique=True)
    phone: Mapped[str | None] = mapped_column(String(20), nullable=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    preferred_language: Mapped[str] = mapped_column(String(12), default='en-IN')


class RefreshToken(Base, TimestampMixin):
    __tablename__ = 'refresh_tokens'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id: Mapped[str] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'))
    token: Mapped[str] = mapped_column(String(500), unique=True)
    is_revoked: Mapped[bool] = mapped_column(Boolean, default=False)


class Scheme(Base):
    __tablename__ = 'schemes'

    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
    category: Mapped[str] = mapped_column(String(100))
    description: Mapped[str] = mapped_column(Text)
    benefit: Mapped[str] = mapped_column(String(255))
    eligible: Mapped[str] = mapped_column(String(255))


class Location(Base):
    __tablename__ = 'locations'

    id: Mapped[str] = mapped_column(String, primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
    location: Mapped[str] = mapped_column(String(255))
    distance: Mapped[str] = mapped_column(String(30))
    hours: Mapped[str] = mapped_column(String(80))
    services: Mapped[str] = mapped_column(Text)
    type: Mapped[str] = mapped_column(String(20))
    rating: Mapped[float] = mapped_column(Float)
    phone: Mapped[str] = mapped_column(String(30))


class Grievance(Base, TimestampMixin):
    __tablename__ = 'grievances'

    id: Mapped[str] = mapped_column(String, primary_key=True)
    title: Mapped[str] = mapped_column(String(255))
    category: Mapped[str] = mapped_column(String(80))
    status: Mapped[str] = mapped_column(String(80))
    date: Mapped[str] = mapped_column(String(20))
    priority: Mapped[str] = mapped_column(String(40))
    description: Mapped[str] = mapped_column(Text)


class FAQ(Base):
    __tablename__ = 'faqs'

    id: Mapped[str] = mapped_column(String, primary_key=True)
    question: Mapped[str] = mapped_column(Text)
    answer: Mapped[str] = mapped_column(Text)


class Spotlight(Base):
    __tablename__ = 'spotlight'

    id: Mapped[str] = mapped_column(String, primary_key=True)
    title: Mapped[str] = mapped_column(Text)
    source: Mapped[str] = mapped_column(String(120))
    time: Mapped[str] = mapped_column(String(80))
    tag: Mapped[str] = mapped_column(String(80))


class ContactMessage(Base, TimestampMixin):
    __tablename__ = 'contact_messages'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(255))
    message: Mapped[str] = mapped_column(Text)
    type: Mapped[str] = mapped_column(String(50))


class AuditLog(Base, TimestampMixin):
    __tablename__ = 'audit_logs'

    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    method: Mapped[str] = mapped_column(String(10))
    path: Mapped[str] = mapped_column(String(255))
    status_code: Mapped[int] = mapped_column()
    client_ip: Mapped[str] = mapped_column(String(64))
    message: Mapped[str | None] = mapped_column(Text, nullable=True)
