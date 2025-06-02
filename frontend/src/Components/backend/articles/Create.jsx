import React, { useState, useRef, useMemo }  from 'react'
import Header from '../../Common/Header'
import Sidebar from '../../Common/Sidebar'
import Footer from '../../Common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../Common/http' 
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
import JoditEditor from 'jodit-react';

const Create = ({placeholder}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || 'Content'
        }),
        [placeholder]
    );

    const{
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId}
        const res = await fetch(apiUrl+'articles',{
            'method' : 'POST',
            'headers' : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        
        if (result.status == true) {
            toast.success(result.message);
            navigate('/admin/articles')
        }else {
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
                                <h4 className='h5'><strong>Article/Create</strong></h4>
                                <Link to="/admin/articles" className='btn btn-primary'>Back</Link>
                              </div>
                              <hr />

                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Title</label>
                                    <input
                                    placeholder='Title'
                                    {
                                        ...register('title', {
                                            required : "The title is required"
                                        })
                                    }
                                     type="text" 
                                     className={`form-control ${errors.title && 'is-invalid'}`}
                                      />
                                    {
                                        errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                    }
                                </div>
                                
                                <div className='mb-3'>
                                    <label htmlFor="" 
                                    className='form-label'>Slug</label>
                                    <input type="text" 
                                    placeholder='Slug'
                                    {
                                        ...register('slug', {
                                            required : "The slug is required"
                                        })
                                    }
                                    className={`form-control ${errors.slug && 'is-invalid'}`} />

                                    {
                                        errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="" 
                                    className='form-label'>Author</label>
                                    <input type="text" 
                                    placeholder='Author'
                                    {
                                        ...register('author')
                                    }
                                    className={`form-control`} />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor=""className='form-label'>Content</label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1}
                                        onBlur={newContent => setContent(newContent)}
                                        onChange={newContent => {}} 
                                />
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Image</label>
                                    <br />
                                    <input onChange={handleFile} type="file" />
 
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

                                <button disabled={isDisable} className='btn btn-primary'>Submit</button>

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

export default Create