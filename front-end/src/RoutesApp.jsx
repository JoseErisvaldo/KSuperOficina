// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Sidebar from './Components/SideBar/SideBar';
import Products from './Page/Products/Products';

function RoutesApp() {
  return (
    <BrowserRouter>
      <div className='flex'>
      <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutesApp;
