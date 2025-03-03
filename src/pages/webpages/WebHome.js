import React from 'react'
import Navbar from '../../Component/Navbar'
import Hero from '../../Component/Hero'
import About from '../../Component/About'
import ServicesSection from '../../Component/ServicesSection'
import Steps from '../../Component/Steps'
import ThreeBoxes from '../../Component/ThreeBoxes'
import Footer from '../../Component/Footer.js'
const WebHome = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <ServicesSection></ServicesSection>
        <ThreeBoxes></ThreeBoxes>
        <Steps></Steps>
         <Footer></Footer>
      
      
    </div>
  )
}

export default WebHome
