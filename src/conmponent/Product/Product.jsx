import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { Circles } from 'react-loader-spinner'
import { CartContext } from '../../CartContext/CartContext';
import toast from 'react-hot-toast';


export default function ProductDetails() {
  let { addTocart } = useContext(CartContext)
  async function addProductToCart(id) {
    let response = await addTocart(id)
    if (response.data.status==='success') {
      toast.success('product successfully added')
    } else {
      toast.error('Error Adding Product')
    }
    
  }
  const { id } = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    return data.data;
  };

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
  });

  if (isLoading) return <div className="flex justify-center items-center min-h-screen">
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
      
  if (isError) return <p>Something went wrong</p>;



  return (
    <div className='md:flex items-center mt-20 min-h-screen gap-4 mx-3'>
      <div className='md:w-3/12 lg-w-4/12 m-auto w-1/2'>
        <img className='w-8/12' src={product.imageCover} alt={product.title} />

       
      </div>

      <div className='flex-col md:w-5/12 m-auto flex gap-2'>
        <h1>{product.title}</h1>
        <p className='text-gray-400 text-sm'>{product.description}</p>
        <p>{product.category?.name}</p>
        <div className='flex justify-between'>
          <p>{product.price} $</p>
          <p><span>⭐</span>{product.ratingsAverage} ({product.ratingsQuantity})</p>
        </div>
        <button onClick={()=>addProductToCart(product.id)} className='cursor-pointer bg-main p-2 w-full rounded-l mt-2'>Add to cart</button>
      </div>
    </div>
  );
}
