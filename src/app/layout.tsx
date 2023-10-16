import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOSTNAME}`),
  referrer: 'origin-when-cross-origin',
  creator: 'Ibán López',
  publisher: 'Ibán López',
  authors: [{name: 'Ibán López'}],
  robots: {
      index: false,
      follow: false,
      noarchive: true,
      nocache: true,
      noimageindex: true,
      nosnippet: true,
      nositelinkssearchbox: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es" className="overflow-x-hidden">
      <body className={`${inter.className} relative overflow-x-hidden min-h-screen flex flex-col flex-wrap max-w-screen bg-slate-100`}>
        <Header />
        <main className="grow pt-10 px-4 break-words hyphens-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
