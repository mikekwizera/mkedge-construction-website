import React, { useState }  from 'react'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar'
import Footer from '../../Common/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token, fileUrl } from '../../Common/http' 
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

const Edit = () => {

    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [testimonial, setTestimonial] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const{
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm({
            defaultValues: async () => {
                const res = await fetch(apiUrl+'testimonials/'+params.id,{
                    'method' : 'GET',
                    'headers' : {
                        'Content-type' : 'application/json',
                        'Accept' : 'application/json',
                        'Authorization' : `Bearer ${token()}`
                    }
                });
                const result = await res.json();
                setTestimonial(result.data);
                return {
                    testimonial: result.data.testimonial,
                    citation: result.data.citation,
                    designation: result.data.designation,
                    status: result.data.status,
                }
            }
        })

    const onSubmit = async (data) => {
        const newData = { ...data, "imageId": imageId };

        const res = await fetch(apiUrl+'testimonials/'+params.id,{
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });

        const result = await res.json();
        
        if (result.status == true) {
            toast.success(result.message);
            navigate('/admin/testimonials')
        } else {
            toast.error(result.message);
        }
    }


    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image",file);
        setIsDisable(true);

        await fetch(apiUrl+'temp-images',{
            'method' : 'POST',
            'headers' : {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: formData
        })
        .then(response => response.json())
        .then(result =>{
            setIsDisable(false);
            // console.log(result); 
            if (result.status == false) {
                toast.error(result.errors.image[0])
            } else {
                setImageId(result.data.id)
            }
        });
    }
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
                                <h4 className='h5'><strong>Testimonials/Edit</strong></h4>
                                <Link to="/admin/testimonials" className='btn btn-primary'>Back</Link>
                              </div>
                              <hr />

                              <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Testimonial</label>
                                    <textarea
                                    placeholder='Testimonial'
                                    {
                                        ...register('testimonial', {
                                            required : "The Testimonial is required"
                                        })
                                    }
                                    className={`form-control ${errors.testimonial && 'is-invalid'}`}
                                    rows={4}></textarea>
                                    {
                                        errors.testimonial && <p className='invalid-feedback'>{errors.testimonial?.message}</p>
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Citation</label>
                                    <input
                                    placeholder='Citation'
                                    {
                                        ...register('citation', {
                                            required : "The citation is required"
                                        })
                                    }
                                     type="text" 
                                     className={`form-control ${errors.citation && 'is-invalid'}`}
                                      />
                                    {
                                        errors.citation && <p className='invalid-feedback'>{errors.citation?.message}</p>
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Designation</label>
                                    <input
                                    placeholder='Designation'
                                    {
                                        ...register('designation')
                                    }
                                     type="text" 
                                     className={`form-control`}
                                      />
                                </div>
                                
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Image</label>
                                    <br />
                                    <input onChange={handleFile} type="file" />
 
                                </div>

                                <div className='pb-3'>
                                    {
                                        testimonial.image && <img src={fileUrl+'uploads/testimonials/'+testimonial.image} alt="" />
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Status</label>
                                    <select className='form-control'
                                    {
                                        ...register('status')
                                    }
                                    >
                                        <option value="1">Active</option>
                                        <option value="0">Block</option>
                                    </select>
                                </div>

                                <button type="submit" disabled={isDisable} className='btn btn-primary'>Update</button>

                              </form>
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

export default Edit