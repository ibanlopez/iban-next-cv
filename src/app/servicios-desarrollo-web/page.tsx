import type { Metadata } from 'next'
import { openGraphImage } from '@/app/shared-metadata'
import Services from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web | Ibán López",
  description: "Servicios que ofrezco como desarrollador web, desarrollador fullstack, diseño web, auditorías web, web performance a empresas o clientes particulares.",
  alternates: {
    canonical:'/servicios-desarrollo-web'
  },
  openGraph: {
    ...openGraphImage
  }
}


export default function Servicios() {

  const sectionTitle = "Servicios web"

  return (
    <>
      <Services heading={sectionTitle} />
    </>
  )
}
