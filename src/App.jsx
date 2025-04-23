import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Pages/Home/Home";
import NotFound from "./conmponent/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import Categories from "./Pages/Categories/Categories";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Brands from "./Pages/Brands/Brands.jsx";
import Product from "./conmponent/Product/Product";
import Layout from "./conmponent/Layout/Layout.jsx";
import UserContextProvider from "./Context/auth/context.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartContextProvider from "./Context/cartContext/CartContext.jsx";
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
