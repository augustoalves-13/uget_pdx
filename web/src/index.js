import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import ProductPage from './components/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/pdx' element={<ProductPage/>} />
    </Routes>
  </BrowserRouter>
);

