import React from 'react'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import About from '../Common/About';
import LatestServices from '../Common/LatestServices';
import LatestProjects from '../Common/LatestProjects';
import LatestArticles from '../Common/LatestArticles';
import ShowTestimonial from '../Common/ShowTestimonial';

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
                           <a className='btn btn-primary large'>Contact Now</a>
                           <a className='btn btn-secondary ms-3 large'>View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */ }
            <About />

        {/* Our services */ }

        <LatestServices />

        {/* Why Choose Us */ }

        <section className='section-4 py-5'>
            <div className='contaier py-5'>
                <div className='section-header text-center'>
                <span>Why Choose Us</span>
                <h2>Discover our wide variety of projects</h2>
                <p>Create in close partenership with our clients and collaborators, this approach merges industry expertise, <br/> decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                </div>
                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon1} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                                <p>Small actions crate big impacts. It all begins and ends with each employee committing to safer wor practices daily, ensuring they return home safely.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon2} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                                <p>Small actions crate big impacts. It all begins and ends with each employee committing to safer wor practices daily, ensuring they return home safely.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon3} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                                <p>Small actions crate big impacts. It all begins and ends with each employee committing to safer wor practices daily, ensuring they return home safely.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Our Projects */ }

        <LatestProjects />

        <ShowTestimonial />

         {/* LatestArticles */ }

        <LatestArticles />



    </main>
    <Footer/>
    </>
  )
}

export default Home