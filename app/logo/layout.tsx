import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar1 from '@/components/organism/Navbar1'
import Footer from '@/components/organism/Footer'
import Logo from '@/components/organism/Logo'
import { josefine_sans } from '../fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Combria Landing',
  description: 'Generated for Devink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-white font-josefine' lang="en">
      <Navbar1 />
      <body className={`${josefine_sans.className} antialiased`} >{children}</body>
      <Logo />
      <Footer />

    </html>
  )
}
