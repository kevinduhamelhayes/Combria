
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pild from '../atoms/Pild'

const Navbar = () => {
  return (
    <nav
      className='flex px-4 md:px-8 py-4 bg-white'>
        <div className='flex flex-row items-center w-full justify-between'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between items-center'>
          <Link href='/'className='text-3xl font-medium text-black'>
            
            <Image
              src='/logoRC.svg'
              alt='Combria Logo'
              width={220}
              height={120}
            />
          
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center gap-4 md:gap-12 text-mainbrown mr-10 font-extrabold'>
        <Link href='/about' className='sm:text-base md:text-xl xl:text-2xl hidden sm:flex hover:underline underline-offset-8 '>Sobre Nosotros
        </Link>
        <Link href='/about' className='sm:text-base md:text-xl xl:text-2xl sm:hidden flex hover:underline underline-offset-8 '>Home
        </Link>
        <Link href='/services'className='sm:text-base md:text-xl xl:text-2xl hover:underline underline-offset-8 '>Servicios
        </Link>
        <Link href='/logo' className='sm:text-base md:text-xl xl:text-2xl hover:underline underline-offset-8 '>Contacto
        </Link>
        <Link href='/blogs' className='sm:text-base md:text-xl xl:text-2xl hover:underline underline-offset-8  '>Blog
        </Link>
      </div>
      
      </div>
      <div className=''>
        <Pild/>
        </div>
      

    </nav>
  )
}

export default Navbar