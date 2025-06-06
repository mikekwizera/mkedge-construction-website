import React, { useState, useEffect } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Hero from '../Common/Hero'
import { Link, useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../Common/http';

const BlogDetail = () => {
      const params = useParams()
    const [article, setArticle] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);

    const fetchLatestArticle = async () => {
        const res = await fetch(`${apiUrl}get-latest-articles`,{
            'method' : 'GET',
        });
        const result = await res.json();
        setLatestArticles(result.data)
    }
    
    const fetchArticle = async () => {
        const res = await fetch(`${apiUrl}get-article/${params.id}`,{
            'method' : 'GET',
        });
        const result = await res.json();
        setArticle(result.data)
    }

    useEffect(() => {
        fetchArticle();
        fetchLatestArticle();
    },[params.id]);
  return (
    <>
    <Header/>
    <main>
        <Hero preHeading='Quality, Integrity, Value.' Heading={`Blog & New`} text=''/>

         <section className='section-11'> 
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-8'>
                <h2>{article.title}</h2>
                <div className='pb-3'><strong>{article.author}</strong> on {article.created_at}</div>
                <div className='pe-md pb-3'>
                    <img className='w-100' src={`${fileUrl}uploads/articles/large/${article.image}`} alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html:article.content}}>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow border-0 sidebar'>
                  <div className='card-body px-5 py-4'>
                    <h3 className='mt-2 mb-3'>Latest Blogs</h3>
                    {
                      latestArticles && latestArticles.map(article => {
                        return(
                          <div className='d-flex border-bottom mb-3 pb-2'>
                            <div className='pe-3 pb-2'>
                              <Link to={`/article/${article.id}`}> <img width={100} src={`${fileUrl}uploads/articles/small/${article.image}`} alt="" /></Link>
                            </div>
                            <Link to={`/article/${article.id}`} className='title'>{article.title}</Link>
                            <hr />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default BlogDetail