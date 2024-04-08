"use client";
import React, { useState } from "react";
import {
  BsCalendar3,
  BsFillAlarmFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import DaysComponent from "./DaysComponent/DaysComponent";

function Collection() {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const newsArray = [1, 2, 3, 4, 5, 6];
  const followingArray = [1, 2, 3, 4];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollowing = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-[80%] m-auto">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-gray-600 text-4xl font-extrabold">
          Top list creators
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-full lg:shadow-right-bottom ">
          <div className="flex flex-col lg:flex-row w-full px-4 lg:py-2 justify-center gap-4 lg:gap-10 items-center text-white">
            <button
              className={`flex w-[180px] items-center rounded-full p-3 justify-center gap-2 ${
                popular
                  ? "border border-gray-500 bg-white text-gray-500"
                  : "bg-gray-500"
              }`}
              onClick={() => openPopular()}
            >
              <BsFillAlarmFill />
              Last 24 hours
            </button>
            <button
              className={`flex w-[180px] items-center rounded-full p-3 justify-center gap-2 ${
                following
                  ? "border border-gray-500 bg-white text-gray-500"
                  : "bg-gray-500"
              }`}
              onClick={() => openFollowing()}
            >
              <BsCalendar3 />
              Last 7 days
            </button>
            <button
              className={`flex w-[180px] items-center rounded-full p-3 justify-center gap-2 ${
                news
                  ? "border border-gray-500 bg-white text-gray-500"
                  : "bg-gray-500"
              }`}
              onClick={() => openNews()}
            >
              <BsFillCalendarDateFill />
              Last 30 days
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {popular && (
          <>
            {cardArray.map((item, i) => (
              <DaysComponent key={i + 1} />
            ))}
          </>
        )}
        {following && (
          <>
            {followingArray.map((item, i) => (
              <DaysComponent key={i + 1} />
            ))}
          </>
        )}
        {news && (
          <>
            {newsArray.map((item, i) => (
              <DaysComponent key={i + 1} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Collection;
