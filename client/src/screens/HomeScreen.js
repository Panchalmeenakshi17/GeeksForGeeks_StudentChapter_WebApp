import React from 'react'
import CoreTeam from '../components/CoreTeam'
import EventSlider from '../components/EventSlider'
import ExtendedTeam from '../components/ExtendedTeam'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import Gallery from '../components/Gallery'

const HomeScreen = () => {
  return (
    <div className=' bg-[black]'>
      <Header />
      <HeroSection />
      <EventSlider />
      <CoreTeam />
      
      <ExtendedTeam /> 
        <Gallery/>
      
      <FooterSection/> 

    </div>
  )
}

export default HomeScreen
