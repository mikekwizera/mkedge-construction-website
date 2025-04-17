import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar'
import Footer from '../../Common/Footer'
import { apiUrl, token } from '../../Common/http'
import { Link } from 'react-router-dom'

const Show = () => {

  const [services, setServices] = useState([]);

  const fetchServices = async() => {
    const res = await fetch(apiUrl+'services',{
      'method' : 'GET',
      'headers' : {
        'Content-type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token()}`
      }
    });
    const result = await res.json();
    setServices(result.data);
    console.log(result)
  }

  useEffect(() => {
    fetchServices()
  })
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
                                  <h4 className='h5'>Services</h4>
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
                                    {
                                      services && services.map(service => {
                                        return (
                                          <tr key={`service-${service.id}`}>
                                            <td>{service.id}</td>
                                            <td>{service.title}</td>
                                            <td>{service.slug}</td>
                                            <td>
                                              {
                                              (service.status == 1) ? 'Active' : 'Block'
                                              }
                                              </td>
                                            <td>
                                              <a href="" className='btn btn-primary btn-sm'>Edit</a>
                                              <a href="" className='btn btn-secondary btn-sm ms-2'>Delete</a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                    }
                                  <tbody>

                                  </tbody>
                                </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      <Footer/>
    </>
  )
}

export default Show