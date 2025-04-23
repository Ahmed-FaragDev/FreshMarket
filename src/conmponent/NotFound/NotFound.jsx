import React from 'react'
import erro from "../../images/error.svg";
export default function NotFound() {
  return (
    <>
      
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      
            <img src={erro} alt="Not Found" />

      
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Back Home
        </a>
      </div>

     
      

    </>
  )
}
