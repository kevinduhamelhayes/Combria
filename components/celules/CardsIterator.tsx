'use client'
import React from 'react'
import CardClient from '../atoms/CardClient'
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

const CardsIterator = () => {
  return (
    <section className=" flex w-full ml-[10%] mr-[5%] items-center justify-center ">
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
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }}
    className="flex  flex-row items-center justify-center"
    navigation
    autoplay={{

      delay: 7500,
      disableOnInteraction: false,
    }}
  >


      <SwiperSlide>
        <section className=''>
        <CardClient/>
        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section>
        <CardClient/>
        </section>
    </SwiperSlide>
    <SwiperSlide>
    <section>
        <CardClient/>
        </section>
  </SwiperSlide>
  <SwiperSlide>
  <section>
        <CardClient/>
        </section>
  </SwiperSlide>

  </Swiper>
</section>
  )
}

export default CardsIterator