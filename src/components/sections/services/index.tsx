import { promises as fs } from 'fs'
import SectionHeading from '../section-heading';
import DownloadCv from '@/components/download-cv';
import Image from 'next/image';
import ServicesList from './services-list';
import { BlockList } from 'net';
import CtaButton from '@/components/cta-button';

export default async function Services({ heading }: { heading: string }) {

    const fileServicesData = await fs.readFile(process.cwd() + '/src/lib/data/servicios.json', 'utf-8');
    const data: Services = JSON.parse(fileServicesData)

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
                <p className="text-base mb-6 sm:text-base" dangerouslySetInnerHTML={{ __html: data.intro }} />
                <p className="text-lg font-light text-indigo-600 mb-10 sm:text-lg lg:text-center lg:font-semibold">{data.quote}</p>
                <ul className="flex flex-col sm:w-3/4 sm:mx-auto lg:flex-row lg:w-full lg:gap-6" role="list">
                    <ServicesList services={data.services} />
                </ul>
                <div className="w-full">
                    <h2 className="text-black font-bold text-2xl mb-6">
                        {`${data.companies.text} `}
                        <span className="text-indigo-600">
                            {data.companies.accent}
                        </span>
                    </h2>
                </div>
                <div className="flex flex-col w-full lg:flex-row lg:justify-between">
                    <div className="flex-initial lg:basis-[341px]">
                        <div className="relative w-full max-w-[341px] h-[267px] mb-3 mx-auto">
                            <Image 
                                src={data.introBlock.image}
                                alt={data.introBlock.imageAlt}
                                fill={true}
                                className="object-cover"
                                sizes='100vw'
                            />
                        </div>
                        <p className="text-center font-light text-xs mb-6">{data.introBlock.imageAlt}</p>
                    </div>
                    <div className="flex-initial lg:basis-[58%]">
                        <h3 className="font-semibold text-center text-lg mb-4 sm:text-xl lg:text-xl">{data.introBlock.title}</h3>
                        <div className="w-full text-base" dangerouslySetInnerHTML={{ __html: data.introBlock.text }} />
                        <CtaButton mx={true} text="Tomemos un té" hoverText="O un café" />
                    </div>
                </div>
            </div>
            <DownloadCv mx={true}/>
        </section>
    )
}