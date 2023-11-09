import React from 'react'
import Image from 'next/image'

const AboutCard = () => {
  return (
    <div className="relative ">
        <figure className="overflow-hidden max-h-[100vh]">
          <Image
            src='/mesa.jpg'
            alt='Combria Logo'
            width={2000}
            height={400}
            className='bg-blend-color-dodge bg-opacity-50'
          />
          <div className="absolute inset-0 bg-mainbrown opacity-50" />
        </figure>
        <div className="absolute inset-0  flex flex-col justify-center items-center z-10 p-4 text-center">
          <h3 className="text-2xl md:text-4xl xl:text-6xl mb-8 text-white font-josefine">
            Sobre Nosotros
          </h3>
          <p className="text-sm  md:text-xl xl:text-2xl  text-white mb-4 mt-2  max-w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed aspernatur, tempore neque blanditiis, iusto inventore reiciendis ad quasi quas rerum, velit sunt? Nostrum laudantium doloribus quam atque consectetur harum sapiente mollitia doloremque est excepturi facilis amet, quisquam assumenda omnis, eum aperiam libero dolorum animi?</p>
          <p className='hidden md:flex text-sm  md:text-xl xl:text-2xl  text-white mb-4  mt-2 max-w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis iusto officia beatae expedita excepturi porro reiciendis unde, fugit libero totam facere, ad laboriosam corrupti dolore impedit cupiditate nobis dolor, eveniet nihil. Unde tempora ut ea et mollitia, non ad dolor, facere minima, quis quo nihil.</p>
        </div>
      </div>
  )
}

export default AboutCard