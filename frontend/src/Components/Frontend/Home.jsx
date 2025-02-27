import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <main>
        {/* hero Section */ }
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='text-center'>
                        <span>Welcome Amazing Constructions</span>
                        <h1>Crafting dreams with <br/> precious and excellence.</h1>
                        <p>We excel at transformation visions into reality through outstanding craftsmanship and precise <br/> attention to detail. With years of experience and a dedication to quality.</p>
                        <div className='mt-4'>
                           <a className='btn btn-primary'>Contact Now</a>
                           <a className='btn btn-secondary ms-3'>View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Section */ }

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
    </main>
    <Footer/>
    </>
  )
}

export default Home