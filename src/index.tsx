import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/homePage/App';
import ProductPage from './pages/productPage/productPage';
import ProductList from './pages/productListPage/productsList';
import {products, Product} from './models/product';
import NavBar from './widgets/NavBar/NavBar';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './pages/cart/cartPage';
import CartPage from './pages/cart/cartPage';
import LoginPage from './pages/login/loginPage';
import Footer from './widgets/footer/footer';
import IncompletePage from './pages/incomple/incompletePage';
// import  } from 'express';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
 <BrowserRouter>
    <div className="content">
    <NavBar/>
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/" element={<App/>} />
      <Route path="/incomplete" element={<IncompletePage/>} />


      <Route path="/products" element={<ProductList/>} />
      <Route path="/products/:id" element={<ProductPage/>} />
      
      <Route path="/cart" element={<CartPage/>} />

    </Routes>
    </div>
   
    </BrowserRouter>


  </React.StrictMode>
);

