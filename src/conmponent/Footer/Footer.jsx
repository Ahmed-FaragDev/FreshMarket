import React from "react";
import master from "../../images/screens/mastercard.svg";
import apple from "../../images/screens/app-store-svgrepo-com.svg";
import google from "../../images/screens/google-play-svgrepo-com.svg";
import paypal from "../../images/screens/paypal-blue-logo-19528.svg";
import american from "../../images/screens/american-express-blue-logo-19532.svg";
import amazon from "../../images/screens/amazon-pay-logo-19553.svg";

export default function Footer() {

  return (
    <>
      

      
      <div className=" bg-gray-300 gap-2 flex flex-col ">

        <h2 className="ms-5 md:m-auto mt-5 md:mt-4 text-xl">Get the FreshCart app</h2>
        <p className="ms-5 md:m-auto text-gray-400 text-sm">
          We will send you alink, open it on your phone to download the app
        </p>

        <div className="flex gap-2 justify-between md:justify-center ms-10">
          <input
            type="text"
            className="border  md:w-1/6 rounded-l bg-white border-gray-200 w-2/3"
            placeholder=" Email .."
          />
          <button className="w-38 rounded-xl me-2 p-1 text-white bg-main">
            Share App Link
          </button>
        </div>
        <hr className="my-0.5 border-t border-gray-400" />

        <div className="flex flex-col md:flex-row md:justify-center md:gap-5 items-center sm:ms-10">
          <div className="md:flex sm:m-0 m-auto  ">
            <h3 className="text-center sm:self-center sm:text-start">
              Payment Parent
            </h3>
            <ul>
              <li className="flex md:gap-2 gap-0.5">
                <img className="w-14 " src={master}></img>
                <img className="w-14" src={paypal}></img>
                <img className="w-14" src={american}></img>
                <img className="w-14" src={amazon}></img>
              </li>
            </ul>
          </div>
          <div className="md-flex-row flex flex-col justify-center items-center ">
            <div className="md:flex gap-2 items-center  me-2">
              <h3>Get deliveries with FreshCart</h3>
              <ul>
                <li className="flex  justify-center gap-2">
                  <a href="">
                    <img className="w-8 " src={apple}></img>
                  </a>
                  <a href="">
                    <img className="w-8" src={google}></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-0.5 mb-10 border-t border-gray-400" />
        </div>
        
    </>
  );
}
