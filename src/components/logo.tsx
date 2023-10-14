export default function Logo({
    name, 
    surname
}:{ 
    name: string,
    surname: string
}) {
    return (
        <div className="flex-initial">
            <h1 className="text-white font-bold ml-4 lg:text-black lg:ml-0 lg:text-xl lg:font-semibold">
                {name} <span className="lg:text-emerald-500">{surname}</span>
            </h1>
        </div>
    )
}