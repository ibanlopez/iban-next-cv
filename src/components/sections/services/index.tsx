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
            className="flex flex-col items-center"
        >
            <div className="w-[150px] h-[150px] bg-gray-100 flex justify-center items-center rounded-full shadow-md shadow-gray-300 mb-4">
                <Image
                    src={item.image}
                    width={90}
                    height={90}
                    alt={item.title}
                    className={item.imgRounded ? 'rounded-xl' : 'rounded-none'}
                />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
        </li>
    ))

    return (
        <section className="bg-white w-full mx-auto shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
            <SectionHeading heading={heading} />
            <div className="bg-white w-full h-full pt-8 px-4 md:px-10 lg:py-12 lg:px-12">
                <div className="w-full">
                    <h3 className="text-black font-bold text-2xl mb-6">
                        {`${data.heading.text} `}
                        <span className="text-indigo-600">
                            {data.heading.accent}
                        </span>
                    </h3>
                </div>
                <ul className="flex flex-col">
                    {servicesList}
                </ul>
            </div>
            <DownloadCv mx={true}/>
        </section>
    )
}