# Menu API Tests

## Overview

This section covers the test cases for the Menu API.

---

## Menu Items Creation API

### **Test Description**

This test verifies the functionality of the Menu Items Creation API.

### **Test Steps**

1. Send a POST request to the `/api/v1/users/createmenu` endpoint with the required payload.
2. Validate the response.

### **Expected Outcome**

The API should successfully create a new menu item and return an appropriate response.

---

## Get Menu Items API

### **Test Description**

This test verifies the functionality of the Get Menu Items API.

### **Test Steps**

1. Send a GET request to the `/api/v1/users/fetchmenus` endpoint with a valid authorization token.
2. Validate the response.

### **Expected Outcome**

The API should return a list of menu items.

---


