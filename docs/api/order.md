# Order

## Get Orders

Used to fetch the orders. 

**URL** : `/api/v1/users/orders`

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
    "order": [
        {
            "_id": "652d7b1b27a4d792544a7843",
            "items": [
                {
                    "item_id": {
                        "_id": "65256b464f8ecfb4d030f686",
                        "menuname": "Salad",
                        "restid": "65249f1b71e74f2e61bd430d",
                        "costmenu": 10,
                        "ingredients": [
                            {
                                "inventory_id": "652568b61e4e683b861116b6",
                                "quantity": 2,
                                "_id": "65256b464f8ecfb4d030f687"
                            },
                            {
                                "inventory_id": "652566981e4e683b861116b3",
                                "quantity": 1,
                                "_id": "65256b464f8ecfb4d030f688"
                            }
                        ],
                        "createdAt": "2023-10-10T15:18:30.202Z",
                        "updatedAt": "2023-10-10T15:18:30.202Z",
                        "__v": 0
                    },
                    "quantity": 1,
                    "_id": "652d7b1b27a4d792544a7844"
                }
            ],
            "restid": "65249f1b71e74f2e61bd430d",
            "createdAt": "2023-10-16T18:04:11.656Z",
            "updatedAt": "2023-10-16T18:04:11.656Z",
            "__v": 0
        },
        {
            "_id": "652cb56cb82cb548d49de5c2",
            "items": [
                {
                    "item_id": {
                        "_id": "65256b464f8ecfb4d030f686",
                        "menuname": "Salad",
                        "restid": "65249f1b71e74f2e61bd430d",
                        "costmenu": 10,
                        "ingredients": [
                            {
                                "inventory_id": "652568b61e4e683b861116b6",
                                "quantity": 2,
                                "_id": "65256b464f8ecfb4d030f687"
                            },
                            {
                                "inventory_id": "652566981e4e683b861116b3",
                                "quantity": 1,
                                "_id": "65256b464f8ecfb4d030f688"
                            }
                        ],
                        "createdAt": "2023-10-10T15:18:30.202Z",
                        "updatedAt": "2023-10-10T15:18:30.202Z",
                        "__v": 0
                    },
                    "quantity": 2,
                    "_id": "652cb56cb82cb548d49de5c3"
                }
            ],
            "restid": "65249f1b71e74f2e61bd430d",
            "createdAt": "2023-10-16T04:00:44.764Z",
            "updatedAt": "2023-10-16T04:00:44.764Z",
            "__v": 0
        }
        
    ],

    "message": "Fetched Orders Successfully"
}

```

## Error Response

**Condition** : If auth not provided.

**Code** : `403 Unauthorized`

**Content** :

```json
{
    "message": "Unable to fetch orders."
}
```

## Place Order

Used to order food from a restaurant. 

**URL** : `/api/v1/users/order`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json

{
    "items": "[valid list of the menu item]"
}

```

**Data example**

```json

{
    "items": [
        {
            "id": "65256b464f8ecfb4d030f686",
            "quantity": 1
        }
    ]
}

```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Order placed successfully",
    "data": {
        "order": {
            "items": [
                {
                    "item_id": {
                        "_id": "65256b464f8ecfb4d030f686",
                        "menuname": "Salad",
                        "restid": "65249f1b71e74f2e61bd430d",
                        "costmenu": 10,
                        "ingredients": [
                            {
                                "inventory_id": "652568b61e4e683b861116b6",
                                "quantity": 2,
                                "_id": "65256b464f8ecfb4d030f687"
                            },
                            {
                                "inventory_id": "652566981e4e683b861116b3",
                                "quantity": 1,
                                "_id": "65256b464f8ecfb4d030f688"
                            }
                        ],
                        "createdAt": "2023-10-10T15:18:30.202Z",
                        "updatedAt": "2023-10-10T15:18:30.202Z",
                        "__v": 0
                    },
                    "quantity": 1,
                    "_id": "6530ceb8fe3a57b5fe668887"
                }
            ],
            "restid": "65249f1b71e74f2e61bd430d",
            "_id": "6530ceb8fe3a57b5fe668886",
            "createdAt": "2023-10-19T06:37:44.269Z",
            "updatedAt": "2023-10-19T06:37:44.269Z",
            "__v": 0
        }
    },
    "success": true
}

```

## Error Response

**Condition** : If the the inventory items used to prepare particular item is out of stock.

**Code** : `403 Forbidden`

**Content** :

```json
{
    "message": "Do not have sufficient inventory items"
}

```
