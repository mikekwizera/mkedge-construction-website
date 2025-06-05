import React, { useState, useEffect } from 'react'
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiUrl, fileUrl } from '../Common/http';

const ShowTestimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async () => {
        const res = await fetch(apiUrl+'get-testimonials',{
            'method' : 'GET',
        });
        const result = await res.json();
        if (result.status ==  true) {
            setTestimonials(result.data)
        }
    }

    useEffect(() => {
        fetchTestimonials()
    },[]);
  return (
    <section className='section-5 py-5'>
        <div className='container'>
        <div className='section-header text-center py-5'>
            <span>testimonials</span>
            <h2>What people are saying about us</h2>
            <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
        </div>
        <Swiper 
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
            200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            }
        }}
        >
            {
                testimonials && testimonials.map(testimonial => {
                    return (
                        <SwiperSlide key={`testimonial-${testimonial.id}`}>
                            <div className='card shadow border-0'>
                                <div className='card-body p-5'>
                                    <div className='rating'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className='content pt-3 pb-3'>
                                        <p>{testimonial.testimonial}</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex meta'>
                                        <div>
                                            {/* <img src={AvatarImg} alt="" width={50}/> */}
                                            <img src={`${fileUrl}uploads/testimonials/${testimonial.image}`} alt="" width={50}/>
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>{testimonial.citation}</div>
                                            <div>{testimonial.designation}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }


        </Swiper>
        </div>
    </section>
  )
}

export default ShowTestimonial