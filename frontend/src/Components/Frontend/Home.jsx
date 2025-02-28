import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import ConstructionImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

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

        {/* Our services */ }

        <section className='section-3 bg-light py-5'>
            <div className='section-header text-center py-5'>
                <span>our services</span>
                <h2>Our construction services</h2>
                <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-3 col-lg-3'>
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
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
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
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
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
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
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
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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


        <section className='section-3 bg-light py-5'>
            <div className='section-header text-center py-5'>
                <span>our projects</span>
                <h2>Discover our diverce range of projects</h2>
                <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ConstructionImg} alt="" className='w-100'/>
                        </div>
                        <div className='service-body'>
                            <div className='service-title'>
                                <h3>Kolkata Project</h3>
                            </div>
                            <div className='service-content'>
                                <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                            </div>
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ConstructionImg} alt="" className='w-100'/>
                        </div>
                        <div className='service-body'>
                            <div className='service-title'>
                            <h3>Kolkata Project</h3>
                            </div>
                            <div className='service-content'>
                                <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                            </div>
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ConstructionImg} alt="" className='w-100'/>
                        </div>
                        <div className='service-body'>
                            <div className='service-title'>
                            <h3>Kolkata Project</h3>
                            </div>
                            <div className='service-content'>
                                <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                            </div>
                            <a href="#" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ConstructionImg} alt="" className='w-100'/>
                        </div>
                        <div className='service-body'>
                            <div className='service-title'>
                            <h3>Kolkata Project</h3>
                            </div>
                            <div className='service-content'>
                                <p>Speciality construction may refer to a construction service company or a type of construction project that focuses on a specific area or type of building. </p>
                            </div>
                            <a href="#" className='btn btn-primary'>Read More</a>
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