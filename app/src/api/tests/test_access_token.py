from fastapi.testclient import TestClient
from ..api import api_router

client = TestClient(api_router)

def test_access_token():
    request_payload = {
        "email": "admin@gmail.com",
        "is_active": True,
        "is_superuser": True,
        "first_name": "admin",
        "last_name": "admin",
        "password": "adminadmin"
    }
    #change the request_payload as you wish

    response = client.post("/login/access-token", json=request_payload)

    assert response.status_code == 200

    response_data = response.json()
    assert "access_token" in response_data
    assert "token_type" in response_data