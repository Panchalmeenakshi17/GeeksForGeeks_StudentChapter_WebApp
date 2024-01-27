import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const EventSlider = () => {
  return (
    <>
      <div className='flex justify-center md:mt-40 my-24 '>
         <h1 className='text-gfgmaincolor  font-scnd font-black  text-4xl md:p-0 p-5 md:text-6xl'>Motive of GFG Student Chapter | DCE</h1>
      </div>
      
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection : false}}
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
      <SwiperSlide>
          <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">
          <div className=" p-2 w-full md:p-20 ">
          <h2>Learning and Skill Development</h2>

          <p>Facilitate the learning and skill development of community members.</p>
          </div>
          </div>
          <div
            className="swiper-slide-image"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">
          <div className=" p-5 w-full md:p-20 ">
            <h2>Knowledge Sharing</h2>
            <p>Encourage members to share their experiences, insights, and expertise with others in the community.</p>
            </div>
          </div>
          <div
            className=" backdrop-blur-lg swiper-slide-image"
            style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
          />
        </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">
          <div className=" p-5 w-full md:p-20 ">
            <h2>Networking and Collaboration:</h2>
            <p>Provide opportunities for networking with peers, mentors, and industry professionals.</p>
            </div>
          </div>
          <div
            className="swiper-slide-image"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">
          <div className=" p-5 w-full md:p-20 ">
            <h2>Coding Challenges and Competitions</h2>
            <p>Organize coding challenges, hackathons, and competitions to engage members and enhance their problem-solving skills.</p>
          </div>
          </div>
          <div
            className="swiper-slide-image"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </SwiperSlide>
      <SwiperSlide>
           <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">
           <div className=" p-5 w-full md:p-20 ">
           
            <h2>Community Engagement:</h2>
            <p>Organize events, meetups, webinars, and conferences to bring members together.</p>
          </div>
          </div>
          <div
            className="swiper-slide-image"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide-content rounded-3xl shadow-black shadow-2xl border-2 border-black bg-[#000000bf] backdrop-blur-lg">

                    <div className=" p-5 w-full md:p-20 ">
                    
            <h2>Fun and Enjoyment</h2>
            <p>Make learning and collaboration enjoyable by incorporating fun activities, social events, and team-building exercises.</p>
            </div>
          </div>
          <div
            className="swiper-slide-image"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default EventSlider
