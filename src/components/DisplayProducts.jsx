import React from "react";
import ProductsNav from "./ProductsNav";
import ProductsContainer from "./ProductsContainer";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function DisplayProducts({ productHeading, productCategories, products }) {
  let productCatList = productCategories.slice(1, 5);
  let productList = products.slice(0, 4);

  return (
    <>
      <div className="my-16 flex flex-col items-center">
        <div className="flex w-[90%] max-w-5xl flex-col items-center lg:w-full">
          <div className="flex w-full flex-col items-center justify-center gap-y-6 md:flex-row md:justify-between">
            <h1 className="text-2xl font-bold">{productHeading}</h1>
            <div className="flex">
              <ProductsNav productList={productCatList} isHotDrop={false} />
            </div>
          </div>

          <ProductsContainer products={productList} />

          <div className="mx-2 my-4 flex justify-end gap-x-2 sm:my-2 sm:w-full">
            <button>
              <FaChevronCircleLeft />
            </button>

            <button>
              <FaChevronCircleRight className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayProducts;
