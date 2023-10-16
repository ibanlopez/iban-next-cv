export default function CardList({
    title,
    cards
}: {
    title: string
    cards: [
        {
            id: number,
            title: string
            date: string
            company: string
            text: string
        }
    ]
}) {

    const compareNumbers = (a: number, b: number): number => (a - b)

    const reversed = cards.sort((current, next) => compareNumbers(next.id, current.id))

    const cardList = reversed.map(item => (
        <div 
            key={item.id}
            className="relative border border-gray-200 p-4 mb-6 border-l-2 border-l-indigo-600 last-of-type:mb-12 hover:shadow-gray-300 hover:translate-y-[-0.5rem] hover:shadow-md lg:transition-all lg:duration-300">
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-xs mb-4 text-gray-500"><span className="text-indigo-600">{item.date}</span> | <span className="text-neutral-500">{item.company}</span></p>
                <p className="text-sm">{item.text}</p>
                <div className="w-[13px] h-2 border-t-indigo-600 border-t-2 absolute top-6 left-[-13px] before:block before:absolute before:w-[12px] before:h-[12px] before:left-[-12px] before:top-[-7px] before:rounded-full before:border-2 before:bg-white before:border-indigo-600"></div>
        </div>
    ))

    return (
        <div className="flex-initial md:basis-[47%]">
            <h2 className="text-indigo-600 font-bold text-xl mb-6 md:text-2xl">
                {title}
            </h2>
            <div className="w-full border-l-2 border-neutral-300 pl-4">
                {cardList}
            </div>
        </div>
    )
}