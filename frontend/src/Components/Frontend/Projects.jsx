import React, { useState, useEffect } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'
import { apiUrl, fileUrl } from '../Common/http';
import { Link } from 'react-router-dom';

const Projects = () => {
        const [projects, setProjects] = useState([]);
    
        const fetchProjects = async () => {
            const res = await fetch(apiUrl+'get-projects',{
                'method' : 'GET',
            });
            const result = await res.json();
            if (result.status ==  true) {
                setProjects(result.data)
            }
        }
    
        useEffect(() => {
            fetchProjects()
        },[]);
  return (
    <>
        <Header/>
        <main>
            <Hero preHeading='Quality, Integrity, Value.' Heading='Our Projects' text='We excel at transformation visions into reality <br />through outstanding craftsmanship and precise.'/>

            <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center py-5'>
                        <span>our projects</span>
                        <h2>Discover our diverce range of projects</h2>
                        <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>
                        {
                            projects && projects.map(project => {
                                return (
                                <div className='col-md-4 col-lg-4' key={project.id}>
                                    <div className='item'>
                                        <div className='service-image'>
                                            <img src={`${fileUrl}uploads/projects/small/${project.image}`} alt="" className='w-100'/>
                                        </div>
                                        <div className='service-body'>
                                            <div className='service-title'>
                                            <h3>{project.title}</h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>{project.short_desc}</p>
                                            </div>
                                               <Link to={`/project/${project.id}`} className='btn btn-primary small'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>

        <Footer/>
    </>
  )
}

export default Projects