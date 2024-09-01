// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Sidebar from './Components/SideBar/SideBar';
import Products from './Page/Products/Products';
import { SidebarProvider, useSidebar } from './Contexts/SidebarContext';

function Layout() {
  const { collapsed } = useSidebar();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className={`flex-1 ml-${collapsed ? '20' : '64'} md:ml-${collapsed ? '12' : '64'} p-4 md:p-6 overflow-auto transition-all duration-300`}>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
