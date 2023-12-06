import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import ProductPage from './components/ProductPage';
import Footer from './components/footer';
import 'aos/dist/aos.css'
import PdxPage from './pages/Produtos/pdx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pdx' element={<PdxPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

