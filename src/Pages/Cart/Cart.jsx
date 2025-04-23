import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Circles } from "react-loader-spinner";

export default function Cart() {
  const [cartDetails, setcartDetails] = useState(null);
  let { GetLoggedUserCart } = useContext(CartContext);
  async function getcart() {
    let { data } = await GetLoggedUserCart();
    setcartDetails(data);
  }
  useEffect(() => {
    getcart();
  }, []);

  return (
    <>
      <div className="min-h-screen">
        {cartDetails ? (
          <div className="w-11/12 p-2 bg-gray-300 mb-5 mt-3 m-auto">
            <h1 className="text-xl">Shop Cart</h1>
            <p className="text-main">
              Cart item : {cartDetails?.numOfCartItems}
            </p>
            <p className="text-main">
              Total Cart item : {cartDetails.data.totalCartPrice} Egp
            </p>
            {cartDetails?.data?.products?.map((product) => (
              <div
                key={product.product.id}
                className="flex items-center justify-between"
              >
                <div className="flex  md:w-6/12 items-center ">
                  <div>
                    <img
                      className="w-20 mb-2 me-3"
                      src={product.product.imageCover}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>wwdwdwdwdwdwdwdwdwdwdwdw</p>
                    <p className="text-main">price:{product.price}</p>
                    <button className="cursor-pointer flex items-center">
                      <p>
                        <svg
                          className="w-4 h-4"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0,0,256,256"
                        >
                          <g
                            fill="#33ff00"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                          >
                            <g transform="scale(8.53333,8.53333)">
                              <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"></path>
                            </g>
                          </g>
                        </svg>
                      </p>
                      remove
                    </button>
                  </div>
                </div>
                <div>
                  <div className="md:w-6/12 flex items-center gap-1">
                    <button className="border border-green-400 cursor-pointer w-4 p-0.5">
                      +
                    </button>
                    <p>{product.count}</p>
                    <button className="border border-green-400 cursor-pointer w-4 p-0.5">
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}
