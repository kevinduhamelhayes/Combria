
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
import AboutCard from '../atoms/AboutCard';
import AboutCard1 from '../atoms/AboutCard1';
import AboutCard2 from '../atoms/AboutCard2';




const About = () => {
  
  return (

      <section className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh]  w-full items-center ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay, ]}
          direction='vertical'
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
          

          pagination={{
            clickable: true,

          }}
          autoplay={{
            delay: 15000,
            disableOnInteraction: true,
          }}
          className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh] w-full flex flex-col   "
        >
            <SwiperSlide className='max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh] w-full'>
              <AboutCard/>
            </SwiperSlide >
            <SwiperSlide className='max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh] w-full'>
            <AboutCard1/>
            </SwiperSlide>
            <SwiperSlide className='max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh] w-full'>
            <AboutCard2/>
            </SwiperSlide>
        </Swiper>
      </section>

  )
}




export default About
