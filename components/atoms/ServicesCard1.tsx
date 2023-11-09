import React from 'react'
import Image from 'next/image'

const ServicesCard1 = () => {
  return (
    <div className="relative">
        <figure className="overflow-hidden max-h-[90vh]">
          <Image
            src='/HERO7.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-60" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-2xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Inversion
          </h3>
          
          <p className="text-sm  md:text-xl xl:text-2xl  text-white mb-4 mt-2 max-w-[80%]">Los servicios de inversión son el timón que guía a los inversores a través de las turbulentas aguas del mercado financiero. </p>
          <p className='text-sm md:text-xl xl:text-2xl hidden sm:block   text-white mt-2 max-w-[80%]'>Con asesoramiento experto y estrategias personalizadas, ayudan a navegar las complejidades de la inversión, asegurando que cada decisión se alinee con los objetivos a largo plazo y la tolerancia al riesgo del cliente. En un entorno económico que cambia rápidamente, la claridad y la perspectiva que ofrecen estos servicios son invaluables.</p>
          <p className='text-sm  md:text-xl xl:text-2xl hidden sm:block text-white mt-2 max-w-[80%]'>Invertir ya no es solo una cuestión de ganancias, sino de prudencia y previsión. Los servicios de inversión modernos se centran en crear carteras resilientes, capaces de resistir las incertidumbres del mercado. Esta aproximación estratégica permite a los inversores mantener el rumbo hacia sus metas financieras, con la confianza de que su patrimonio está siendo manejado con cuidado y competencia.</p>
        </div>
      </div>
  )
}

export default ServicesCard1