import React from 'react'
import Image from 'next/image'
import CardsIterator from '../celules/CardsIterator'

const AboutCard2 = () => {
  return (
    <div className="relative ">
        <figure className="overflow-hidden max-h-[100vh]">
          <Image
            src='/pexels-liza-summer-6348124.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className=''
          />
          <div className="absolute inset-0 bg-mainbrown opacity-50" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-2xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            La opinion de nuestros clientes
          </h3>


          <CardsIterator />

        </div>
      </div>
  )
}

export default AboutCard2