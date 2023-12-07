import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import 'aos/dist/aos.css'
import PdxPage from './pages/Produtos/pdx';
import LoginPage from './pages/Adm/login';
import HomeAdm from './pages/Adm/home';
import HomeController from './pages/Adm/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<LoginPage/>} />
        <Route path='/admin/controle/home' element={<HomeController/>} />
        <Route path='/admin/home' element={<HomeAdm/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/pdx' element={<PdxPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

