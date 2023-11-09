'use client'
import Image from 'next/image'

const error = () => (
  <main className="flex h-[600px] grow flex-col items-center justify-center bg-white">
    <section className="flex w-full h-full   max-w-4xl flex-col items-center justify-center bg-white shadow-mainbrown p-4 shadow-2xl rounded-2xl md:p-8">
    <div className='hidden'>
      <figure className='flex flex-col items-center justify-center w-screen h-[60vh]'>
        <Image
          src='/logoRC.svg'
          alt='Combria Logo'
          width={600}
          height={400}
          className=''
        />
        </figure>
      </div>
      <h3 className=" text-xl font-semibold font-josefine text-mainbrown mb-10  md:text-6xl">Error 500</h3>
      
        <p className='font-medium text-2xl text-mainbrown m-2'>Parece que hubo un error del lado del servidor !!!</p>
        <p className='font-medium text-2xl text-mainbrown m2'>Por favor, intenta de nuevo más tarde.</p>
     
    </section>
  </main>
)

export default error