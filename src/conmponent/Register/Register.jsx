import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();  // Initialize navigate

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const phoneRef = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'الاسم يجب أن يكون على الأقل 3 أحرف').max(15, 'الاسم يجب ألا يزيد عن 15 حرف').required('الاسم مطلوب'),
      email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
      password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'كلمة المرور يجب أن تبدأ بحرف كبير وتحتوي على 6 إلى 11 حرفًا').required('كلمة المرور مطلوبة'),
      rePassword: Yup.string().oneOf([Yup.ref('password')], 'كلمتا المرور غير متطابقتين').required('تأكيد كلمة المرور مطلوب'),
      phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'رقم الهاتف غير صالح').required('رقم الهاتف مطلوب'),
    }),
    
    onSubmit: async (values) => {
      try {
        const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
        alert('تم التسجيل بنجاح!');
        navigate("/login"); // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
       // لإعادة تهيئة الفورم
      } catch (error) {
        console.error("Error:", error.response?.data?.message || error.message);
        alert('حدث خطأ أثناء التسجيل: ' + (error.response?.data?.message || error.message)); // عرض رسالة الخطأ
      }
    },
  });

  // دالة لنقل التركيز إلى الحقل التالي
  const handleKeyPress = (e, nextInput) => {
    if (e.key === "Enter") {
      nextInput.current.focus(); // نقل التركيز للحقل التالي
    }
  };

  return (
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
          onKeyDown={(e) => handleKeyPress(e, emailRef)} // عند الضغط على Enter ينقل التركيز لحقل البريد الإلكتروني
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
          onKeyDown={(e) => handleKeyPress(e, passwordRef)} // عند الضغط على Enter ينقل التركيز لحقل كلمة المرور
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
          onKeyDown={(e) => handleKeyPress(e, repasswordRef)} // عند الضغط على Enter ينقل التركيز لحقل تأكيد كلمة المرور
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
          onKeyDown={(e) => handleKeyPress(e, phoneRef)} // عند الضغط على Enter ينقل التركيز لحقل رقم الهاتف
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

        <button
          type="submit"
          className="cursor-pointer bg-main rounded-full w-2/5 p-2 mt-5 text-white"
        >
          Register
        </button>
      </div>
    </form>
  );
}
