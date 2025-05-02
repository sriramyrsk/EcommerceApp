import React from "react";

import ProductsNav from "../components/ProductsNav";
import ProductsCollection from "../components/ProductsCollection";
import DisplayProducts from "../components/DisplayProducts";
import products from "../products.json";
import HotDealBanner from "../components/HotDealBanner";
import FooterProducts from "../components/FooterProducts";
import NewsLetterConnect from "../components/NewsLetterConnect";

const HomePage = () => {
  let productCatList = [
    { name: "Home", link: "www.google.com" },
    { name: "Laptop", link: "" },
    { name: "Phone", link: "" },
    { name: "TV", link: "" },
    { name: "HeadPhone", link: "" },
    { name: "Camera", link: "" },
    { name: "Accessories", link: "" },
  ];
  let newProductList = products.filter((product) => product.isNew === true);
  let topRatedProductList = [...products];
  topRatedProductList.sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* <NavBar /> */}

      <ProductsCollection />
      <DisplayProducts
        productHeading={"NEW PRODUCTS"}
        productCategories={productCatList}
        products={newProductList}
      />

      <HotDealBanner />

      <DisplayProducts
        productHeading={"TOP RATED PRODUCTS"}
        productCategories={productCatList}
        products={topRatedProductList}
      />

      <FooterProducts productList={topRatedProductList} />

      <NewsLetterConnect />

      {/* <FooterBar categoryList={productCatList}/> */}
    </>
  );
};

export default HomePage;
