import React from "react";
import { Link } from "react-router";
function ProductItems({ productList, displayMenu, isHotDrop }) {
  console.log("in products nav  : " + displayMenu == true);
  let toDisplayStyle = displayMenu ? " flex " : " hidden ";
  let mobileHotDropStyle =
    " fixed top-0 left-0 z-40  flex-col items-center justify-evenly w-[250px] bg-black h-screen " +
    toDisplayStyle;
  let mobileNormalStyle = " flex gap-x-4 gap-y-2 justify-center";

  let mobileStyle = isHotDrop ? mobileHotDropStyle : mobileNormalStyle;
  return (
    <>
      <ul
        className={
          mobileStyle +
          " flex-wrap lg:relative lg:flex lg:h-fit lg:w-full lg:max-w-5xl lg:flex-row lg:gap-x-6 lg:bg-white"
        }
      >
        {productList.map((product) => (
          <Link
            to={product.link}
            className="text-2xl text-gray-500 hover:text-red-500 hover:underline"
          >
            <li>{product.name}</li>{" "}
          </Link>
        ))}
      </ul>
    </>
  );
}

export default ProductItems;
