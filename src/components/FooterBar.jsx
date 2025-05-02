import React from "react";
import FooterItems from "./FooterItems";

const FooterBar = ({ categoryList }) => {
  let informationList = [
    { name: "About us", link: "" },
    { name: "Contact us", link: "" },
    { name: "Privacy Policy", link: "" },
    { name: "Orders and Returns", link: "" },
    { name: "Terms and Conditions", link: "" },
  ];

  let serviceList = [
    { name: "My Account", link: "" },
    { name: "View Cart", link: "" },
    { name: "Wishlist", link: "" },
    { name: "Track My Order", link: "" },
    { name: "Help", link: "" },
  ];
  return (
    <>
      <div className="flex h-fit w-full flex-col justify-center border-t-2 border-red-500 bg-black md:flex-row md:items-start">
        <div className="mb-16 flex max-w-5xl flex-col flex-wrap items-center justify-evenly gap-x-16 md:flex-row">
          <div className="mt-10 flex w-[90%] flex-col flex-wrap gap-y-4 md:w-[25%]">
            <h1 className="mb-3 text-2xl font-bold text-white">ABOUT ME</h1>
            <p className="font-normal text-gray-400">
              I am sriram ,This is my first full stack project. By building this
              project I focused on refreshing HTML , CSS or TAILWINDCSS , REACT
              , SPRINGBOOT for backend.
            </p>
          </div>

          <FooterItems heading={"CATEGORIES"} list={categoryList.slice(0, 5)} />

          <FooterItems heading={"INFORMATION"} list={informationList} />

          <FooterItems heading={"SERVICE"} list={serviceList} />
        </div>
      </div>
    </>
  );
};

export default FooterBar;
