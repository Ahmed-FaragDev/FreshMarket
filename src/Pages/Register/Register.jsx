import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Circles } from 'react-loader-spinner'


export default function Register() {
  let navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const phoneRef = useRef();

  async function registerSumbit(values) {
    setIsLoading(true);
    let{data}=await axios.post( "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    ).catch(
      (err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        
      }
    )
    if(data.message === 'success'){
      setIsLoading(false);
     
      navigate("/login")
    };
  };
 let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "الاسم يجب أن يكون على الأقل 3 أحرف")
      .max(15, "الاسم يجب ألا يزيد عن 15 حرف")
      .required("الاسم مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .matches(
        /^[a-zA-Z][a-zA-Z0-9]*$/,
        "كلمة المرور يجب أن تبدأ بحرف كبير وتحتوي على 6 إلى 11 حرفًا"
      )
      .required("كلمة المرور مطلوبة"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "كلمتا المرور غير متطابقتين")
      .required("تأكيد كلمة المرور مطلوب"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "رقم الهاتف غير صالح")
      .required("رقم الهاتف مطلوب"),
  })
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },validationSchema:validationSchema,
 

    onSubmit:registerSumbit,
  });

  const handleKeyPress = (e, nextInput) => {
    if (e.key === "Enter") {
      nextInput.current.focus();
    }
  };

  return (
    <>
      <div className="w-75 mx-auto py-4">
        {error !== null ? <div className="text-red-500 text-center">{error}</div> : ""}
      </div>
     <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-5 md:w-5/12 w-9/12 m-auto py-20"
    >
      <h1 className="text-2xl">Register Now</h1>
      <div className="flex flex-col gap-3 text-l">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          ref={nameRef}
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onKeyDown={(e) => handleKeyPress(e, emailRef)}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}

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
          ref={passwordRef}
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onKeyDown={(e) => handleKeyPress(e, repasswordRef)}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

        <label htmlFor="rePassword">Repassword:</label>
        <input
          name="rePassword"
          id="rePassword"
          ref={repasswordRef}
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rePassword}
          onKeyDown={(e) => handleKeyPress(e, phoneRef)}
        />
        {formik.touched.rePassword && formik.errors.rePassword && (
          <div className="text-red-500 text-sm">{formik.errors.rePassword}</div>
        )}

        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          id="phone"
          ref={phoneRef}
          className="border border-gray-200 rounded-l focus:outline focus:outline-sky-500"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}
          {isLoading ? <button className="bg-gray-400 cursor-not-allowed rounded-full w-2/5 p-2 mt-5 text-white">
          
          
          <Circles
               className="m-auto"
                
                height="20"
                width="20"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
          
          </button> :<button
          type="submit"
          className={`rounded-full w-2/5 p-2 mt-5 text-white
    ${
      formik.dirty && formik.isValid
        ? "bg-main cursor-pointer"
        : "bg-gray-400 cursor-not-allowed"
    }`}
          disabled={!(formik.dirty && formik.isValid)}
        >
          Register
        </button> }
        
      </div>
    </form>
    </>
   
  );
}
