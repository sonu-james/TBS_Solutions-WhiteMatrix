import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs'
import EquipmentAndProducts from '../components/EquipmentsandProduct'

function Home() {
  return (
  <>
   <div className="font-sans">
     <Navbar/>
    <HeroSection/>
    <ServicesSection/>
    <EquipmentAndProducts/>
    <WhyChooseUs/>
    <Footer/>
   </div>
  </>
  )
}

export default Home