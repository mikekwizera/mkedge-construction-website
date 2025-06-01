import React from 'react'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/author-2.jpg';
import { Pagination } from 'swiper/modules'; 
import About from '../Common/About';
import LatestServices from '../Common/LatestServices';
import LatestProjects from '../Common/LatestProjects';


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



        <section className='section-5 py-5'>
            <div className='container'>
            <div className='section-header text-center py-5'>
                <span>testimonials</span>
                <h2>What people are saying about us</h2>
                <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <Swiper 
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
                <div className='card shadow border-0'>
                    <div className='card-body p-5'>
                        <div className='rating'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className='content pt-3 pb-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <hr />
                        <div className='d-flex meta'>
                            <div>
                                <img src={AvatarImg} alt="" width={50}/>
                            </div>
                            <div className='ps-3'>
                                <div className='name'>John Doe</div>
                                <div>CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card shadow border-0'>
                    <div className='card-body p-5'>
                        <div className='rating'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className='content pt-3 pb-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <hr />
                        <div className='d-flex meta'>
                            <div>
                                <img src={AvatarImg} alt="" width={50}/>
                            </div>
                            <div className='ps-3'>
                                <div className='name'>John Doe</div>
                                <div>CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card shadow border-0'>
                    <div className='card-body p-5'>
                        <div className='rating'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className='content pt-3 pb-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <hr />
                        <div className='d-flex meta'>
                            <div>
                                <img src={AvatarImg} alt="" width={50}/>
                            </div>
                            <div className='ps-3'>
                                <div className='name'>John Doe</div>
                                <div>CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card shadow border-0'>
                    <div className='card-body p-5'>
                        <div className='rating'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className='content pt-3 pb-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <hr />
                        <div className='d-flex meta'>
                            <div>
                                <img src={AvatarImg} alt="" width={50}/>
                            </div>
                            <div className='ps-3'>
                                <div className='name'>John Doe</div>
                                <div>CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            </div>
        </section>

        <section className='section-6 bg-light py-5'>
            <div className='container'>
              <div className='section-header text-center py-5'>
                 <span>Blog & news</span>
                 <h2>Article $ blog posts</h2>
                 <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
              </div>
              <div className='row pt-3'>
                <div className='col-md-4'>
                    <div className='card shadow border-0'>
                        <div className='card-img-top'>
                            <img src={BlogImg} alt="" className='w-100'/>
                        </div>
                        <div className='card-body p-4'>
                            <div className='mb-3'>
                                <a href="" className='title'>Dummy blog title</a>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card shadow border-0'>
                        <div className='card-img-top'>
                            <img src={BlogImg} alt="" className='w-100'/>
                        </div>
                        <div className='card-body p-4'>
                            <div className='mb-3'>
                                <a href="" className='title'>Dummy blog title</a>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>                <div className='col-md-4'>
                    <div className='card shadow border-0'>
                        <div className='card-img-top'>
                            <img src={BlogImg} alt="" className='w-100'/>
                        </div>
                        <div className='card-body p-4'>
                            <div className='mb-3'>
                                <a href="" className='title'>Dummy blog title</a>
                            </div>
                            <a href="" className='btn btn-primary small'>Read More</a>
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

export default Home