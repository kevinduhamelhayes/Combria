import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <figure className='flex flex-col items-center justify-center w-screen h-[60vh]'>
        <Image
          src='/logoRC.svg'
          alt='Combria Logo'
          width={600}
          height={400}
          className=''
        />
        </figure>
      </div>
  )
}

export default Logo