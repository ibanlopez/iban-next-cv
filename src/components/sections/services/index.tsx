import { promises as fs } from 'fs'
import SectionHeading from '../section-heading';
import DownloadCv from '@/components/download-cv';
import Image from 'next/image';

export default async function Services({ heading }: { heading: string }) {

    const fileServicesData = await fs.readFile(process.cwd() + '/src/lib/data/servicios.json', 'utf-8');
    const data: Services = JSON.parse(fileServicesData)

    const servicesList = data.services.map(item => (
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
        <section className="bg-white w-full mx-auto shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
            <SectionHeading heading={heading} />
            <div className="bg-white w-full h-full pt-8 px-4 sm:px-10 lg:py-12 lg:px-12">
                <div className="w-full">
                    <h2 className="text-black font-bold text-2xl mb-6">
                        {`${data.heading.text} `}
                        <span className="text-indigo-600">
                            {data.heading.accent}
                        </span>
                    </h2>
                </div>
                <p className="text-sm mb-6 sm:text-base" dangerouslySetInnerHTML={{ __html: data.intro }} />
                <p className="text-base font-light text-indigo-600 mb-10 sm:text-lg lg:text-center">{data.quote}</p>
                <ul className="flex flex-col sm:w-3/4 sm:mx-auto lg:flex-row lg:w-full lg:gap-6" role="list">
                    {servicesList}
                </ul>
            </div>
            <DownloadCv mx={true}/>
        </section>
    )
}