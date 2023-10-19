# Order API Tests

## Overview

This section covers the test cases for the Order API.

---

## Place Order API

### **Test Description**

This test verifies the functionality of the Place Order API.

### **Test Steps**

1. Send a POST request to the `/api/v1/users/order` endpoint with the required payload.
2. Validate the response.

### **Expected Outcome**

The API should successfully process the order and return an appropriate response.

---

## Get Orders API

### **Test Description**

This test verifies the functionality of the Get Orders API.

### **Test Steps**

1. Send a GET request to the `/api/v1/users/orders` endpoint with a valid authorization token.
2. Validate the response.

### **Expected Outcome**

The API should return a list of orders.

---


