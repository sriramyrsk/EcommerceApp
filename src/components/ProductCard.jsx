import React from "react";
import { Link } from "react-router";
const ProductCard = ({ product }) => {
  let discountVisibility = product.discount == 0 ? "hidden" : "block";
  let newPrice = product.price - (product.discount / 100) * product.price;
  return (
    <>
      <div className="flex items-center justify-start gap-x-4">
        <div className="aspect-[3/2] w-2/5 lg:w-1/5">
          <img src={product.image} alt="" />
        </div>
        <div className="flex flex-col p-3">
          <p className="font-light text-gray-500">{product.category}</p>
          <Link
            to="/product?id=1"
            className="font-extrabold hover:text-red-500"
          >
            {product.name}
          </Link>
          <div className="flex items-baseline gap-x-4">
            <h1 className="font-extrabold text-red-500">${newPrice} </h1>
            <p
              className={
                "text-xs font-light text-gray-500 line-through " +
                discountVisibility
              }
            >
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
