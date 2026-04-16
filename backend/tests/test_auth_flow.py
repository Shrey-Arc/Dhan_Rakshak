from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_signup_login_refresh_flow():
    signup = client.post('/api/v1/auth/signup', json={'name': 'Test User', 'email': 'test@example.com', 'password': 'StrongPass123'})
    assert signup.status_code in (200, 409)

    login = client.post('/api/v1/auth/login', json={'email': 'test@example.com', 'password': 'StrongPass123'})
    assert login.status_code == 200
    data = login.json()
    assert 'access_token' in data
    assert 'refresh_token' in data

    refresh = client.post('/api/v1/auth/refresh', json={'refresh_token': data['refresh_token']})
    assert refresh.status_code == 200
    assert 'access_token' in refresh.json()
