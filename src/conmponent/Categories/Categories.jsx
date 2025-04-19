import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Circles } from 'react-loader-spinner'
import Slider from "react-slick";


export default function Categories() {

  const fetchCategories = async () => {
    const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    return response?.data?.data
  };
  const { data: Categories, isLoading, isError } = useQuery({
    queryKey: ['Categories'],
    queryFn: fetchCategories,
    
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
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <>
     <div className="slider-container w-full mx-2 my-20">
          <Slider {...settings}>
            {Categories?.map((categorie) => 
              <div key={categorie._id}>
                <img src={categorie.image} alt={categorie.name} className="w-full h-40 object-contain mb-4" />
                
              </div>
            )}
            
          </Slider>
        </div>
    
    <div className="min-h-screen p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Categories?.map((categorie) => (
      <div
        key={categorie._id}
        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition"
      >
        <img
          src={categorie.image}
          alt={categorie.name}
          className="w-full h-40 object-contain mb-4"
        />
        <p className="text-lg font-medium text-center">{categorie.name}</p>
      </div>
    ))}
  </div>
</div>

    
    
    
    </>
  )
}
