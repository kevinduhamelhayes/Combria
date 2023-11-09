import React from 'react'
import Image from 'next/image'
import CardsIterator from '../celules/CardsIterator'  

const ServicesCard2 = () => {
  return (
    
<div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO1.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-60'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-50" />
        </figure>
        <div className="absolute  inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-3xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Contable
          </h3>
          
          <p className="text-sm  md:text-xl xl:text-2xl   text-white mb-4 mt-2 max-w-[80%]">En un mercado competitivo, los servicios contables se convierten en una herramienta estratégica para las empresas. No solo mantienen la contabilidad al día y en conformidad con las leyes fiscales.
          </p>
          <p className='text-sm  md:text-xl xl:text-2xl hidden sm:block text-white mt-2 max-w-[80%]'>
          Esta combinación de cumplimiento y asesoramiento estratégico es esencial para cualquier negocio que busque no solo sobrevivir sino prosperar financieramente.</p>
         
        </div>
      </div>
  )
}

export default ServicesCard2