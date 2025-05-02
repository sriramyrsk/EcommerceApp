import React from "react";

const OfferRibbion = ({ text, bgColor, color }) => {
  return (
    <>
      <div className={"z-30 mt-2 border-2 border-red-600 " + bgColor}>
        <p className={"px-2 py-1 text-xs " + color}>{text}</p>
      </div>
    </>
  );
};

export default OfferRibbion;
