# Inventory API Tests

In this section, we present the test cases for the Inventory API.

## Inventory Items Creation API

### Test Description

This test verifies the functionality of the Inventory Items Creation API.

### Test Steps

1. Send a POST request to the `/api/v1/users/createjob` endpoint with the required payload.
2. Validate the response.

### Expected Outcome

The API should successfully create a new inventory item and return an appropriate response.

## Get Inventory Items API

### Test Description

This test verifies the functionality of the Get Inventory Items API.

### Test Steps

1. Send a GET request to the `/api/v1/users/` endpoint with a valid authorization token.
2. Validate the response.

### Expected Outcome

The API should return a list of inventory items.

---
