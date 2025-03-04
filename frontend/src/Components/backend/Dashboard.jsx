import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

const Dashboard = () => {
  return (
    <>
    <Header/>
        <main>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        {/* Slidebard */}
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <h4>Sidebar</h4> 
                            </div>
                        </div>
                    </div>

                    <div className='col-md-9 home'>
                        {/* Slidebard */}
                        <div className='card shadow border-0'>
                            <div className='card-body d-flex justify-content-center align-items-center'>
                                <h4>Wecome to admin console</h4>
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

export default Dashboard