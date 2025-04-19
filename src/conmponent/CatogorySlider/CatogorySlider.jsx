import React, { use } from "react";
import slide1 from "../../images/slider-image-3.jpeg";
import slide2 from "../../images/slider-image-1.jpeg";
import slide3 from "../../images/slider-image-2.jpeg";
import Slider from "react-slick";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { LineWave } from "react-loader-spinner";
export default function CatogorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  let { data, isLoading, isError } = useQuery({
    queryKey: ["slid"],
    queryFn: () => {
      return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    },
  });

  return (
    <>
      <div className="flex flex-row w-10/12 m-auto mt-5">
        {/* السلايدر */}
        <div className="w-9/12">
          <Slider {...settings}>
            <div>
              <img src={slide1} alt="" className="w-full h-96 object-cover" />
            </div>
            <div>
              <img src={slide2} alt="" className="w-full h-96 object-cover" />
            </div>
            <div>
              <img src={slide3} alt="" className="w-full h-96 object-cover" />
            </div>
          </Slider>
        </div>

        {/* العمود الجانبي */}
        <div className="w-3/12 h-96 flex flex-col">
          <img src={slide1} className="w-full h-1/2 object-cover" alt="" />
          <img src={slide2} className="w-full h-1/2 object-cover" alt="" />
        </div>
      </div>

      {data?.data?.data ? (
        <Slider {...settings1} className="w-10/12 m-auto mt-10 mb-10  ">
          {data?.data?.data.map((item, index) => (
            <img
              key={index}
              src={item?.image}
              alt=""
              className="w-full h-40 object-cover"
            />
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center items-center">
          {" "}
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      )}
    </>
  );
}
