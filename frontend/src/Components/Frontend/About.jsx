import React from 'react'
import ShowTestimonial from '../Common/ShowTestimonial';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import {default as AboutNew} from '../Common/About'
import Hero from '../Common/Hero'
import Team from '../Common/Team';

const About = () => {
  return (
    <>
        <Header/>
          <main>
            <Hero preHeading='Quality, Integrity, Value.' Heading='About Us' text='We excel at transformation visions into reality <br />through outstanding craftsmanship and precise.'/>
            
            <AboutNew/>

            { /* Our Team */}

            <Team/>

            <ShowTestimonial />


          </main>
        <Footer/>
    </>
    )
}

export default About