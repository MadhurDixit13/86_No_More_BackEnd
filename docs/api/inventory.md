# Inventory

## Fetch Inventory

Used to get all the inventory items of a restaurant. 

**URL** : `/api/v1/users/`

**Method** : `GET`

**Auth required** : YES

**Data example**

```

No PARAMS need to be passed.

```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "List of jobs",
    "jobs": [
        {
            "_id": "652cbb23e756dbdae681f8da",
            "itemname": "Potato",
            "restid": "65249f1b71e74f2e61bd430d",
            "quantity": 18,
            "costperitem": 18,
            "datebought": "2023-10-07T00:00:00.000Z",
            "dateexpired": "2023-10-12T00:00:00.000Z",
            "createdAt": "2023-10-16T04:25:07.247Z",
            "updatedAt": "2023-10-16T04:25:07.247Z",
            "__v": 0
        },
        {
            "_id": "652568b61e4e683b861116b6",
            "itemname": "Lettuce",
            "restid": "65249f1b71e74f2e61bd430d",
            "quantity": 0,
            "costperitem": 18,
            "datebought": "2023-10-07T00:00:00.000Z",
            "dateexpired": "2023-10-12T00:00:00.000Z",
            "createdAt": "2023-10-10T15:07:34.055Z",
            "updatedAt": "2023-10-17T01:31:38.463Z",
            "__v": 0
        }
    ]
}
```

## Error Response

**Condition** : If auth not provided.

**Code** : `403 Unauthorized`

**Content** :

```json
{
    "message": 
        "Unable to fetch inventory."
    
}
```

## Add Inventory

Used to add inventory items for a restaurant. 

**URL** : `/api/v1/users/createjob`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json

{
    "itemname": "[valid item name]",
    "quantity": "[int]",
    "costperitem":"[float]",
    "datebought": "[valid date]",
    "dateexpired":"[valid date]"
}

```

**Data example**

```json

{
    "itemname": "Cilantro",
    "quantity":8,
    "costperitem":18,
    "datebought": "2023-10-07",
    "dateexpired":"2023-10-12"
}

```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "data": {
        "job": {
            "itemname": "Cilantro",
            "restid": "652abf3e00e9c69e226e13cd",
            "quantity": 8,
            "costperitem": 18,
            "datebought": "2023-10-07T00:00:00.000Z",
            "dateexpired": "2023-10-12T00:00:00.000Z",
            "_id": "6530c255fe3a57b5fe66885a",
            "createdAt": "2023-10-19T05:44:53.281Z",
            "updatedAt": "2023-10-19T05:44:53.281Z",
            "__v": 0
        }
    },
    "message": "Job Created!!",
    "success": true
}

```

## Error Response

**Condition** : If the item already exists.

**Code** : `401`

**Content** :

```json
{
    "message": "This Item already exists",
    "success": false
}

```

## Update Inventory

Used to update the inventory items for the restaurant.

**URL** : `/api/v1/users/edititem`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json

{
    "inventory_id" : ["valid inventory id"]
    "quantity": "[int]",
    "costperitem":"[float]",
    "datebought": "[valid date]",
    "dateexpired": "[valid date]"
}

```

**Data example**

```json

{
    "inventory_id" : "6530c255fe3a57b5fe66885a"
    "quantity":8,
    "costperitem":18,
    "datebought": "2023-10-07",
    "dateexpired":"2023-10-12"
}

```

## Success Response

**Code** : `200 OK`

**Content example**

```json

{
    "message": "Inventory is updated Successfully",
    "success": "true",
    "inventories": [
        {
            "_id": "652cbb23e756dbdae681f8da",
            "itemname": "Potato",
            "restid": "65249f1b71e74f2e61bd430d",
            "quantity": 18,
            "costperitem": 18,
            "datebought": "2023-10-07T00:00:00.000Z",
            "dateexpired": "2023-10-12T00:00:00.000Z",
            "createdAt": "2023-10-16T04:25:07.247Z",
            "updatedAt": "2023-10-16T04:25:07.247Z",
            "__v": 0
        },
        {
            "_id": "652568b61e4e683b861116b6",
            "itemname": "Lettuce",
            "restid": "65249f1b71e74f2e61bd430d",
            "quantity": 8,
            "costperitem": 18,
            "datebought": "2023-10-07T00:00:00.000Z",
            "dateexpired": "2023-10-12T00:00:00.000Z",
            "createdAt": "2023-10-10T15:07:34.055Z",
            "updatedAt": "2023-10-17T01:31:38.463Z",
            "__v": 0
        }
    ],
		}

```

## Error Response

**Condition** : If the inventory item doesn't exist.

**Code** : `401`

**Content** :

```json
{
    "message": "This item doesn't exist.",
    "success": false
}

```

