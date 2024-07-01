import React from 'react'
import Home from '../components/HomeComponent/Home'
import About from '../components/HomeComponent/About'
import Services from '../components/HomeComponent/Services'
import Events from '../components/HomeComponent/Events'
import Footer from '../components/layout/Footer'
import Contactus from '../components/HomeComponent/Contactus'

const HomePage = () => {
  return (
    <div>
        <Home/>
        <Services/>
        <Events/>
        <About/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default HomePage