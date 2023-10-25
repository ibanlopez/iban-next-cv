import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { openGraphImage, siteName, locale, type } from '@/app/shared-metadata'
import Services from "@/components/sections/services";
import Wpo from '@/components/sections/wpo';

export const metadata: Metadata = {
  title: "Servicios de desarrollo web | Ibán López",
  description: "Servicios que ofrezco como desarrollador web, desarrollador fullstack, diseño web, auditorías web, web performance a empresas o clientes particulares.",
  alternates: {
    canonical:'/servicios-desarrollo-web'
  },
  openGraph: {
    ...openGraphImage,
    title: 'Servicios de desarrollo web | Ibán López',
    description: 'Servicios que ofrezco como desarrollador web, desarrollador fullstack, diseño web, auditorías web, web performance a empresas o clientes particulares.',
    url: '/servicios-desarrollo-web',
    ...siteName,
    ...locale,
    ...type
  }
}


export default async function Servicios() {

  const fileWpoData = await fs.readFile(process.cwd() + '/src/lib/data/servicios.json', 'utf-8');
  const data: Services = JSON.parse(fileWpoData)
  const wpoData = data.wpo

  const sectionTitle = "Servicios web"

  return (
    <>
      <Services heading={sectionTitle} />
      <Wpo wpoData={wpoData} />
    </>
  )
}
