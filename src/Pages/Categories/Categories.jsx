import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Slider from "react-slick";
import Client from "../../Client";
import Loading from '../../conmponent/Loading/Loading';


export default function Categories() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['Categories'],
    queryFn: ()=> Client.categories.getAll(),
    
  });
if (isLoading) return <Loading/>
      
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
const Categories = data?.data ??[]

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
