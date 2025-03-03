import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'

const ContactUs = () => {
  return (
    <>
    <Header/>
        <main>
        <Hero preHeading='Quality, Integrity, Value.' Heading='Contact Us' text='We excel at transformation visions into reality <br />through outstanding craftsmanship and precise.'/>

        <section className='section-9 py-5'>
            <div className='container'>
                <div className='section-header text-center py-5'>
                    <span></span>
                    <h2>Contact Us</h2>
                    <p>Our dedicated experts are here to help you with any of your questions, contact us by <br /> filling out the form below and we will be in touch shortly
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <div className='card shadow border-0 mb-3'>
                            <div className='card-body p-4'>
                                <h3>Call Us</h3>
                                <div><a href="#">(+25766818858)</a></div>
                                <div><a href="#">(+25769045697)</a></div>

                                <h3 className='mt-4'>You can send Us Email:</h3>
                                <div><a href="#">mikekwizera4@gmail.com</a></div>
                                <div><a href="#">damike2122@gmail.com</a></div>

                                <h3 className='mt-4'>Adress</h3>
                                <div>Bujumbura, Gahahe <br /> MCG2+PG5 Bujumbura</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='card shadow border-0'>
                            <div className='card-body py-5'>
                                <form action="">
                                    <div className='row'>
                                        <div className='col-md-6 mb-4'>
                                            <label htmlFor="" className='form-label'>Your Name</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name'/>
                                        </div>
                                        <div className='col-md-6 mb-4'>
                                            <label  htmlFor="" className='form-label'>Your Email</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Your Email'/>
                                        </div>
                                        <div className='col-md-6 mb-4'>
                                            <label htmlFor="" className='form-label'>Phone Number:</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='+...'/>
                                        </div>
                                        <div className='col-md-6 mb-4'>
                                            <label  htmlFor="" className='form-label'>Subject</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Subject '/>
                                        </div>

                                        <div>
                                            <label htmlFor="" className='form-label'>Message</label>
                                            <textarea name="" id="" rows={5} placeholder='Message' className='form-control form-control-lg'></textarea>
                                        </div>
                                    </div>
                                    <button className='btn btn-primary large mt-3'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    <Footer/>
    </>
  )
}

export default ContactUs