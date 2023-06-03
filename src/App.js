import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from './pages/HomePage';
import {ProductDetails} from './pages/ProductDetailsPage'
import {CheckOutPage} from './pages/CheckOutPage';
import {ErrorPage} from './pages/ErrorPage'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className="App">
    <CartProvider>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<CheckOutPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
