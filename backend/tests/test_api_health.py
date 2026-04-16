from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health():
    res = client.get('/health')
    assert res.status_code == 200
    assert res.json()['status'] == 'ok'


def test_ready():
    res = client.get('/ready')
    assert res.status_code == 200
    assert res.json()['database'] == 'ok'
