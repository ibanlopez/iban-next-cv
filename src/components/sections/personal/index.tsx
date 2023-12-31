import { promises as fs } from 'fs'
import Image from "next/image";
import pic from "./iban-lopez.jpg";
import IconLinkedin from "@/components/icons/icon-linkedin";
import DownloadCv from '@/components/download-cv';
import IconGithub from '@/components/icons/icon-github';

export default async function Personal() {

    const filePersonalData = await fs.readFile(process.cwd() + '/src/lib/data/personal.json', 'utf-8');
    const data: Personal = JSON.parse(filePersonalData)

    const list = data.content.list.map(item => (
        <li 
            key={item.id}
            className="text-sm flex flex-row flex-nowrap justify-between mb-2 sm:text-base md:gap-5 md:justify-center"
        >
            <span className="basis-1/3 sm:basis-[20%] md:basis-[35%] lg:basis1/3 lg:grow-0">{item.prop}</span>
            <span className="text-neutral-500 basis-3/5 sm:basis-[75%] md:grow lg:basis-1/3">{item.value}</span>
        </li>
    ))

  return (
    <section className="w-full mx-auto shadow-lg rounded-2xl overflow-hidden lg:max-w-5xl">
        <div className="bg-indigo-600 w-full h-full flex flex-col items-center py-10 px-6 bg-header-bg bg-no-repeat bg-top bg-cover md:flex-row md:justify-between lg:py-2 lg:px-12">
            <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[284px] lg:h-[284px] lg:border-2 lg:border-white lg:translate-y-8 lg:shadow-md lg:shadow-gray-400 lg:hover:translate-y-7 lg:hover:shadow-lg lg:hover:shadow-gray-500 lg:transition-all lg:duration-300">
                <Image priority src={pic} alt="Foto de Ibán López" className="rounded-full lg:rounded-none" />
            </div>
            <div className="text-white flex flex-col pt-8 text-center md:grow">
                <h1 className="order-2 text-lg lg:text-2xl lg:font-light">{data.header.role}</h1>
                <p className="order-1 text-4xl lg:text-5xl font-bold mb-6">{data.header.name}</p>
                <div className="flex flex-row order-3 w-full justify-center items-center gap-4">
                    <a
                        className="pt-6 h-auto"
                        href="https://linkedin.com/in/ibanlopez/"
                        title="Perfil de LinkedIn"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconLinkedin width="2.5rem" fill="white" color="white" />
                    </a>
                    <a
                        className="pt-6 h-auto w-auto"
                        href="https://github.com/ibanlopez/iban-next-cv"
                        title="Repositorio de la web"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <IconGithub width="2.5rem" fill="none" strokewidth="0" />
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-white w-full h-full py-8 flex flex-col md:flex-row md:flex-nowrap md:gap-9 lg:py-12 lg:gap-32 px-6 lg:px-12">
            <div className="flex-initial md:basis-1/2">
                <h2 className="text-black font-bold text-2xl mb-4">
                    {`${data.content.heading.text} `}
                    <span className="text-indigo-600">
                        {data.content.heading.accent}
                    </span>
                </h2>
                <p className="text-base mb-6 lg:mb-10">
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
