import React, { useState, useEffect} from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'
import { apiUrl, fileUrl } from '../Common/http';

const Blogs = () => {

    const [articles, setArticles] = useState([]);
    const fetchAllArticles = async () => {
        const res = await fetch(apiUrl+'get-articles',{
            'method' : 'GET',
        });
        const result = await res.json();
        setArticles(result.data)
    }

    useEffect(() => {
        fetchAllArticles()
    },[]);
  return (
    <>
      <Header />
        <main>
        <Hero preHeading='Quality, Integrity, Value.' Heading='Blogs & News' text='We excel at transformation visions into reality <br />through outstanding craftsmanship and precise.'/>

        <section className='section-6 bg-light py-5'>
            <div className='container'>
                <div className='section-header text-center py-5'>
                    <span>Blog & news</span>
                    <h2>Articles & Blog Posts</h2>
                    <p>We offer a diverce array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>
                <div className='row pt-3'>
                    {
                        articles && articles.map(article => {
                            return (
                                <div className='col-md-4'>
                                    <div className='card shadow border-0'>
                                        <div className='card-img-top'>
                                            <img src={`${fileUrl}uploads/articles/small/${article.image}`} alt="" className='w-100'/>
                                        </div>
                                        <div className='card-body p-4'>
                                            <div className='mb-3'>
                                                <a href="" className='title'>{article.title}</a>
                                            </div>
                                            <a href="" className='btn btn-primary small'>Read More</a>
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
      <Footer />
    </>
  )
}

export default Blogs