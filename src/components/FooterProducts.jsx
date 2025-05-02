import React from "react";
import ProductCard from "./ProductCard";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function FooterProducts({ productList }) {
  let list1 = productList.slice(0, 3);
  return (
    <>
      {/* flex flex-col gap-y-4 */}
      <div className="flex w-full justify-center">
        <div className="flex w-[90%] max-w-5xl flex-row lg:w-full">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] lg:grid-cols-3 lg:gap-y-0">
            <div className="grid-row-4 grid gap-y-10 lg:gap-y-4">
              <div className="flex justify-between">
                <h1>Top Selling</h1>
                <div className="flex gap-x-3">
                  <FaChevronCircleLeft />
                  <FaChevronCircleRight />
                </div>
              </div>
              {list1.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="grid-row-4 grid gap-y-4">
              <div className="flex justify-between">
                <h1>Top Selling</h1>
                <div className="flex gap-x-3">
                  <FaChevronCircleLeft />
                  <FaChevronCircleRight />
                </div>
              </div>
              {list1.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="grid-row-4 grid gap-y-4">
              <div className="flex justify-between">
                <h1>Top Selling</h1>
                <div className="flex gap-x-3">
                  <FaChevronCircleLeft />
                  <FaChevronCircleRight />
                </div>
              </div>
              {list1.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterProducts;
