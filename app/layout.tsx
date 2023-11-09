import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/organism/Navbar'
import Footer from '@/components/organism/Footer'
import { josefine_sans } from './fonts'


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
      <body className={`${josefine_sans.className} antialiased`} >
      <Navbar /> 
        {children}
        <Footer />
        </body>
    </html>
  )
}
