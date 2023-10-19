# Analytics

## Get Analytics

Used to get the analysis of menu items ordered and usage of inventory items. Here, the number of items shown are sold/used in the past 7 days.

**URL** : `/api/v1/users/analytics`

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
    "orderAnalytics": [
        {
            "menuName": "Salad",
            "data": [
                0,
                0,
                0,
                3,
                0,
                0,
                1
            ]
        }
    ],
    "inventoryAnalytics": [
        {
            "itemName": "Lettuce",
            "data": [
                0,
                0,
                0,
                4,
                0,
                0,
                2
            ]
        },
        {
            "itemName": "Cabbage",
            "data": [
                0,
                0,
                0,
                2,
                0,
                0,
                1
            ]
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
    "message": "Unable to fetch analytics."
}
```
