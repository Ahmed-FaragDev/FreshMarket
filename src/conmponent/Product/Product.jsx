import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";

export default function ProductDetails() {
  const { id } = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    return data.data;
  };

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.images[i]} alt={`thumb ${i}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='md:flex items-center mt-20 min-h-screen gap-4 mx-3'>
      <div className='md:w-4/12 lg-w-4/12 m-auto w-1/2'>
        <img src={product.imageCover} alt={product.title} />

        <div className="slider-container mt-4">
        <Slider {...settings}>
        <div>
          <img src={ "/abstract01.jpg"} />
        </div>
        <div>
          <img src={ "/abstract02.jpg"} />
        </div>
        <div>
          <img src={ "/abstract03.jpg"} />
        </div>
        <div>
          <img src={ "/abstract04.jpg"} />
        </div>
      </Slider>
        </div>
      </div>

      <div className='flex-col md:w-5/12 flex gap-2'>
        <h1>{product.title}</h1>
        <p className='text-gray-400 text-sm'>{product.description}</p>
        <p>{product.category?.name}</p>
        <div className='flex justify-between'>
          <p>{product.price} $</p>
          <p><span>⭐</span>{product.ratingsAverage} ({product.ratingsQuantity})</p>
        </div>
        <button className='bg-main w-full rounded-l mt-2'>Add to cart</button>
      </div>
    </div>
  );
}
