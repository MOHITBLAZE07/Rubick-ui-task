import NavBar from './components/NavBar/NavBar.js'
import NavBar2 from './components/NavBar/NavBar2.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';
import Terms from './components/Terms/Terms.js';

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './style.css';
import Product from './components/Product/Product.js';
import { useEffect, useState } from 'react';
import Features from './components/Features/Features.js';
import Clients from './components/Clients/Clients.js';

const title = {
  '/about':"About Us",
  '/features':"Features",
  '/product':"Product",
  '/clients':"Clients",
  '/terms':'Terms Of use'
}

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();
  useEffect(()=>{
    setCurrentPath(location.pathname);
  },[location])
  return (
    <>
    
        {currentPath==='/'?<NavBar/>:<NavBar2 title={title[currentPath]}/>}
          <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/product' element={<Product/>} />
            <Route path = '/features' element={<Features/>} />
            <Route path = '/about' element={<About/>} />
            <Route path = '/clients' element={<Clients/>} />
            <Route path = '/terms' element={<Terms/>} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
