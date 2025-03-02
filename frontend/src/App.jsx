import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Frontend/Home';
import About from './Components/Frontend/About';
import './assets/css/style.scss';

function App() {

  return (
    <>
    <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
