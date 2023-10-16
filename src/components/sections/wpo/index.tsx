import RocketLaunchIcon from '@heroicons/react/24/outline/RocketLaunchIcon'

export default async function Wpo({ 
    wpoData 
}: {
    wpoData: {
        question: string
        answer: string
        metricas: string
        link: string
    }
}) {
    return (
        <section className="w-full mx-auto my-10 shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
            <div className="bg-white py-8 lg:py-12 px-6 lg:px-12">
                <h2 className="text-black font-bold text-basis mb-4 md:text-lg">
                    {wpoData.question}
                </h2>
                <p className="text-sm mb-6 md:text-md">
                    {wpoData.answer}
                </p>
                <a className="text-sm mb-6 md:text-md text-indigo-600 underline" href={wpoData.link} target="_blank" rel="noopener noreferrer">
                    {wpoData.metricas}<RocketLaunchIcon className="w-8 stroke-1 stroke-indigo-600 inline ml-2 mb-2" />
                </a>
            </div>
        </section>
    )
}