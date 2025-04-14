import React from 'react'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './conmponent/Home/Home'
import NotFound from './conmponent/NotFound/NotFound'
import Cart from './conmponent/Cart/Cart'
import Categories from './conmponent/Categories/Categories'
import Login from './conmponent/Login/Login'
import Register from './conmponent/Register/Register'
import Brands from './conmponent/Brands/Brands'
import Products from './conmponent/Products/Products'
import Layout from './conmponent/Layout/Layout.jsx';


let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/Categories', element: <Categories /> },
      { path: '/cart', element: <Cart /> },
      { path: '/Login', element: <Login /> },
      { path: '/Register', element: <Register /> },
      { path: '/Products', element: <Products /> },
      { path: '/Brands', element: <Brands /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);
function App() {

  return (
    <>
      
      
        <RouterProvider router={routers}></RouterProvider>
     
    </>
  )
}

export default App
