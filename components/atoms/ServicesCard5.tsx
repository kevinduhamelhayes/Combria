import React from 'react'
import Image from 'next/image'
import CardsIterator from '../celules/CardsIterator'  

const ServicesCard5 = () => {
  return (
    
<div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO12.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-60" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-3xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Legalizacion y Residencias
          </h3>
          
          <p className="text-sm  md:text-xl xl:text-2xl   text-white mb-4 mt-2 max-w-[80%]">Entendemos que cada caso es único y requiere una atención detallada y personalizada. </p>
          <span className='text-sm  md:text-xl xl:text-2xl hidden sm:inline text-white mt-2 max-w-[80%]'>
          Nos especializamos en navegar por los procedimientos burocráticos, desde la preparación de la documentación necesaria hasta la representación ante las autoridades</span>
          <span className='text-sm  md:text-xl xl:text-2xl hidden sm:inline text-white mt-2 max-w-[80%]'> de inmigración, asegurando que nuestros clientes cumplan con todos los requisitos legales para una transición suave y exitosa hacia su nuevo hogar.</span>

         
        </div>
      </div>
  )
}

export default ServicesCard5