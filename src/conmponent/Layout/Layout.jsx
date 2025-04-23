import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/context'

export default function Layout() {
  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
   
    if (localStorage.getItem('userToken') !== null)
    {
      setUserToken(localStorage.getItem('userToken'));
    }
  }, []);
  return (
    <>
      <Header />
     
      <Outlet/>
      
     
      <Footer/>
    
    
    </>
  )
}
