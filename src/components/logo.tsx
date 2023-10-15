export default function Logo({
    name, 
    surname
}:{ 
    name: string,
    surname: string
}) {
    return (
        <div className="flex-initial">
            <div className="text-white font-bold ml-4 lg:text-black lg:ml-0 lg:text-xl lg:font-semibold xl:text-2xl">
                {name} <span className="lg:text-indigo-500">{surname}</span>
            </div>
        </div>
    )
}