from datetime import datetime

schemes = [
    {
        "id": "sch_1",
        "name": "PM-KISAN",
        "category": "agriculture",
        "description": "Direct income support to farmers",
        "benefit": "₹6,000 per year",
        "eligible": "Small and marginal farmers",
    },
    {
        "id": "sch_2",
        "name": "Mudra Loan",
        "category": "business",
        "description": "Business loans for entrepreneurs",
        "benefit": "Up to ₹10 lakhs",
        "eligible": "New entrepreneurs",
    },
]

locations = [
    {
        "id": "loc_1",
        "name": "Ram Nagar CSC",
        "location": "Ram Nagar, Jaipur",
        "distance": "2.5 km",
        "hours": "9:00 AM - 6:00 PM",
        "services": ["Tax Filing", "Bill Payment", "Aadhar"],
        "type": "csc",
        "rating": 4.8,
        "phone": "+91-1234567890",
    },
    {
        "id": "loc_2",
        "name": "State Bank of India",
        "location": "City Center, Jaipur",
        "distance": "1.2 km",
        "hours": "10:00 AM - 4:00 PM",
        "services": ["Loans", "Savings Account", "Investment"],
        "type": "bank",
        "rating": 4.6,
        "phone": "+91-9876543210",
    },
]

grievances = [
    {
        "id": "GRV001",
        "title": "Incorrect Tax Assessment",
        "category": "Taxation",
        "status": "In Progress",
        "date": "2024-04-10",
        "priority": "High",
        "description": "Assessment shows incorrect income source",
    },
]

faqs = [
    {
        "id": "faq_1",
        "question": "How do I get started with DhanRakshak?",
        "answer": "Create an account and ask your first question in the AI search bar.",
    }
]

spotlight = [
    {
        "id": "news_1",
        "title": "PM-KISAN Installment Released",
        "source": "PIB",
        "time": "2 hours ago",
        "tag": "Government Alert",
    }
]


def new_grievance_id() -> str:
    return f"GRV{len(grievances) + 1:03d}"


def now_iso() -> str:
    return datetime.utcnow().isoformat()
