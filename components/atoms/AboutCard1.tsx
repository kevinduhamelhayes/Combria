import React from 'react'
import Image from 'next/image'

const AboutCard1 = () => {
  return (
    <div className="relative ">
        <figure className="overflow-hidden max-h-[100vh]">
    <Image
      src='/HERO2.jpg'
      alt='Combria Logo'
      width={2000}
      height={400}
      className=''
    />
    <div className="absolute inset-0 bg-mainbrown opacity-50" />
  </figure>
  <div className="absolute top-20 left-20 z-20 max-w-[55%] p-4 text-left border-l-4">
    <h3 className="text-2xl md:text-4xl xl:text-6xl  text-white">
      Vision
    </h3>
    <p className="font-medium hidden sm:inline text-sm  md:text-lg xl:text-xl text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium maiores amet minus similique hic recusandae dicta totam ex? </p>
    <p className='font-medium hidden  text-sm  md:text-lg xl:text-xl text-white mt-2 xl:inline'>Perferendis amet autem fugit sit illo in nihil quasi, placeat tempore culpa suscipit nesciunt quos! Vitae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, perspiciatis perferendis! Natus!</p>
  </div>
  <div className="absolute bottom-20 right-20 z-20 p-4 max-w-[55%] text-right border-r-4 border-white">
    <h3 className="text-2xl md:text-4xl xl:text-6xl  text-white">
      Mision
    </h3>
    <p className="font-medium hidden sm:inline text-sm  md:text-lg xl:text-xl text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor iste adipisci sequi maiores unde quaerat deserunt accusamus provident maxime veniam, beatae </p>
    <p className='font-medium hidden  text-sm  md:text-lg xl:text-xl text-white mt-2 xl:inline'>repudiandae labore aliquid incidunt quidem magni assumenda deleniti! Quaerat beatae voluptate qui itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam blanditiis odio!</p>
  </div>
</div>
  )
}

export default AboutCard1