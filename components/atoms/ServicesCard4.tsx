import React from 'react'
import Image from 'next/image'


const ServicesCard4 = () => {
  return (
    
<div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO11.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-60" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-3xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Administrativo
          </h3>
          
          <p className="text-sm  md:text-xl xl:text-2xl   text-white mb-4 mt-2 max-w-[80%]">Nos encargamos de las tareas diarias que, aunque cruciales, pueden desviar la atención de la gestión central del negocio. </p>
          <p className='text-sm  md:text-xl xl:text-2xl hidden sm:block text-white mt-2 max-w-[80%]'>
          Desde la gestión de la documentación y el mantenimiento de registros precisos hasta la implementación de procesos administrativos eficientes, nuestro objetivo es optimizar el flujo de trabajo y aumentar la productividad. </p>
          <p className='text-sm  md:text-xl xl:text-2xl hidden sm:block text-white mt-2 max-w-[80%]'>
          Al confiar en nosotros la administración de su empresa, usted puede enfocarse en lo que realmente importa: el crecimiento y desarrollo de su negocio.
</p>
         
        </div>
      </div>
  )
}

export default ServicesCard4