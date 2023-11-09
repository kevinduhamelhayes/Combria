import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiTwitter } from 'react-icons/fi'
import { PiMapPinLineThin } from 'react-icons/pi'


const Footer = () => {
  return (
    <footer
    className='flex  xl:max-h-[200px] px-8 py-4 bg-white'>
      <div className='flex md:flex-row gap-6 items-center md:items-start flex-col-reverse w-full justify-between'>
      <div className='pb-6 md:hidden'>
      <span className="mt-8 flex flex-wrap text-mainbrown font-semibold md:mt-0">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        This website is made with ❤️ by
        {' '}
        <Link
          className="hover:text-cyan-400 animate-gradient-x ml-2 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent"
          href="https://www.devink.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devink
        </Link>
      </span>
      </div>
    <div className='flex flex-row m-6 md:m-10 gap-6 justify-between items-center'>
      <div className='md:flex-row justify-start items-center font-bold hidden md:flex text-mainbrown'>
      <PiMapPinLineThin size={90} />
      </div>
      <div className='flex-row flex justify-start items-center font-bold  md:hidden text-mainbrown'>
      <PiMapPinLineThin size={50} />
      </div>
      <div className='flex flex-col gap-4 max-w-[420px]'>
        <p className='text-mainbrown  xl:text-lg font-josefine'>
          Luis A. Herrera 1248 of.710| Torre 2 Wold Trade Center
        </p>
        <p className='text-mainbrown xl:text-lg font-josefine'>
          LIEJA 7179 | Carrasco - Montevideo
        </p>
      </div>
      
    </div>
   
    <div className='md:flex flex-col hidden items-center justify-between h-full pb-10'>
    <div className='md:flex  md:flex-row items-start justify-start mt-4 md:mt-0 pt-0 gap-12 text-mainbrown md:mr-10 font-extrabold'>
      
      <Link href='/' className='text-2xl hover:underline underline-offset-8 '><FaWhatsapp size={40}/>
      </Link>
      <Link href="/about" target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8  '><FiMail size={40}/>
      </Link>
      <Link href='/contact' target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8 '><FiTwitter size={40}/>
      </Link>
      <Link href='/blogs' target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8  '><FaInstagram size={40}/>
      </Link>
      </div>
      <div>
      <span className="mt-8 flex flex-wrap text-mainbrown font-semibold md:mt-0">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        This website is made with ❤️ by
        {' '}
        <Link
          className="hover:text-cyan-400 animate-gradient-x ml-2 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent"
          href="https://www.devink.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devink
        </Link>
      </span>
      </div>
    </div>
    <div className='md:hidden flex  flex-row items-start justify-start mt-4 md:mt-0 pt-0 gap-12 text-mainbrown md:mr-10 font-extrabold'>
      <Link href='/' className='text-2xl hover:underline underline-offset-8 '><FaWhatsapp size={30}/>
      </Link>
      <Link href="/about" target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8  '><FiMail size={30}/>
      </Link>
      <Link href='/contact' target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8 '><FiTwitter size={30}/>
      </Link>
      <Link href='/blogs' target="_blank"
              rel="noopener noreferrer" className='text-2xl hover:underline underline-offset-8  '><FaInstagram size={30}/>
      </Link>
      
    </div>
    
    </div>
  </footer>
  )
}

export default Footer