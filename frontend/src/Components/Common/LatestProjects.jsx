import React, { useState, useEffect } from 'react'
import { apiUrl, fileUrl } from './http';

const LatestProjects = () => {
    const [projects, setProjects] = useState([]);

    const fetchLatestProjects = async () => {
        const res = await fetch(apiUrl+'get-latest-projects?limit=4',{
            'method' : 'GET',
        });
        const result = await res.json();
        if (result.status ==  true) {
            setProjects(result.data)
        }
    }

    useEffect(() => {
        fetchLatestProjects()
    },[]);
  return (
    <section className='section-3 bg-light py-5'>
        <div className='section-header text-center py-5'>
            <span>our projects</span>
            <h2>Discover our diverce range of projects</h2>
            <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
        </div>
        <div className='row pt-4'>
            {
                projects && projects.map(project => {
                    return (
                    <div className='col-md-3 col-lg-3' key={project.id}>
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
                                <a href="#" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default LatestProjects