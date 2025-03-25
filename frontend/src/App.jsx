import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Frontend/Home';
import About from './Components/Frontend/About';
import './assets/css/style.scss';
import Services from './Components/Frontend/Services';
import Projects from './Components/Frontend/Projects';
import Blogs from './Components/Frontend/Blogs';
import ContactUs from './Components/Frontend/ContactUs';
import Login from './Components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/backend/Dashboard';
import RequireAuth from './Components/Common/RequireAuth';

function App() {

  return (
    <>
    <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/admin/login' element={<Login/>} />

            <Route path='/admin/dashboard' element={
              <RequireAuth>
                 <Dashboard/>
              </RequireAuth>
            } />

         </Routes>
    </BrowserRouter>
    <ToastContainer
      position='top-center'
    />
    </>
  )
}

export default App
