import Image from 'next/image';

export default function ServicesList({ 
    services
}: { 
    services: {
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
    }[]
}) {

    const servicesList = services.map(item => (
        <li 
            key={item.id}
            className="flex flex-col items-center mb-10"
        >
            <div className="w-[150px] h-[150px] bg-neutral-50 flex justify-center items-center rounded-full shadow-md shadow-neutral-300 mb-6 hover:shadow-lg hover:bg-white hover:shadow-indigo-400 hover:translate-y-2 transition-all duration-300">
                <Image
                    src={item.image}
                    width={90}
                    height={90}
                    alt={item.title}
                    className={item.imgRounded ? 'rounded-xl' : 'rounded-none'}
                />
            </div>
            <h3 className="font-semibold text-lg mb-4 sm:text-xl lg:text-lg">{item.title}</h3>
            <p className="text-sm mb-4 sm:text-base lg:text-sm">{item.text}</p>
            <ul className="w-full text-sm list-disc list-inside sm:text-base lg:text-sm" role="list">
                <>
                    {item.activities.map(itemList => (
                        <li key={itemList.id} className="mb-2 font-medium">{itemList.item}</li>
                    ))}
                </>
            </ul>
        </li>
    ))

    return (
        <>{servicesList}</>
    )
}