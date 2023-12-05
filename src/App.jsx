import React from 'react'
import './App.css'
import ReactSwiper from './components/ReactSwiper'
import ReactSwiper1 from './components/ReactSwiper1'
import AutoSwiper from './components/AutoSwiper/AutoSwiper'
import ParallaxSwiper from './components/parallaxSwiper/ParallaxSwiper'

const App = () => {
  return (
    <div className='App'>
      <div className='swiper-container'>
      <ReactSwiper/>
      <ReactSwiper1/>
      <AutoSwiper/>
      <ParallaxSwiper/>
      </div>
    </div>
  )
}

export default App