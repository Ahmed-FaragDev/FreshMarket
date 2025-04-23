import axios from "axios";
import { createContext, useContext } from "react";

export let CartContext = createContext();

let UserToken = localStorage.getItem('userToken')
let headers = {
    token:UserToken
}

function GetLoggedUserCart() {
    let UserToken = localStorage.getItem("userToken");
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: UserToken,
        },
      })
      .then((response) => response)
      .catch((error) => error);
  }
  
  function addTocart(id) {
    let UserToken = localStorage.getItem("userToken");
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: id,
        },
        {
          headers: {
            token: UserToken,
          },
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }
  
export default function CartContexProvider(props) {
    return <CartContext.Provider value={{addTocart ,GetLoggedUserCart}}>
{props.children}
    </CartContext.Provider>
}