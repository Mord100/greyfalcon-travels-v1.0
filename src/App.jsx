import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/Services'
import HotelSlider from './components/HotelSlider'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HotelSlider/>
      <AboutUs/>
      <ServicesSection/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App