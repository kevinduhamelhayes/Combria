import React from 'react'
import Image from 'next/image'

const ServicesCard = () => {
  return (
    <div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO8.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge  bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-60" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-2xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Corporativo & Empresarial
          </h3>
          
          <p className="text-sm  md:text-xl xl:text-2xl  text-white mb-4 mt-2 max-w-[80%]">En el dinámico mundo empresarial de hoy, la figura del abogado corporativo se ha convertido en una pieza clave para el éxito y la estabilidad de cualquier compañía.</p>
          <p className='text-sm md:text-xl xl:text-2xl hidden sm:block   text-white mt-2 max-w-[80%]'> Estos profesionales del derecho no solo están equipados para navegar por el laberinto de regulaciones y leyes que afectan a las empresas, sino que también ofrecen una perspectiva estratégica que puede ser crucial para el crecimiento y la supervivencia a largo plazo.</p>
          <p className='text-sm md:text-xl xl:text-2xl hidden sm:block   text-white mt-2 max-w-[80%]'> Desde la asesoría en la formación de una nueva empresa hasta la gestión de fusiones y adquisiciones, los abogados corporativos son los aliados estratégicos que aseguran que las operaciones comerciales se mantengan dentro del marco legal y optimizan los resultados financieros.</p>
        </div>
      </div>
  )
}

export default ServicesCard