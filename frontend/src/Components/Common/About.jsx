import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'

const About = () => {
  return (
           <section className='section-2 py-5'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-6'>
                           <img src={AboutImg} className='w-100'/>
                       </div>
   
                       <div className='col-md-6'>
                           <span>about us</span>
                           <h2>Crafting structures that last a lifetime</h2>
                           <p>To craft structures that last a lifetime, prioritize using materials like stone, high-quality concrete, steel, and well-treated timber as they are known for exceptional durability and resistance </p>
                           <p>to weathering, while also considering thoughtful design principles like proper foundation laying, water management, and protection against environmental factors like moisture and pests. </p>
                       </div>
                   </div>
               </div>
           </section>
  )
}

export default About