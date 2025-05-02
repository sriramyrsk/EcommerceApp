import React from "react";
import bannerImage from "../assets/hotdealbanner.webp";

const HotDealBanner = () => {
  let timeContinerStyle =
    "flex flex-col bg-red-500 py-6 px-8 rounded-full justify-center items-center ";
  let timerTimeStyle = "text-white font-bold text-xl";
  let timerTextStyle = "text-white text-xs";
  return (
    <>
      <div className="flex justify-center">
        <div
          className="h-content mb-16 flex w-full flex-col flex-wrap items-center justify-center gap-y-8 bg-cover bg-center py-12 sm:h-96 md:py-2"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className={timeContinerStyle}>
              <h1 className={timerTimeStyle}>02</h1>
              <p className={timerTextStyle}>DAYS</p>
            </div>

            <div
              className={
                "flex flex-col items-center justify-center rounded-full bg-red-500 px-[1.6rem] py-6"
              }
            >
              <h1 className={timerTimeStyle}>10</h1>
              <p className={timerTextStyle}>HOURS</p>
            </div>

            <div className={timeContinerStyle}>
              <h1 className={timerTimeStyle}>34</h1>
              <p className={timerTextStyle}>MINS</p>
            </div>

            <div className={timeContinerStyle}>
              <h1 className={timerTimeStyle}>60</h1>
              <p className={timerTextStyle}>SECS</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-1">
            <h1 className="text-center text-2xl font-black">
              HOT DEAL THIS WEEK
            </h1>
            <h1 className="text-center text-2xl font-[300]">
              NEW COLLECTION UP TO 50% OFF
            </h1>
          </div>

          <button className="rounded-full bg-red-500 px-7 py-2 font-bold text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default HotDealBanner;
