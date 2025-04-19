import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./conmponent/Home/Home";
import NotFound from "./conmponent/NotFound/NotFound";
import Cart from "./conmponent/Cart/Cart";
import Categories from "./conmponent/Categories/Categories";
import Login from "./conmponent/Login/Login";
import Register from "./conmponent/Register/Register";
import Brands from "./conmponent/Brands/Brands";
import Product from "./conmponent/Product/Product";
import Layout from "./conmponent/Layout/Layout.jsx";
import UserContextProvider from "./Context/context.jsx";
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartContextProvider from "./CartContext/CartContext.jsx";
import { Toaster } from 'react-hot-toast';
import Products from "./conmponent/Products/Products.jsx";
import ProductedRoute from "./conmponent/ProductedRoute/ProductedRoute.jsx";



const queryClient = new QueryClient();

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductedRoute><Home /></ProductedRoute>  },
      { path: "/home", element: <ProductedRoute><Home /></ProductedRoute> },
      { path: "/Categories", element:<ProductedRoute><Categories /></ProductedRoute> },
      { path: "/cart", element: <ProductedRoute><Cart /></ProductedRoute> },
      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "/product/:id", element: <ProductedRoute><Product/></ProductedRoute> },
      { path: "/products", element:<ProductedRoute><Products/></ProductedRoute>},

      { path: "/Brands", element: <ProductedRoute><Brands/></ProductedRoute> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  
  return (
    <>
      

      <CartContextProvider>
      <UserContextProvider>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={routers}></RouterProvider>
          </QueryClientProvider>
        </UserContextProvider>
        <Toaster/>
        </CartContextProvider>
    </>
  );
}

export default App;
