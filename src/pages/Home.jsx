import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

function Home() {
  return (
  <>
   <div className="font-sans">
     <Navbar/>
    <HeroSection/>
    <ServicesSection/>
    <Footer/>
   </div>
  </>
  )
}

export default Home