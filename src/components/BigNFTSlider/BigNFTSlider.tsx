"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdTimer, MdVerified } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import images from "../../img";
import Button from "../Button/Button";

function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat ",
      collection: "GUM",
      price: "23423 ETH",
      likes: 243,
      image: images.logo,
      nftImage: images.nft_image,
      time: {
        days: 27,
        hours: 12,
        minutes: 11,
        seconds: 16,
      },
    },
    {
      title: "Hello NFT",
      id: 2,
      name: "Daulat ",
      collection: "GUM",
      price: "23423 ETH",
      likes: 243,
      image: images.logo,
      nftImage: images.nft_image,
      time: {
        days: 1,
        hours: 12,
        minutes: 11,
        seconds: 16,
      },
    },
    {
      title: "Hello NFT",
      id: 3,
      name: "Daulat ",
      collection: "GUM",
      price: "23423 ETH",
      likes: 243,
      image: images.logo,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 1,
        minutes: 11,
        seconds: 16,
      },
    },
    {
      title: "Hello NFT",
      id: 4,
      name: "Daulat ",
      collection: "GUM",
      price: "23423 ETH",
      likes: 243,
      image: images.logo,
      nftImage: images.nft_image_1,
      time: {
        days: 30,
        hours: 12,
        minutes: 1,
        seconds: 1,
      },
    },
  ];

  const increment = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const decrement = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  useEffect(() => {
    increment();
  }, []);

  return (
    <div className="w-[90%] lg:w-[80%] m-auto p-4 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="bg-gray-100 rounded-lg z-50 h-[90vh] max-h-[90vh] shadow-right-bottom p-8 text-gray-600 space-y-10">
        <h2 className="text-4xl font-extrabold">
          {sliderData[idNumber].title}
        </h2>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex w-1/2 gap-4">
            <div className="">
              <Image
                className="rounded-full shadow-right-bottom"
                src={sliderData[idNumber].image}
                alt="Profile image"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="">Creator</p>
              <h4 className="flex gap-1">
                {sliderData[idNumber].name}
                <span>
                  <MdVerified />
                </span>
              </h4>
            </div>
          </div>
          <div className="flex w-1/2 gap-4">
            <AiFillFire className="w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p className="">Collection</p>
              <h4 className="">{sliderData[idNumber].collection}</h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-lg border-gray-400 border-2 border-opacity-35 mt-10">
            <small className="bg-gray-200 rounded-lg p-5 ml-10">
              Current Bid
            </small>
            <p className="px-10 mt-6 mb-3">
              {sliderData[idNumber].price}
              <span>$222,22</span>
            </p>
          </div>
          <p className="flex gap-4 mt-6">
            <MdTimer className="w-6 h-6" />
            <span className="">Auction ending in</span>
          </p>
          <div className="flex gap-6 mt-4 lg:mt-8 justify-start items-center">
            <div className="flex flex-col items-center justify-center gap-3 w-[50px]">
              <p className="text-4xl text-center font-extrabold">
                {sliderData[idNumber].time.days}
              </p>
              <span className="text-center">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-[50px]">
              <p className="text-4xl text-center font-extrabold">
                {sliderData[idNumber].time.hours}
              </p>
              <span className="text-center">hours</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-[50px]">
              <p className="text-4xl text-center font-extrabold">
                {sliderData[idNumber].time.minutes}
              </p>
              <span className="text-center">mins</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-[50px]">
              <p className="text-4xl text-center font-extrabold">
                {sliderData[idNumber].time.seconds}
              </p>
              <span className="text-center">secs</span>
            </div>
          </div>
          <div className="mt-10 lg:mt-16 flex w-full justify-center items-center space-x-10">
            <Button btnText="Place" handleClick={() => {}} />
            <Button btnText="View" handleClick={() => {}} />
          </div>
        </div>
        <div className="flex mt-20 gap-8">
          <TbArrowBigLeftLine
            className="rounded-full hover:bg-gray-300 w-8 h-8 cursor-pointer text-gray-500"
            onClick={() => decrement()}
          />
          <TbArrowBigRightLine
            className="rounded-full hover:bg-gray-300 w-8 h-8 cursor-pointer text-gray-500"
            onClick={() => increment()}
          />
        </div>
      </div>
      <div className="relative bg-gray-200 mt-4 lg:mt-0 rounded-lg lg:ml-[-60px] h-[100vh] lg:max-h-[100vh] shadow-right-bottom">
        <Image
          src={sliderData[idNumber].nftImage}
          className="rounded-lg"
          alt="NFT Image"
          objectFit="cover"
          width={300}
          height={300}
        />
        <div className="absolute top-4 left-0 w-full  flex justify-end pr-10">
          <div className="bg-gray-600 flex text-gray-200 rounded-full gap-4 items-center px-4 py-2">
            <AiFillHeart />
            <span className="">{sliderData[idNumber].likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNFTSlider;
