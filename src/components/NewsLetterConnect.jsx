import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
const NewsLetterConnect = () => {
  return (
    <>
      <div className="my-16 flex w-full justify-center border-t-2">
        <div className="flex w-[90%] flex-col items-center justify-center gap-y-8">
          <div className="mt-10 flex flex-wrap justify-center gap-x-2 text-xl">
            <h1 className="font-light">Sign up for the </h1>
            <h1 className="font-extrabold">NEWS LETTERS</h1>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="text"
              className="w-3/5 rounded-l-full border-y-2 border-l-2 px-10 py-1 focus:outline-none sm:w-auto"
              placeholder="Enter your email"
            />
            <button className="w-content flex items-center gap-x-2 rounded-r-full border-y-2 border-red-500 bg-red-600 px-3 px-4 py-1 font-bold text-white lg:px-8">
              {" "}
              <FaEnvelope /> Subscribe
            </button>
          </div>

          <div className="flex gap-x-10">
            <Link to="" className="group bg-blue-400 p-2 hover:bg-blue-200">
              {" "}
              <FaLinkedin className="group-hover:text-blue-700" />
            </Link>
            <Link to="" className="bg-gray-300 p-2 hover:bg-gray-200">
              {" "}
              <FaGithub />{" "}
            </Link>
            <Link
              to="https://www.instagram.com/sriram_3104/"
              className="group bg-pink-500 p-2 hover:bg-pink-100"
              target="_blank"
            >
              {" "}
              <FaInstagram className="text-white group-hover:text-pink-500" />
            </Link>
            <Link to="" className="group bg-red-500 p-2 hover:bg-red-100">
              {" "}
              <FaEnvelope className="text-white group-hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterConnect;
