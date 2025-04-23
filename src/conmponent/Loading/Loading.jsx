import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Loading() {
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
  )
}
