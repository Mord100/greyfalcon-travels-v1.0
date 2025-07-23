import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/Services'
import HotelSlider from './components/HotelSlider'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HotelSlider/>
      <ServicesSection/>
    </div>
  )
}

export default App