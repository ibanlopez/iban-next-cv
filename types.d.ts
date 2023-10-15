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

type Education = {
    "title": string,
    "cards": [
        {
            "id": number
            "title": string
            "date": string
            "company": string
            "text": string
        }
    ]
}

type Career = {
    "title": string,
    "cards": [
        {
            "id": number
            "title": string
            "date": string
            "company": string
            "text": string
        }
    ]
}

type Services = {
    "heading": {
        "text": string
        "accent": string
    },
    "services": [
        {
            "id": number
            "title": string
            "image": string
            "imgRounded": boolean
            "text": string
        }
    ]
}