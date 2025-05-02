import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import { NavLink } from "react-router";

function NavBar({ onMenuClick }) {
  return (
    <>
      <nav className="flex flex-col items-center justify-center border-b-4 border-red-700 bg-black py-6 lg:flex-row">
        <div className="flex w-full max-w-5xl flex-col flex-wrap items-center justify-between gap-x-16 gap-y-4 lg:flex-row">
          <h1 className="text-white">Gadgets</h1>

          <div className="flex p-1">
            <select
              name="categories"
              id="cat"
              className="text-grey rounded-s-lg bg-white p-1 pl-3 text-gray-500 focus:outline-none"
            >
              <option value="">All Categories</option>
              <option value="">Tv</option>
              <option value="">Laptop</option>
              <option value="">Phone</option>
            </select>

            <input
              type="text"
              placeholder="Search here"
              className="w-4/5 border-x-2 px-4 focus:outline-none"
            />

            <button className="rounded-e-lg bg-red-700 p-2 px-4 text-white">
              Search
            </button>
          </div>

          <div className="flex items-center justify-evenly">
            <NavLink to="">
              {" "}
              <NavItem
                icon={<FaHeart className="text-pink-700" />}
                text={"Your Wishlist"}
              />
            </NavLink>

            <NavLink>
              <NavItem
                icon={<FaShoppingCart className="text-white" />}
                text={"Your Cart"}
              />
            </NavLink>

            <button onClick={onMenuClick} className="lg:hidden">
              <NavItem icon={<FaBars className="text-white" />} text={"Menu"} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
