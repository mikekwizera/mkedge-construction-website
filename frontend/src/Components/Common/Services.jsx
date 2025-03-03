import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'
import ServiceImg from '../../assets/images/construction1.jpg';

const Services = () => {
  return (
    <>
     <Header />
        <Hero preHeading='Quality, Integrity, Value.' Heading='Services' text='We excel at transformation visions into reality <br />through outstanding craftsmanship and precise.'/>
     <Footer />

             <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                 <div className='section-header text-center py-5'>
                     <span>our services</span>
                     <h2>Our construction services</h2>
                     <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
                 </div>
                 <div className='row pt-4'>
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>                     
                     <div className='col-md-4 col-lg-4'>
                         <div className='item'>
                             <div className='service-image'>
                                 <img src={ServiceImg} alt="" className='w-100'/>
                             </div>
                             <div className='service-body'>
                                 <div className='service-title'>
                                     <h3>Speciality Construction</h3>
                                 </div>
                                 <div className='service-content'>
                                     <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                                 </div>
                                 <a href="#" className='btn btn-primary small'>Read More</a>
                             </div>
                         </div>
                     </div>
                 </div>
                </div>
             </section>
    </>
  )
}

export default Services