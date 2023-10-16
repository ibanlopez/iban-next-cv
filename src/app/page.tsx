import type { Metadata } from 'next'
import { openGraphImage } from './shared-metadata'
import Personal from "@/components/sections/personal/index";


export const metadata: Metadata = {
  title: "Desarrollador web Front | Ibán López",
  description: "Como especialista en web performance y desarrollo web con más de 10 años de experiencia, ofrezco mis servicios como programador full stack y devOps.",
  alternates: {
    canonical:'/'
  },
  openGraph: {
    ...openGraphImage
  }
}


export default function Home() {
  return (
    <>
      <Personal />
    </>
  )
}
