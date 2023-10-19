# Menu

## Fetch Menu

Used to get the menu of a restaurant. 

**URL** : `/api/v1/users/fetchmenus`

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
    "message": "List of Menus",
    "menu": [
        {
            "_id": "652d7af827a4d792544a7837",
            "menuname": "Soup",
            "restid": "65249f1b71e74f2e61bd430d",
            "costmenu": 10,
            "ingredients": [
                {
                    "inventory_id": {
                        "_id": "652568b61e4e683b861116b6",
                        "itemname": "Lettuce"
                    },
                    "quantity": 2,
                    "_id": "652d7af827a4d792544a7838"
                },
                {
                    "inventory_id": {
                        "_id": "652566981e4e683b861116b3",
                        "itemname": "Cabbage"
                    },
                    "quantity": 1,
                    "_id": "652d7af827a4d792544a7839"
                }
            ],
            "createdAt": "2023-10-16T18:03:36.747Z",
            "updatedAt": "2023-10-16T18:03:36.747Z",
            "__v": 0
        },
        {
            "_id": "65256b464f8ecfb4d030f686",
            "menuname": "Salad",
            "restid": "65249f1b71e74f2e61bd430d",
            "costmenu": 10,
            "ingredients": [
                {
                    "inventory_id": {
                        "_id": "652568b61e4e683b861116b6",
                        "itemname": "Lettuce"
                    },
                    "quantity": 2,
                    "_id": "65256b464f8ecfb4d030f687"
                },
                {
                    "inventory_id": {
                        "_id": "652566981e4e683b861116b3",
                        "itemname": "Cabbage"
                    },
                    "quantity": 1,
                    "_id": "65256b464f8ecfb4d030f688"
                }
            ],
            "createdAt": "2023-10-10T15:18:30.202Z",
            "updatedAt": "2023-10-10T15:18:30.202Z",
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
    "message": "Unable to fetch menu."
}
```

## Add Menu items

Used to add menu items for a restaurant. 

**URL** : `/api/v1/users/createmenu`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json

{
    {
      "menuname": "[enter item name]",
      "costmenu": "[float]",
      "ingredients": "[List of inventory items with their corresponding quantities.]"
    }
}

```

**Data example**

```json

{
    "menuname": "Soup",
    "costmenu": 10,
    "ingredients": [
        {
            "inventory_id": "652568b61e4e683b861116b6",
            "quantity": 2
        },
        {
            "inventory_id": "652566981e4e683b861116b3",
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
    "data": {
        "menu": {
            "menuname": "Pasta",
            "restid": "65249f1b71e74f2e61bd430d",
            "costmenu": 10,
            "ingredients": [
                {
                    "inventory_id": {
                        "_id": "652568b61e4e683b861116b6",
                        "itemname": "Lettuce"
                    },
                    "quantity": 2,
                    "_id": "6530cb32fe3a57b5fe66886f"
                },
                {
                    "inventory_id": {
                        "_id": "652566981e4e683b861116b3",
                        "itemname": "Cabbage"
                    },
                    "quantity": 1,
                    "_id": "6530cb32fe3a57b5fe668870"
                }
            ],
            "_id": "6530cb32fe3a57b5fe66886e",
            "createdAt": "2023-10-19T06:22:42.810Z",
            "updatedAt": "2023-10-19T06:22:42.810Z",
            "__v": 0
        }
    },
    "message": "Menu Created!!",
    "success": true
}

```

## Error Response

**Condition** : If the item already exists.

**Code** : `401 Unauthorized`

**Content** :

```json
{
    "message": "This Menu Item already exists",
    "success": false
}

```
