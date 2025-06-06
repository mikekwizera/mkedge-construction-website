import React, { useState, useEffect } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'
import { useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../Common/http';
import ShowTestimonial from '../Common/ShowTestimonial';

const ProjectDetail = () => {
    const params = useParams()
    const [project, setProject] = useState([]);
    
    const fetchProject = async () => {
        const res = await fetch(`${apiUrl}get-project/${params.id}`,{
            'method' : 'GET',
        });
        const result = await res.json();
        setProject(result.data)
    }

    useEffect(() => {
        fetchProject();
    },[]);
  return (
        <>
    <Header/>
        <main>
            <Hero preHeading='Quality, Integrity, Value.' Heading={`${project.title}`} text=''/>

            <section className='section-10'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 sidebar'>
                                <div className='card-body px-4 py-4'>
                                    <h3 className='mt-2 mb-3'>Insights</h3>
                                    <ul>
                                        {
                                           project.location && <li>
                                            <span>Location</span>
                                            <p>{project.location}</p>
                                        </li>
                                        }

                                        {
                                           project.construction_type && <li>
                                            <span>Construction Type</span>
                                            <p>{project.construction_type}</p>
                                        </li>
                                        }

                                        {
                                           project.sector && <li>
                                            <span>Sector</span>
                                            <p>{project.sector}</p>
                                        </li>
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div>
                                <img className='w-100' src={`${fileUrl}uploads/projects/large/${project.image}`} alt="" />
                            </div>
                            <h3 className='py-3'>{project.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: project.content}}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-11 bg-light py-5'>
               <ShowTestimonial/>
            </section>
        </main>
    <Footer/>
    </>
  )
}

export default ProjectDetail