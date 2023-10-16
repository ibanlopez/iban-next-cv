import type { Metadata } from 'next'
import { openGraphImage } from '@/app/shared-metadata'
import Resumee from "@/components/sections/resumee";


export const metadata: Metadata = {
  title: "Curriculum Vitae | Ibán López",
  description: "Currículum vitae de Ibán López, formación y experiencia profesional en el campo del desarrollo web y programación front end, backend y full stack.",
  alternates: {
    canonical:'/curriculum'
  },
  openGraph: {
    ...openGraphImage
  }
}


export default function Curriculum() {

  const sectionTitle = "Currículum Vitae"

  return (
    <>
      <Resumee heading={sectionTitle} />
    </>
  )
}
