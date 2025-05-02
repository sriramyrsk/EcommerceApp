import React from "react";
import { FaArrowRight } from "react-icons/fa";
function ProductCollectionItem({ productName, productImg }) {
  return (
    <div className="group relative aspect-[3/2] w-full overflow-hidden bg-slate-100">
      <img
        src={productImg}
        alt=""
        className="h-full w-full object-contain transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 h-full w-[100%] origin-top-left skew-x-[-45deg] bg-red-600 bg-opacity-90"></div>
      <div className="absolute inset-10 z-20 w-[40%]">
        <h1 className="z-20 mb-2 text-xl font-bold text-white">
          {productName}
        </h1>
        <div className="flex gap-x-2">
          <p className="text-xs text-white">SHOP NOW</p>
          <FaArrowRight className="rounded-full border-2 bg-white text-red-600" />
        </div>
      </div>
    </div>
  );
}

export default ProductCollectionItem;
