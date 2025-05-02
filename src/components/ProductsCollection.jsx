import React from "react";
import ProductCollectionItem from "./ProductCollectionItem";
import cameraPreview from "../assets/cameraPreview.webp";
import phonePreview from "../assets/phonePreview.png";
import laptopPreview from "../assets/laptop.webp";
import { Link } from "react-router";

function ProductsCollection() {
  return (
    <>
      <div className="mt-16 flex justify-center">
        <div className="auto-rows grid w-[90%] grid-cols-1 justify-center gap-x-4 gap-y-8 sm:w-full sm:max-w-5xl sm:grid-cols-2 sm:gap-y-4 md:grid-cols-[repeat(auto-fit,minmax(330px,330px))]">
          <Link to="#">
            <ProductCollectionItem
              productName={"Laptop Collections"}
              productImg={laptopPreview}
            />{" "}
          </Link>
          <Link to="">
            <ProductCollectionItem
              productName={"Mobile Collections"}
              productImg={phonePreview}
            />
          </Link>
          <Link to="">
            {" "}
            <ProductCollectionItem
              productName={"Camera Collections"}
              productImg={cameraPreview}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsCollection;
