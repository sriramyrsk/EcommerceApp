import React from "react";
import Product from "./Product";

function ProductsContainer({ products }) {
  return (
    <>
      <div
        className={
          "grid-rows-auto mb-2 mt-12 grid w-full grid-cols-1 justify-center gap-y-6 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] sm:gap-x-4 md:grid-cols-4"
        }
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default ProductsContainer;
