from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_grievance_create_and_list():
    create = client.post(
        '/api/v1/grievances',
        json={
            'title': 'Issue with scheme eligibility',
            'category': 'Schemes',
            'priority': 'High',
            'description': 'Unable to apply despite matching criteria and valid documents.',
        },
    )
    assert create.status_code == 200
    grievance_id = create.json()['id']

    listed = client.get('/api/v1/grievances')
    assert listed.status_code == 200
    assert any(item['id'] == grievance_id for item in listed.json()['items'])
