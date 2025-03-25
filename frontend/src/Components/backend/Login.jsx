import React, { useContext } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/Auth'

const Login = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)

        const res = await fetch("http://127.0.0.1:8000/api/authenticate", { 
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.status == false) {
            toast.error(result.message)
        }else{
            const userInfo = {
                id: result.id,
                token: result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            login(userInfo);
            
            navigate('/admin/dashboard')
        }
        // console.log(result)
    }

  return (
    <>
        <Header/>
            <main>
            <h2 className='py-3 d-flex justify-content-center'>Login</h2>
                <div className='container my-5 d-flex justify-content-center'>
                    <div className='login-form my-5'>
                        <div className='card border-0 shadow'>
                            <div className='card-body p-5'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input 
                                        {
                                            ...register('email', {
                                                required: "This field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email adress"
                                                }
                                            })
                                        } 
                                        type="text" placeholder='Your Email' className={`form-control ${errors.email && 'is-invalid'}`}/>
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                        }
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input 
                                        {
                                            ...register('password', {
                                                required: "This field is required"
                                            })
                                        } 
                                        type="password" placeholder='Your password' className={`form-control ${errors.password && 'is-invalid'}`}/>
                                        {
                                            errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>
                                        }
                                    </div>

                                    <button type='submit' className='btn btn-primary'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ToastContainer />
        <Footer/>
    </>
  )
}

export default Login