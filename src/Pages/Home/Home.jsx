import React from "react";

import CatogorySlider from "../../conmponent/CatogorySlider/CatogorySlider";

import Products from "../../conmponent/Products/Products";
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <CatogorySlider />
        <Products />
      </div>
    </>
  );
}
