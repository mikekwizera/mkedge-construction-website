import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Frontend/Home';
import About from './Components/Frontend/About';
import './assets/css/style.scss';
import Services from './Components/Common/Services';

function App() {

  return (
    <>
    <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
