import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './ReactSwiper1.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import data1 from '../utils/data1.json'

// import required modules
import { Navigation } from 'swiper/modules';

export default function ReactSwiper1() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
           data1.map((item,id)=>(

               <SwiperSlide key={id}>
                <img src={item.img} alt="img" style={{width:"400px"}}/>
               </SwiperSlide>
           )) 
        }
      </Swiper>
    </>
  );
}
