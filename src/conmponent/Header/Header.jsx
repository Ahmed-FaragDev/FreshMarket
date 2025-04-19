import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../images/freshcart-logo.svg";
import { useContext } from "react";
import { UserContext } from "../../Context/context";

export default function Header() {
  let { userToken, setUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex p-4 shadow-lg   bg-slate-100  ">
        <Link className="ms-2 w-30" to="/">
          <img src={logo} alt="logo" />
        </Link>

        {userToken !== null ? (
          <>
            <div className="md:block hidden m-auto">
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
            <div className="block md:hidden m-auto relative">
              <details className="group">
                <summary className="cursor-pointer list-none   text-black rounded-md hover:bg-gray-200 flex justify-between items-center ">
                  <span className="ml-2 transform group-open:rotate-180 transition duration-200">
                    <svg
                      className="w-4 h-4"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                  </span>
                </summary>
                <ul className="absolute mt-2 bg-white border rounded-md shadow-md w-40 z-10">
                  <li className="border-b hover:bg-gray-100">
                    <Link to="/" className="block px-4 py-2 text-gray-800">
                      Home
                    </Link>
                  </li>
                  <li className="border-b hover:bg-gray-100">
                    <Link
                      to="/Products"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="border-b hover:bg-gray-100">
                    <Link to="/Cart" className="block px-4 py-2 text-gray-800">
                      Cart
                    </Link>
                  </li>
                  <li className="border-b hover:bg-gray-100">
                    <Link
                      to="/Categories"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Categories
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/Brands"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </details>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="hidden md:block ml-auto">
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

        {userToken !== null ? (
          <>
            <div>
              <Link
                onClick={() => {
                  localStorage.removeItem("userToken");
                  setUserToken(null);
                  navigate("/Login");
                }}
                className="hover:text-gray-300 ms-3"
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex self-end ml-auto ">
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
          </>
        )}
      </nav>
    </>
  );
}
