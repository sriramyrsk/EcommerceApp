import React from "react";
function NavItem({ icon, text }) {
  return (
    <>
      <div className="flex flex-col justify-center bg-black px-4">
        <div className="flex justify-center bg-black">{icon}</div>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
}

export default NavItem;
