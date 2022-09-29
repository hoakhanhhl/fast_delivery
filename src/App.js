
import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from './component/SignIn/SignIn';
import Order from './component/Order/Order';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import Introduce from './component/Introduce/Introduce';
import Search from './component/Search/Search';
import Service from './component/Service/Service';
import Policy from './component/Policy/Policy';
import Footer from './component/Footer/Footer';
import ScrollToTop from './component/ScrollToTop'
function App() {
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white dark:text-white text-black">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;