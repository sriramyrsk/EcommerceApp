import React from "react";
import { Link } from "react-router";
const FooterItems = ({ heading, list }) => {
  return (
    <>
      <div className="flex w-[90%] min-w-fit flex-col flex-wrap gap-y-3 md:w-[18%]">
        <h1 className="mb-3 mt-10 text-2xl font-bold text-white">{heading}</h1>

        {list.map((item) => (
          <Link
            to=""
            className="pl-1 font-normal text-gray-400 hover:text-red-700 md:w-[fit-content]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default FooterItems;
