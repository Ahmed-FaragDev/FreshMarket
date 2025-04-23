import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Circles } from 'react-loader-spinner'
import { UserContext } from "../../Context/context";


export default function Login() {
  let {setUserToken} = useContext(UserContext)
  let navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const emailRef = useRef();
  


  async function LoginSumbit(values) {
    setIsLoading(true);
    let{data}=await axios.post( "https://ecommerce.routemisr.com/api/v1/auth/signin",
      values
    ).catch(
      (err) => {
        setIsLoading(false);
        setError(err.response.data.message);
       
      }
    )
    if(data.message === 'success'){
      setIsLoading(false);
      localStorage.setItem("userToken", data.token);
        setUserToken(data.token);
      navigate("/")
    };
  };
 let validationSchema = Yup.object({
   
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .matches(
        /^[a-zA-Z][a-zA-Z0-9]*$/,
        "كلمة المرور يجب أن تبدأ بحرف كبير وتحتوي على 6 إلى 11 حرفًا"
      )
      .required("كلمة المرور مطلوبة"),
   
  })
  let formik = useFormik({
    initialValues: {
     
      email: "",
      password: "",
    
    },validationSchema:validationSchema,
 

    onSubmit:LoginSumbit,
  });

  const handleKeyPress = (e, nextInput) => {
    if (e.key === "Enter") {
      nextInput.current.focus();
    }
  };

  return (
    <>
      <div className="min-h-screen">
      <div className="w-75 mx-auto py-4">
        {error !== null ? <div className="text-red-500 text-center">{error}</div> : ""}
      </div>
     <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 md:w-5/12 w-9/12 m-auto py-20 mt-30"
    >
      <h1 className="text-2xl">Login Now</h1>
      <div className="flex flex-col gap-3 text-l">
       

        <label htmlFor="email">Email:</label>
        <input
          name="email"
          id="email"
          ref={emailRef}
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onKeyDown={(e) => handleKeyPress(e, passwordRef)}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          id="password"
          
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

       
        
          {isLoading ? <button className="bg-gray-100 cursor-not-allowed rounded-full w-2/5 p-2 mt-5 flex justify-center items-center text-white">
          
          
          <Circles
               className="m-auto"
                
                height="20"
                width="30"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
          
          </button> : <button
          type="submit"
          className={`rounded-full w-2/5 p-2 mt-5 text-white
    ${
      formik.dirty && formik.isValid
        ? "bg-main cursor-pointer"
        : "bg-gray-400 cursor-not-allowed"
    }`}
          disabled={!(formik.dirty && formik.isValid)}
        >
          Login
        </button> }
        
      </div>
    </form>
      </div>
     
    </>
   
  );
}
