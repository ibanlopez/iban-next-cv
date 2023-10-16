import { promises as fs } from 'fs'
import Image from "next/image";
import pic from "./iban-lopez.jpg";
import IconLinkedin from "@/components/icons/icon-linkedin";
import DownloadCv from '@/components/download-cv';

export default async function Personal() {

    const filePersonalData = await fs.readFile(process.cwd() + '/src/lib/data/personal.json', 'utf-8');
    const data: Personal = JSON.parse(filePersonalData)

    const list = data.content.list.map(item => (
        <li 
            key={item.id}
            className="text-xs flex flex-row flex-nowrap justify-between mb-2 md:text-sm md:gap-5 md:justify-center"
        >
            <span className="basis-1/3 md:basis-1/4">{item.prop}</span>
            <span className="text-neutral-500 basis-3/5 md:basis-1/2 lg:basis-1/3">{item.value}</span>
        </li>
    ))

  return (
    <section className="w-full mx-auto shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
        <div className="bg-indigo-600 w-full h-full flex flex-col items-center py-10 px-6 bg-header-bg bg-no-repeat bg-top bg-cover md:flex-row md:justify-between lg:py-2 lg:px-12">
            <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[284px] lg:h-[284px] lg:border-2 lg:border-white lg:translate-y-8 lg:shadow-md lg:shadow-gray-400 lg:hover:translate-y-7 lg:hover:shadow-lg lg:hover:shadow-gray-500 lg:transition-all lg:duration-300">
                <Image src={pic} alt="Foto de Ibán López" className="rounded-full lg:rounded-none" />
            </div>
            <div className="text-white flex flex-col pt-8 text-center md:grow">
                <h1 className="order-2 text-lg lg:text-2xl lg:font-light">{data.header.role}</h1>
                <p className="order-1 text-4xl lg:text-5xl font-bold mb-6">{data.header.name}</p>
                <a
                    className="order-3 pt-6 self-center inline-block"
                    href="https://linkedin.com/in/ibanlopez/"
                    title="Perfil de LinkedIn"
                    rel="noopener noreferrer"
                >
                    <IconLinkedin width="2.5rem" fill="white" color="#e5e7eb" />
                </a>
            </div>
        </div>
        <div className="bg-white w-full h-full py-8 flex flex-col md:flex-row md:flex-nowrap lg:py-12 px-6 lg:px-12">
            <div className="flex-initial md:basis-1/2">
                <h2 className="text-black font-bold text-2xl mb-4">
                    {`${data.content.heading.text} `}
                    <span className="text-indigo-600">
                        {data.content.heading.accent}
                    </span>
                </h2>
                <p className="text-sm mb-6 md:text-md">
                    {data.content.text}
                </p>
                <DownloadCv mx={false} />
            </div>
            <ul className="flex-initial md:grow md:flex md:flex-col md:justify-center md:align-middle">
                {list}
            </ul>
        </div>
    </section>
  );
}
