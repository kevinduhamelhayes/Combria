'use client'

import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/zoom'

import ServicesCard from '../atoms/ServicesCard'
import ServicesCard1 from '../atoms/ServicesCard1'
import ServicesCard2 from '../atoms/ServicesCard2'
import ServicesCard3 from '../atoms/ServicesCard3'
import ServicesCard4 from '../atoms/ServicesCard4'
import ServicesCard5 from '../atoms/ServicesCard5'
import ServicesCard6 from '../atoms/ServicesCard6'



const ServicesWrapper = () => {


  return (
    <div className="z-20 flex w-full flex-col  items-center justify-center bg-blue-dark ">
      <section className="flex md:min-h-[880px] h-full w-full items-center overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            450: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          className="flex h-full w-full flex-row"
          navigation
          autoplay={{
            delay: 7500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,

          }}
          loop={true}        
        >
            <SwiperSlide>
              <ServicesCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard1/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard2/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard3/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard4/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard5/>
            </SwiperSlide>
            <SwiperSlide>
              <ServicesCard6/>
            </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}


export default ServicesWrapper