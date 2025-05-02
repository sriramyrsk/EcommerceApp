import React from "react";
import NavBar from "../components/NavBar";
import ProductsNav from "../components/ProductsNav";
import { Outlet } from "react-router";
import { useState } from "react";
import FooterBar from "../components/FooterBar";
const MainLayout = () => {
  let productCatList = [
    { name: "Home", link: "www.google.com" },
    { name: "Laptop", link: "" },
    { name: "Phone", link: "" },
    { name: "TV", link: "" },
    { name: "HeadPhone", link: "" },
    { name: "Camera", link: "" },
    { name: "Accessories", link: "" },
  ];

  let [displayProductsNav, setDisplayProductsNav] = useState(false);
  return (
    <>
      <NavBar
        onMenuClick={() => {
          setDisplayProductsNav(!displayProductsNav);
        }}
      />
      {console.log(displayProductsNav)}
      <div className="flex justify-center border-2 py-2">
        <ProductsNav
          productList={productCatList}
          key={productCatList.name}
          displayMenu={displayProductsNav}
          isHotDrop={true}
        />
      </div>
      <Outlet />
      <FooterBar categoryList={productCatList} />
    </>
  );
};

export default MainLayout;
