import React from 'react'
import Image from 'next/image'

const CardClient = () => {
  return (
    <div className='md:w-[300px]  md:h-[450px] flex md:flex-col justify-between bg-white p-6 shadow-2xl rounded-2xl border'>
      <div>
        <p className='text-base  inline  font-normal'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, distinctio! Accusamus, vero totam eaque id laudantium dolore deserunt distinctio minima! Impedit nemo incidunt pariatur, qui obcaecati,</p>
          <p className='text-base   hidden sm:inline'> dolor natus quam, et unde eius magni animi sequi sunt. Eveniet ad modi voluptatum qui natus, error consequatur et harum assumenda, excepturi hic eligendi, atque quas aperiam veritatis cum."
        </p>
      </div>
      <div className=' flex flex-col md:flex-row items-center justify-start gap-6'>
        <figure className='flex '>
          <Image
          src='/CEO2.jpg'
          alt='Combria Logo'
          width={100}
          height={100}
          className='rounded-[50%] max-h-[90px] max-w-[80px]'
          />
        </figure>
        <div className='flex flex-col items-start'>

          <strong>Juan Ferreira</strong>
          <small className='font-normal md:inline hidden text-base'>CEO pesico & co</small>
        </div>
        
      </div>
    </div>
  )
}

export default CardClient