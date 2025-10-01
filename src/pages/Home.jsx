import React from 'react'
import Navbar from '../components/Navbar'
// import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs'
import EquipmentAndProducts from '../components/EquipmentsandProduct'
import ContactSection from '../components/ContactSection'
import HeroNew from '../components/HeroNew'

function Home() {
  return (
  <>
   <div >
     <Navbar/>
    {/* <HeroSection/> */}
   <HeroNew/>
    <ServicesSection/>
    <EquipmentAndProducts/>
    <WhyChooseUs/>
    <ContactSection/>
    <Footer/>
   </div>
  </>
  )
}

export default Home