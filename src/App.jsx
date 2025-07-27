import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/Services'
import HotelSlider from './components/HotelSlider'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/privacyPolicy'
import TermsConditions from './pages/termAndConditions'

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <ServicesSection/>
      <Contact/>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App