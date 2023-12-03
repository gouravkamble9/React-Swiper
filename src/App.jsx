import React from 'react'
import './App.css'
import ReactSwiper from './components/ReactSwiper'
import ReactSwiper1 from './components/ReactSwiper1'

const App = () => {
  return (
    <div className='App'>
      <div className='swiper-container'>
      <ReactSwiper/>
      <ReactSwiper1/>
      </div>
    </div>
  )
}

export default App