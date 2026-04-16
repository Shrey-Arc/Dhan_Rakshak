from app.core.database import Base, SessionLocal, engine
from app.core.bootstrap import ensure_seed_data


def run_seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        ensure_seed_data(db)
        print('Seed completed.')
    finally:
        db.close()


if __name__ == '__main__':
    run_seed()
