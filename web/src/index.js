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
<<<<<<< HEAD
import ProductPage from './pages/Adm/Produtos';
=======
import Listar from './pages/Adm/listar';
import EditPage from './pages/Adm/administrador';
>>>>>>> 768bdc98ae9a1fd0ac76f2905750a10c020ebbe0


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======
        <Route path='/admin' element={<LoginPage/>} />
        <Route path='/admin/listar' element={<Listar />} /> 
        <Route path='/admin/controle/home' element={<HomeController/>} />
        <Route path='/admin/controle/editar' element={<EditPage/>} />
        <Route path='/admin/home' element={<HomeAdm/>} />
>>>>>>> 768bdc98ae9a1fd0ac76f2905750a10c020ebbe0
        <Route path='/' element={<HomePage />} />
        <Route path='/produto/:id' element={<PdxPage />} />
        <Route path='/admin' element={<LoginPage/>} />
        <Route path='/admin/home' element={<HomeAdm/>} />
        <Route path='/admin/controle/home' element={<HomeController/>} />
        <Route path='/admin/controle/produto' element={<ProductPage />} /> 
      </Routes>
    </BrowserRouter>
  </>
);

