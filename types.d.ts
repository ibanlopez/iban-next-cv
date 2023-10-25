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
    },
    "wpo": {
        "question": string
        "answer": string
        "metricas": string
        "link": string
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
    ],
    "wpo": {
        "question": string
        "answer": string
        "metricas": string
        "link": string
    }
}

type Services = {
    "heading": {
        "text": string
        "accent": string
    },
    "intro": string
    "quote": string
    "services": [
        {
            "id": number
            "title": string
            "image": string
            "imgRounded": boolean
            "text": string
            "activities": [
                {
                    "id": number
                    "item": string
                }
            ]
        }
    ],
    "companies": {
        "text": string
        "accent": string
    },
    "introBlock": {
        "image": string
        "imageAlt": string
        "title": string
        "text": string
    },
    "wpo": {
        "question": string
        "answer": string
        "metricas": string
        "link": string
    }
}