import json
from datetime import datetime

from sqlalchemy import select
from sqlalchemy.orm import Session

from .. import models


class UserRepo:
    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email: str):
        return self.db.scalar(select(models.User).where(models.User.email == email.lower()))

    def create(self, name: str, email: str, password_hash: str):
        user = models.User(name=name, email=email.lower(), password_hash=password_hash)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user


class RefreshTokenRepo:
    def __init__(self, db: Session):
        self.db = db

    def create(self, user_id: str, token: str):
        record = models.RefreshToken(user_id=user_id, token=token)
        self.db.add(record)
        self.db.commit()
        return record

    def get(self, token: str):
        return self.db.scalar(select(models.RefreshToken).where(models.RefreshToken.token == token))


class SchemeRepo:
    def __init__(self, db: Session):
        self.db = db

    def list(self, category: str | None = None):
        q = select(models.Scheme)
        if category and category != 'all':
            q = q.where(models.Scheme.category == category)
        rows = self.db.scalars(q).all()
        return [
            {
                'id': row.id,
                'name': row.name,
                'category': row.category,
                'description': row.description,
                'benefit': row.benefit,
                'eligible': row.eligible,
            }
            for row in rows
        ]


class LocationRepo:
    def __init__(self, db: Session):
        self.db = db

    def list(self, q: str | None, type_: str | None):
        rows = self.db.scalars(select(models.Location)).all()
        items = []
        for row in rows:
            if type_ and type_ != 'all' and row.type != type_:
                continue
            if q and q.lower() not in row.location.lower() and q.lower() not in row.name.lower():
                continue
            items.append(
                {
                    'id': row.id,
                    'name': row.name,
                    'location': row.location,
                    'distance': row.distance,
                    'hours': row.hours,
                    'services': json.loads(row.services),
                    'type': row.type,
                    'rating': row.rating,
                    'phone': row.phone,
                }
            )
        return items


class GrievanceRepo:
    def __init__(self, db: Session):
        self.db = db

    def list(self):
        rows = self.db.scalars(select(models.Grievance)).all()
        return [
            {
                'id': row.id,
                'title': row.title,
                'category': row.category,
                'status': row.status,
                'date': row.date,
                'priority': row.priority,
                'description': row.description,
            }
            for row in rows
        ]

    def create(self, title: str, category: str, priority: str, description: str):
        item = models.Grievance(
            id=f"GRV{int(datetime.utcnow().timestamp())}",
            title=title,
            category=category,
            status='Pending Review',
            date=datetime.utcnow().date().isoformat(),
            priority=priority,
            description=description,
        )
        self.db.add(item)
        self.db.commit()
        self.db.refresh(item)
        return {
            'id': item.id,
            'title': item.title,
            'category': item.category,
            'status': item.status,
            'date': item.date,
            'priority': item.priority,
            'description': item.description,
        }


class ContentRepo:
    def __init__(self, db: Session):
        self.db = db

    def faqs(self):
        rows = self.db.scalars(select(models.FAQ)).all()
        return [{'id': row.id, 'question': row.question, 'answer': row.answer} for row in rows]

    def spotlight(self):
        rows = self.db.scalars(select(models.Spotlight)).all()
        return [{'id': row.id, 'title': row.title, 'source': row.source, 'time': row.time, 'tag': row.tag} for row in rows]


class ContactRepo:
    def __init__(self, db: Session):
        self.db = db

    def create(self, name: str, email: str, message: str, type_: str):
        row = models.ContactMessage(name=name, email=email, message=message, type=type_)
        self.db.add(row)
        self.db.commit()
        self.db.refresh(row)
        return row


class AuditRepo:
    def __init__(self, db: Session):
        self.db = db

    def write(self, method: str, path: str, status_code: int, client_ip: str, message: str | None = None):
        log = models.AuditLog(method=method, path=path, status_code=status_code, client_ip=client_ip, message=message)
        self.db.add(log)
        self.db.commit()
