import React from 'react'
import Image from 'next/image'
import CardsIterator from '../celules/CardsIterator'  

const ServicesCard4 = () => {
  return (
    
<div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO5.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-60" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-3xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Penal & Familia
          </h3>
          
          <span className="text-sm  md:text-xl xl:text-2xl inline   text-white mb-4 mt-2 max-w-[80%]">Nos encargamos de las tareas diarias que, aunque cruciales, pueden desviar la atención de la gestión central del negocio. Desde la gestión de la documentación y el mantenimiento de registros precisos hasta la implementación de procesos administrativos . </span>
          <span className='text-sm  md:text-xl xl:text-2xl hidden sm:inline text-white mt-2 max-w-[80%]'>Nuestro objetivo es optimizar el flujo de trabajo y aumentar la productividad. Al confiar en nosotros la administración de su empresa, usted puede enfocarse en lo que realmente importa: el crecimiento y desarrollo de su negocio.</span>

         
        </div>
      </div>
  )
}

export default ServicesCard4