import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import Client from "../../Client";

export default function ProductDetails() {
  const { id } = useParams();
  const { addTocart } = useContext(CartContext);

  async function addProductToCart(id) {
    const response = await addTocart(id);
    if (response.data?.status === "success") {
      toast.success("product successfully added");
    } else {
      toast.error("Error Adding Product");
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => Client.products.getOne(id),
  });

  if (isLoading) return <Loading />;
  if (isError) {
    const apiError = new APIError(error?.response?.data);
    return (
      <p className="text-red-500 text-center">
        {error?.message || "Something went wrong"}
      </p>
    );
  }
  const product = data?.data ?? [];
  return (
    <div className="md:flex items-center mt-20 min-h-screen gap-4 mx-3">
      <div className="md:w-3/12 lg-w-4/12 m-auto w-1/2">
        <img className="w-8/12" src={product.imageCover} alt={product.title} />
      </div>
      <div className="flex-col md:w-5/12 m-auto flex gap-2">
        <h1>{product.title}</h1>
        <p className="text-gray-400 text-sm">{product.description}</p>
        <p>{product.category?.name}</p>
        <div className="flex justify-between">
          <p>{product.price} $</p>
          <p>
            <span>⭐</span>
            {product.ratingsAverage} ({product.ratingsQuantity})
          </p>
        </div>
        <button
          onClick={() => addProductToCart(product.id)}
          className="cursor-pointer bg-main p-2 w-full rounded-l mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
