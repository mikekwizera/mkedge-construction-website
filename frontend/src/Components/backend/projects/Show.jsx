import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar'
import Footer from '../../Common/Footer'
import { apiUrl, token } from '../../Common/http'
import { toast, ToastContainer } from 'react-toastify'

const Show = () => {

        const [projects, setProjects] = useState([]);

        const fetchProjects = async() => {
        const res = await fetch(apiUrl+'projects',{
            'method' : 'GET',
            'headers' : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setProjects(result.data);
    }

    useEffect(() => {
        fetchProjects()
    },[]);

  return (
    <>
      <Header/>
          <main>
              <div className='container my-5'>
                  <div className='row'>
                      <div className='col-md-3'>
                          {/* Slidebard */}
                          <Sidebar />
                      </div>

                      <div className='col-md-9'>
                          {/* Slidebard */}
                          <div className='card shadow border-0'>
                              <div className='card-body p-4'>
                                <div className='d-flex justify-content-between'>
                                  <h4 className='h5'>Projects</h4>
                                  <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
                                </div>
                                <hr />

                                <table className='table table-striped'>
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Slug</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      projects && projects.map(project => {
                                          return (
                                            <tr key={`service-${project.id}`}>
                                              <td>{project.id}</td>
                                              <td>{project.title}</td>
                                              <td>{project.slug}</td>
                                              <td>
                                                {
                                                (project.status == 1) ? 'Active' : 'Block'
                                                }
                                                </td>
                                              <td>
                                                <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                <Link onClick={() => deleteProject(project.id)} href="#" className='btn btn-secondary btn-sm ms-2'>Delete</Link>
                                              </td>
                                            </tr>
                                          )
                                        })
                                      }
                                  </tbody>
                                </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default Show