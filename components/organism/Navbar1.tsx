
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pild from '../atoms/Pild'

const Navbar1 = () => {
  return (
    <nav
      className='flex px-8 py-4 bg-white'>
        <div className='flex flex-row items-center w-full justify-between'>
      <div className='flex flex-row justify-between items-center'>
        <div className='invisible'>
          <Link href='/'className='text-3xl font-medium text-black '><figure>
            <Image
              src='/logoRC.svg'
              alt='Combria Logo'
              width={220}
              height={120}
              className=''
            />
          </figure>
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center gap-12 text-mainbrown mr-10 font-extrabold'>
      <Link href='/about' className='text-base md:text-2xl hover:underline underline-offset-8 '>Sobre Nosotros
        </Link>
        <Link href='/services'className='text-base md:text-2xl hover:underline underline-offset-8  '>Servicios
        </Link>
        <Link href='/logo' className='text-base md:text-2xl hover:underline underline-offset-8 hidden '>Contacto
        </Link>
        <Link href='/blogs' className='text-base md:text-2xl hover:underline underline-offset-8  '>Blog
        </Link>
      </div>
      </div>

      <div className=''>
        <Pild/>
        </div>

    </nav>
  )
}

export default Navbar1