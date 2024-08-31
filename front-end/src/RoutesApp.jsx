// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Sidebar from './Components/SideBar/SideBar';

function RoutesApp() {
  return (
    <BrowserRouter>
      <div className='flex'>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutesApp;
