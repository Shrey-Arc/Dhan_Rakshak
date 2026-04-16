import json

from sqlalchemy.orm import Session

from .. import models


def ensure_seed_data(db: Session) -> None:
    if not db.query(models.Scheme).first():
        db.add_all([
            models.Scheme(
                id='sch_1',
                name='PM-KISAN',
                category='agriculture',
                description='Direct income support to eligible farmer families.',
                benefit='₹6,000 per year in installments',
                eligible='Small and marginal farmers with valid land records',
            ),
            models.Scheme(
                id='sch_2',
                name='PMAY',
                category='housing',
                description='Affordable housing support with credit-linked subsidy.',
                benefit='Interest subsidy on home loan',
                eligible='Economically weaker sections and low-income groups',
            ),
            models.Scheme(
                id='sch_3',
                name='Stand-Up India',
                category='business',
                description='Loans for SC/ST and women entrepreneurs starting greenfield ventures.',
                benefit='Bank loans from ₹10 lakh to ₹1 crore',
                eligible='SC/ST or women entrepreneurs above 18 years',
            ),
        ])

    if not db.query(models.Location).first():
        db.add_all([
            models.Location(
                id='loc_1',
                name='CSC Seva Kendra',
                location='Ram Nagar, Jaipur',
                distance='1.2 km',
                hours='9:00 AM - 6:00 PM',
                services=json.dumps(['Tax Filing', 'Aadhar', 'Bill Payment']),
                type='csc',
                rating=4.8,
                phone='+91-1234567890',
            ),
            models.Location(
                id='loc_2',
                name='SBI Branch',
                location='City Center, Jaipur',
                distance='2.1 km',
                hours='10:00 AM - 4:00 PM',
                services=json.dumps(['Savings', 'Loans', 'Insurance']),
                type='bank',
                rating=4.6,
                phone='+91-9876543210',
            ),
            models.Location(
                id='loc_3',
                name='District Tax Help Center',
                location='Collectorate Road, Jaipur',
                distance='3.4 km',
                hours='9:30 AM - 5:30 PM',
                services=json.dumps(['ITR Help', 'PAN Support', 'Consultation']),
                type='csc',
                rating=4.7,
                phone='+91-9000000000',
            ),
        ])

    if not db.query(models.FAQ).first():
        db.add_all([
            models.FAQ(id='faq_1', question='How do I use DhanRakshak?', answer='Use smart search on home or open any service page directly.'),
            models.FAQ(id='faq_2', question='Is this free?', answer='Core guidance features are free to use.'),
        ])

    if not db.query(models.Spotlight).first():
        db.add(
            models.Spotlight(
                id='news_1',
                title='New subsidy cycle announced for farmers',
                source='Govt. Bulletin',
                time='Today',
                tag='Alert',
            )
        )

    db.commit()
