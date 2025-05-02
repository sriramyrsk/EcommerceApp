import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import OfferRibbion from "./OfferRibbion";
import { Link } from "react-router";

const Product = ({ product }) => {
  let dicountStyle = product.discount == 0 ? "hidden" : "block";

  let priceDiscounted = (product.discount / 100) * product.price;
  let newPrice = product.price - priceDiscounted;

  let ratingArr = [];

  for (let i = 0; i < product.rating; i++) {
    ratingArr.push(i);
  }

  return (
    <>
      <Link to="" className="group">
        <div className="h-content relative flex w-full flex-col gap-y-4 overflow-hidden border-2 px-3 group-hover:border-2 group-hover:border-red-600 lg:h-[31rem]">
          <div className="flex flex-row-reverse gap-x-2">
            {product.isNew && (
              <OfferRibbion
                text={"NEW"}
                color={"text-white"}
                bgColor={"bg-red-600"}
              />
            )}

            {product.discount > 0 && (
              <OfferRibbion
                text={product.discount + "%"}
                color={"text-red-600"}
                bgColor={"bg-white"}
              />
            )}

            {!product.discount && !product.isNew && (
              <div className="invisible h-10">Placeholder</div>
            )}
          </div>

          <div className="aspect-[3/2] w-full">
            <img src={product.image} alt="" className="group-hover:scale-105" />
          </div>

          <div className="flex flex-col items-center gap-y-2 group-hover:scale-105">
            <p className="text-gray-400">Category</p>
            <h1 className="text-center text-lg font-bold">{product.name}</h1>
            <div className="flex items-center gap-x-4">
              <h1 className="text-xl font-bold text-red-500">${newPrice}</h1>
              <p className={"text-gray-400 line-through " + dicountStyle}>
                ${product.price}
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center border-y-2 py-4 text-yellow-500 lg:py-2">
            {ratingArr.map((i) => (
              <FaStar key="i" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-x-10 py-6 text-xl lg:gap-x-6 lg:py-2 lg:text-base">
            <button title="Add to Favorites">
              {" "}
              <FaHeart className="text-pink-500" />{" "}
            </button>
            <button title="Add to Cart">
              {" "}
              <FaShoppingCart className="text-red-600" />{" "}
            </button>
            <button title="More Info" href="#">
              {" "}
              <FaInfoCircle className="text-blue-500" />{" "}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
