
import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from './component/Login/SignIn';
import Order from './component/Order/Order';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import Introduce from './component/Introduce/Introduce';
import Search from './component/Search/Search';
import Service from './component/Service/Service';
import Policy from './component/Policy/Policy';
import ScrollToTop from './component/ScrollToTop'
import Register from './component/Login/Register';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="font-sora overflow-x-hidden bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white dark:text-white text-black relative">
        <div className='fixed w-full z-50'>
          <NavBar />
        </div>
        <div className='pt-28'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/search" element={<Search />} />
            <Route path="/service" element={<Service />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </>

  );
}

export default App;