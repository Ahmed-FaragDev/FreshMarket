import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Circles } from "react-loader-spinner";
import  { useContext } from 'react';
import { CartContext } from '../../Context/cartContext/CartContext';
import toast from 'react-hot-toast';
import Client from "../../Client";
import { useQuery } from "@tanstack/react-query";


export default function Products() {
  let { addTocart } = useContext(CartContext)
  async function addProductToCart(id) {
    let response = await addTocart(id)
    if (response.data.status==='success') {
      toast.success('product successfully added')
    } else {
      toast.error('Error Adding Product')
    }
    
  }
  
  
 
  const MAX_LENGTH = 100;


  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => Client.products.getAll(),
  });

  if (isLoading) {
    return (
      <>
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
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  const products = data?.data ?? [];

  return (
    <>
      <div className="min-h-screen">
       
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 m-auto mt-5 mb-10  ">
          {products.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={product.id}
              className="flex flex-col bg-white p-5  relative group hover:shadow-2xl hover:border-2 border-green-400  transition-shadow "
            >
              <Link to={`/product/${product.id}`}>
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
                    ;{product.description.length > MAX_LENGTH && ""}
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
              </Link>

              <button onClick={()=>addProductToCart(product.id)} className="bg-main cursor-pointer rounded-full   md:w-1/2 p-2 m-auto invisible group-hover:visible hover:bg-main/80 transition-all duration-300 ease-in  md:mb-1 mb-3 bottom-0 left-1/4">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
