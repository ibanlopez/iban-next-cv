type Navigation = {
    "logo": {
        "name": string
        "surname": string
    },
    "navlinks": [
        {
            "id": number
            "name": string
            "href": string
            "title": string
        }
    ]
}

type Personal = {
    "header": {
        "name": string
        "role": string
    },
    "content": {
        "heading": {
            "text": string
            "accent": string
        },
        "text": string
        "list": [
            {
                "id": number
                "prop": string
                "value": string
            }
            
        ]
    }
}