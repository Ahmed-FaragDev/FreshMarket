import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg"
export default function Header() {
  return (
    <>
      
      <nav>
        <div className="flex p-4 shadow-lg justify-between    items-center bg-slate-100  ">
          {/* logo */}
          <Link className="ms-2 w-30" to="/"><img src={logo} alt="logo" /></Link>
          {/* section */}
          <div className="md:block hidden">
            <ul>
              <li className="flex gap-3">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>

                <Link to="/Products" className="hover:text-gray-300">
                  Products
                </Link>

                <Link to="/Cart" className="hover:text-gray-300">
                  Cart
                </Link>
                <Link to="/Categories" className="hover:text-gray-300">
                  Categories
                </Link>

                <Link to="/Brands" className="hover:text-gray-300">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          {/* scoial media icons */}
          <div className="hidden md:block">
            <div className="flex space-x-4 justify-center  text-gray-600">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* cart icon */}
          <div className="">
            <ul className="flex items-center gap-5 me-2">
              <li>
                <Link to="/Login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Register" className="hover:text-gray-300">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
