import Image from 'next/image'
import BlogCard from '../../components/atoms/BlogCard'

const page = async () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://devink-cms.onrender.com/api/blogs?populate=cover',
      { next: { revalidate: 86400 } },
    )
    const data = response.json()
    return data
  }

  const blogsData = await fetchData()

  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <main className="flex min-h-[70vh] flex-col bg-white items-center overflow-x-hidden scroll-smooth ">
             <div className="relative h-[50vh]">
        <figure className="overflow-hidden max-h-[100vh]">
    <Image
      src='/HERO13.jpg'
      alt='Combria Logo'
      width={2000}
      height={400}
      className='h-[50vh]'
    />
    <div className="absolute inset-0 bg-mainbrown opacity-50" />
  </figure>
  <div className="absolute top-[20vh] left-[20vw]  z-20 max-w-[55%] p-4  w-full text-center ">
    <h3 className="text-6xl  text-white">
      Vision
    </h3>
    <h2 className="mt-5 text-[20px] text-white font-light md:text-[30px]  ">
          Descubre las ultimas novedades:
        </h2>
    </div>  
    </div>
      <header className="mx-auto mt-5 flex w-[90%] max-w-[1300px] flex-col justify-start">

        
      </header>
      <section className="mt-5 mb-6  flex w-full max-w-[1300px] flex-col md:flex-row">
        {blogsData
          ? blogsData.data?.map((blog:any) => (
            <BlogCard blog={blog} key={blog.id} />
          ))
          : 'No hay blogs'}
      </section>
    </main>
  )
}

export default page
