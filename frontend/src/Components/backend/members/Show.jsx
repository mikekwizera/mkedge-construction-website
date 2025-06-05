import React, { useEffect, useState } from 'react'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar'
import Footer from '../../Common/Footer'
import { apiUrl, token } from '../../Common/http'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

const Show = () => {

  const [members, setMembers] = useState([]);

  const fetchMembers = async() => {
    const res = await fetch(apiUrl+'members',{
      'method' : 'GET',
      'headers' : {
          'Content-type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token()}`
      }
    });
    const result = await res.json();
    setMembers(result.data);
  }

  const deleteMember = async (id) => {

    if (confirm("Are you sure you want to delete?")) {
      const res = await fetch(apiUrl+'members/'+id,{
        'method' : 'DELETE',
        'headers' : {
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${token()}`
        }
      });
      const result = await res.json();

      if (result.status == true) {
        const newMembere = members.filter(member => member.id != id)
        setMembers(newMembere);
        toast.success(result.message)
      }else {
        toast.error(result.message)
      }
    }
  }

  useEffect(() => {
    fetchMembers()
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
                                  <h4 className='h5'><strong>Members</strong></h4>
                                  <Link to="/admin/members/create" className='btn btn-primary'>Create</Link>
                                </div>
                                <hr />

                                <table className='table table-striped'>
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Job Title</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      members && members.map(member => {
                                          return (
                                            <tr key={`member-${member.id}`}>
                                              <td>{member.id}</td>
                                              <td>{member.name}</td>
                                              <td>{member.job_title}</td>
                                              <td>
                                                {
                                                (member.status == 1) ? 'Active' : 'Block'
                                                }
                                                </td>
                                              <td>
                                                <Link to={`/admin/members/edit/${member.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                <Link onClick={() => deleteMember(member.id)} href="#" className='btn btn-secondary btn-sm ms-2'>Delete</Link>
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