import React from 'react'
import Image from 'next/image'

const ServicesCard4 = () => {
  return (
    <div className="relative max-h-[90vh]">
  <figure className="overflow-hidden">
    <Image
      src='/HERO10.jpg'
      alt='Combria Logo'
      width={2000}
      height={400}
      className=''
    />
    <div className="absolute inset-0 bg-mainbrown opacity-60" />
  </figure>
  <div className="absolute top-4 left-4 md:top-10 md:left-10 xl:top-20 xl:left-20 z-20 xl:max-w-[55%] p-4 text-left border-l-4">
    <h3 className="text-2xl md:text-4xl xl:text-6xl  text-white">
    Asesoramiento tributario
    </h3>
    <span className="text-sm  md:text-lg xl:text-xl font-medium hidden sm:inline text-white mt-2">Diseñado para ofrecer tranquilidad y claridad fiscal a nuestros clientes. Entendemos que la legislación tributaria puede ser compleja y siempre está en cambio, por lo que nos dedicamos a proporcionar estrategias de planificación fiscal que maximicen la eficiencia y minimicen las obligaciones fiscales. </span>
    <span className='font-medium hidden  text-sm  md:text-lg xl:text-xl text-white mt-2 xl:inline'>
    Con un enfoque proactivo, nos aseguramos de que esté al tanto de las últimas reformas y aproveche todas las ventajas fiscales disponibles, manteniendo su patrimonio o negocio en plena conformidad con las normativas vigentes.
    </span>
  </div>
  <div className="absolute bottom-4 md:bottom-10 md:right-10 xl:bottom-20 right-4  xl:right-20 z-20 p-4 xl:max-w-[55%] text-right border-r-4 border-white">
    <h3 className="text-2xl md:text-4xl xl:text-6xl  text-white">
    Asesoramiento a emprendedores
    </h3>
    <span className=" font-medium hidden sm:inline text-sm  md:text-lg xl:text-xl text-white mt-2">Nos centramos en convertir las visiones innovadoras en realidades comerciales exitosas. Sabemos que iniciar un negocio es una aventura que requiere más que pasión: necesita una base sólida. </span>
    <span className='font-medium hidden  text-sm  md:text-lg xl:text-xl text-white mt-2 xl:inline'>
    Nuestro equipo proporciona orientación experta en la estructuración empresarial, planificación financiera y estrategias de crecimiento sostenible. Acompañamos a los emprendedores en cada paso, asegurando que su trayectoria desde el concepto inicial hasta el mercado sea lo más fluida y efectiva posible.
    </span>
  </div>
</div>
  )
}

export default ServicesCard4