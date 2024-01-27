import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Gallery = () => {
  return (
    <>
         <div className='flex justify-center md:mt-40  '>
         <h1 className='text-gfgmaincolor  font-scnd font-black text-5xl md:p-0 p-5 md:text-6xl'>Some Glimpse of our Hackathons</h1>
      </div>
      <div className=" mt-20">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        loop={true}
        style={{ height: "500px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(images/7.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        
        <SwiperSlide
          style={{
            backgroundImage: "url(images/1.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/2.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/3.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/4.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(images/5.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        >
        </SwiperSlide>
        {/* <SwiperSlide
          style={{
            backgroundImage: "url(images/8.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '2rem',
          }}
        > */}
        {/* </SwiperSlide> */}
        
      </Swiper>
      </div>
    </>
  )
}

export default Gallery