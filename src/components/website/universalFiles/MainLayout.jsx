import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '/src/components/website/universalFiles/NavBar.jsx';
import Footer from '/src/components/website/universalFiles/Footer.jsx';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/ReactToastify.css'
import ScrollToHash from './ScrollToHash';

const MainLayout = () => {
  const location = useLocation(); 
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    setRouteChanging(true);
    const timer = setTimeout(() => {
      setRouteChanging(false);
    }, 500); 
    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <>
      <NavBar />

         <ScrollToHash />
      <div className={`page ${routeChanging ? 'fade-in' : ''} `}>
        <Outlet/>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
