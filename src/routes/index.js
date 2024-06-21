import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../components/Auth/Login';
import UserRegister from '../components/Users/UserRegister';
import Profile from '../components/Users/Profile'
import ProductList from '../components/Products/ProductList';
import ProductForm from '../components/Products/ProductForm';
import OrderList from '../components/Orders/OrderList';
import OrderForm from '../components/Orders/OrderForm';
import HomePage from "../components/Home/HomePage";

const Routing = () => (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/add-users" element={<UserRegister/>}/>
      <Route path="/profile" element={<Profile/>} />

      <Route path="/products" element={<ProductList/>} />
      <Route path="/add-product" element={<ProductForm/>} />

      <Route path="/orders" element={<OrderList/>} />
      <Route path="/add-orders" element={<OrderForm/>} />
    </Routes>
);

export default Routing;
