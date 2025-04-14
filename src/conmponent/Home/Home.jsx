import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CatogorySlider from "../CatogorySlider/CatogorySlider";
import { Circles } from 'react-loader-spinner'
import { div } from "framer-motion/client";


export default function Home() {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const MAX_LENGTH = 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/products"
        );
        setProducts(response.data.data); // Assuming API returns products in response.data.data
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return <>
      <div className="flex justify-center items-center min-h-screen">
      <Circles
     className="m-auto"
      
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
    </div>
    
    
    </>
  
  
 
   
 
  
  
    ;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="min-h-screen">
     
        <CatogorySlider />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 m-auto mt-5 mb-10  ">
          {products.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={product.id}
              className="flex flex-col bg-white p-5  relative group hover:shadow-2xl hover:border-2 border-green-400  transition-shadow "
            >
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-full  object-contain"
              />
              <div className="flex flex-col mt-3 ">
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-500">
                  {product.description.length > MAX_LENGTH
                    ? `${product.description.slice(0, MAX_LENGTH)}... `
                    : product.description}
                  {product.description.length > MAX_LENGTH && (
                    <Link
                      to={`/product/${product.id}`}
                      className="text-blue-600 underline ml-1"
                    >
                      Read more
                    </Link>
                  )}
                </p>

                <div className="flex flex-row justify-between absolute bottom-0 right-5 mt-5">
                  <p className="text-lg font-bold">{product.rate}</p>
                  <div className="flex flex-row ">
                    <p>{product.ratingsAverage}</p> <span>⭐</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between absolute bottom-0 left-5 mt-5">
                  <p className="text-lg font-bold">${product.price}</p>
                  <div className="flex flex-row "></div>
                </div>
              </div>

              <button className="bg-main rounded-full  w-1/2 p-2 m-auto invisible group-hover:visible hover:bg-main/80 transition-all duration-300 ease-in mt-5 mb-1  bottom-0 left-1/4">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
