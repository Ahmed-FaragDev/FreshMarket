import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Slider from "react-slick";
import { Circles } from 'react-loader-spinner'
import axios from "axios";




export default function Brands() {
  
  
  const fetchBrands = async () => {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
    
    return response?.data?.data
    
    
  };


  const { data: Brands, isLoading, isError } = useQuery({
    queryKey: ['Brands'],
    queryFn: fetchBrands,
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 10,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <>
      <div className='min-h-screen'>
        
    

   
        <div className="slider-container w-full mx-2 my-20">
          <Slider {...settings}>
            {Brands?.map((brand) => 
              <div key={brand._id}>
                <img src={brand.image} alt={brand.name} />
                
              </div>
            )}
            
          </Slider>
        </div>
        <div className="min-h-screen p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Brands?.map((brand) => (
      <div
        key={brand._id}
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition"
      >
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-40 object-contain mb-4"
        />
        <p className="text-lg font-medium text-center">{brand.name}</p>
      </div>
    ))}
  </div>
</div>
        </div>
    
    
    </>
  )
}
