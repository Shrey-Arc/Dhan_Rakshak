import json

from app.core.database import Base, SessionLocal, engine
from app import models


def run_seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        if not db.query(models.Scheme).first():
            db.add_all([
                models.Scheme(id='sch_1', name='PM-KISAN', category='agriculture', description='Direct income support to farmers', benefit='₹6,000 per year', eligible='Small and marginal farmers'),
                models.Scheme(id='sch_2', name='Mudra Loan', category='business', description='Business loans for entrepreneurs', benefit='Up to ₹10 lakhs', eligible='New entrepreneurs'),
            ])

        if not db.query(models.Location).first():
            db.add_all([
                models.Location(id='loc_1', name='Ram Nagar CSC', location='Ram Nagar, Jaipur', distance='2.5 km', hours='9:00 AM - 6:00 PM', services=json.dumps(['Tax Filing', 'Bill Payment', 'Aadhar']), type='csc', rating=4.8, phone='+91-1234567890'),
                models.Location(id='loc_2', name='State Bank of India', location='City Center, Jaipur', distance='1.2 km', hours='10:00 AM - 4:00 PM', services=json.dumps(['Loans', 'Savings Account', 'Investment']), type='bank', rating=4.6, phone='+91-9876543210'),
            ])

        if not db.query(models.FAQ).first():
            db.add(models.FAQ(id='faq_1', question='How do I get started with DhanRakshak?', answer='Create an account and ask your first question in the AI search bar.'))

        if not db.query(models.Spotlight).first():
            db.add(models.Spotlight(id='news_1', title='PM-KISAN Installment Released', source='PIB', time='2 hours ago', tag='Government Alert'))

        db.commit()
        print('Seed completed.')
    finally:
        db.close()


if __name__ == '__main__':
    run_seed()
