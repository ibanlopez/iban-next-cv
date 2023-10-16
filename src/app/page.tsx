import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { openGraphImage, siteName, locale, type } from './shared-metadata'
import Personal from "@/components/sections/personal/index";
import Wpo from '@/components/sections/wpo';


export const metadata: Metadata = {
  title: "Desarrollador web Front end | Ibán López",
  description: "Como especialista en web performance y desarrollo web con más de 10 años de experiencia, ofrezco mis servicios como programador full stack y devOps.",
  alternates: {
    canonical:'/'
  },
  openGraph: {
    ...openGraphImage,
    title: 'Desarrollador web Front end | Ibán López',
    description: 'Como especialista en web performance y desarrollo web con más de 10 años de experiencia, ofrezco mis servicios como programador full stack y devOps.',
    url: '/',
    ...siteName,
    ...locale,
    ...type
  }
}


export default async function Home() {

  const fileWpoData = await fs.readFile(process.cwd() + '/src/lib/data/personal.json', 'utf-8');
  const data: Personal = JSON.parse(fileWpoData)
  const wpoData = data.wpo

  return (
    <>
      <Personal />
      <Wpo wpoData={wpoData} />
    </>
  )
}
