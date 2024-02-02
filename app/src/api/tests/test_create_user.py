from fastapi.testclient import TestClient
from  ..api import api_router

client = TestClient(api_router)

def test_create_user(client):
    user_data = {
        "password": "user123",
        "email": "user@example.com",
        "first_name": "test",
        "last_name": "user"
    }
    """
    Vous pouvez changer user_data comme vous le souhaitez, ceci est juste un test

    """

    response = client.post("/users/open", json=user_data)

    assert response.status_code == 200
    assert response.json() == user_data

