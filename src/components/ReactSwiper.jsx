import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../utils/data.json';

// Import Swiper styles
import 'swiper/css';
import Card from './Card';

const ReactSwiper = () => {
  return (
    <div>
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    
  >
    {
        data.map((item,i)=>(

            <SwiperSlide key={i}>
                <Card data={item}/>
            </SwiperSlide>
        ))
    }  
  </Swiper>
  </div>
  )
}

export default ReactSwiper