# Signup

Used to register a new user.

**URL** : `/api/v1/users/signup`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "name": "[valid username]",
    "email": "[valid email]",
    "password": "[valid password]",
    "confirm_password": "[valid and same password]",
    "restname": "[valid restaurant name]"
}
```

**Data example**

```json
{
    "name": "Postmane",
    "email": "post@.com",
    "password": "12345",
    "confirm_password": "12345",
    "restname": "Rest"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Sign Up Successful, here is your token, plz keep it safe",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvc3RALmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJEJtb255Rk5jWVdZcllJaXB5Ykxya3VDUHk4UEY4QlZVUEJjWk9pMVcubGpDOUF6bHpNRGhTIiwibmFtZSI6IlBvc3RtYW4iLCJyZXN0bmFtZSI6IlJlc3QiLCJfaWQiOiI2NTMwYzhiNGZlM2E1N2I1ZmU2Njg4NjIiLCJjcmVhdGVkQXQiOiIyMDIzLTEwLTE5VDA2OjEyOjA0LjAzN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTEwLTE5VDA2OjEyOjA0LjAzN1oiLCJfX3YiOjAsImlhdCI6MTY5NzY5NTkyNCwiZXhwIjoxNjk4NTU5OTI0fQ.4sx31M_vREDqCrE3aqah4bHqF-jjhwKpdC105Kc3ZQ8",
        "user": {
            "email": "post@.com",
            "password": "$2a$12$BmonyFNcYWYrYIipybLrkuCPy8PF8BVUPBcZOi1W.ljC9AzlzMDhS",
            "name": "Postman",
            "restname": "Rest",
            "_id": "6530c8b4fe3a57b5fe668862",
            "createdAt": "2023-10-19T06:12:04.037Z",
            "updatedAt": "2023-10-19T06:12:04.037Z",
            "__v": 0
        }
    },
    "success": true
}
```

## Error Response

**Condition** : If the user already registered.

**Code** : `401`

**Content** :

```json
{
    "message": "User already exists",
    "Success": "false"
}
```










# Login

Used to collect a Token for a registered User.

**URL** : `/api/v1/users/create-session`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "shyamalgandhi47.sg@gmail.com",
    "password": "123"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Sign In Successful, here is your token, please keep it safe",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJhYmYzZTAwZTljNjllMjI2ZTEzY2QiLCJlbWFpbCI6InNoeWFtYWxnYW5kaGk0Ny5zZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMiR0L21uUW5yLlN2bFV4ZlN6Uy4yZUJlVzJ4Z3VRcmdaVFc5TjFSNk9tdDZTLzZsWkwudWJ0TyIsIm5hbWUiOiJzaHlhbWFsIiwicmVzdG5hbWUiOiJIaWxsIG9mIEJlYW5zIiwiY3JlYXRlZEF0IjoiMjAyMy0xMC0xNFQxNjoxODowNi43MzNaIiwidXBkYXRlZEF0IjoiMjAyMy0xMC0xNFQxNjoxODowNi43MzNaIiwiX192IjowLCJpYXQiOjE2OTc2OTU2NzYsImV4cCI6MTY5ODU1OTY3Nn0.4Kmx9cWEjxVhyegQgJs3W-qziRJzJqKkfNnfxbgh9R8",
        "user": {
            "_id": "652abf3e00e9c69e226e13cd",
            "email": "shyamalgandhi47.sg@gmail.com",
            "password": "$2a$12$t/mnQnr.SvlUxfSzS.2eBeW2xguQrgZTW9N1R6Omt6S/6lZL.ubtO",
            "name": "shyamal",
            "restname": "Hill of Beans",
            "createdAt": "2023-10-14T16:18:06.733Z",
            "updatedAt": "2023-10-14T16:18:06.733Z",
            "__v": 0
        }
    },
    "success": true
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `422 Unprocessabel Entity`

**Content** :

```json
{
    "message": "Invalid username or password"
}
```
