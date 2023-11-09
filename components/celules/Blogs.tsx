/* eslint-disable import/prefer-default-export */

'use client'

import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import BlogCard from '../atoms/BlogCard'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'
import { type } from 'os'

const fetchData = async () => {
  const response = await fetch('https://devink-cms.onrender.com/api/blogs?populate=cover', { next: { revalidate: 86400 } })
  const data = response.json()
  return data
}

async function Blogs() {
  const blogsData = await fetchData()

  // Si no hay blogs, retornar null
  if (!blogsData.data || blogsData.data.length === 0) {
    return null
  }

  return (
    <div className="z-20 flex w-full flex-col  items-center justify-center bg-blue-dark px-2 py-8 md:px-6">
      <h3 className="py-6 text-2xl font-bold text-cyan-bright">Nuestros Blogs</h3>
      <section className=" flex  h-[550px] w-full items-center overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="flex h-[550px] w-full flex-row"
          navigation
          autoplay={{

            delay: 7500,
            disableOnInteraction: false,
          }}
        >

          {blogsData.data?.map((blog:any)  => (
            <SwiperSlide>
              <BlogCard blog={blog} key={blog.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}
export default Blogs