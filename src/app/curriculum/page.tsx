import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { openGraphImage, siteName, locale, type } from '@/app/shared-metadata'
import Resumee from "@/components/sections/resumee";
import Wpo from '@/components/sections/wpo';


export const metadata: Metadata = {
  title: "Curriculum Vitae | Ibán López",
  description: "Currículum vitae de Ibán López, formación y experiencia profesional en el campo del desarrollo web y programación front end, backend y full stack.",
  alternates: {
    canonical:'/curriculum'
  },
  openGraph: {
    ...openGraphImage,
    title: 'Curriculum Vitae | Ibán López',
    description: 'Currículum vitae de Ibán López, formación y experiencia profesional en el campo del desarrollo web y programación front end, backend y full stack.',
    url: '/curriculum',
    ...siteName,
    ...locale,
    ...type
  }
}


export default async function Curriculum() {

  const fileExperienceData = await fs.readFile(process.cwd() + '/src/lib/data/experiencia.json', 'utf-8');
  const experienceData: Career = JSON.parse(fileExperienceData)
  const wpoData = experienceData.wpo

  const sectionTitle = "Currículum Vitae"

  return (
    <>
      <Resumee heading={sectionTitle} />
      <Wpo wpoData={wpoData} />
    </>
  )
}
