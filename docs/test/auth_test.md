# Authentication API Tests

In this section, we present the test cases for the Authentication APIs.

## Signin API

### Test Description

This test verifies the functionality of the Signin API.

### Test Steps

1. Send a POST request to the `/api/v1/users/create-session` endpoint with valid credentials.
2. Validate the response.

### Expected Outcome

The API should authenticate the user and return a valid authentication token.

---
