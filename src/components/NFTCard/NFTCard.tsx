"use client";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

interface NFTCardProps {
  NFTData: any[];
}

function NFTCard({ NFTData }: NFTCardProps) {
  const [like, setLike] = useState(true);

  const handleLikeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-10 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {NFTData.map((item, i) => (
        <Link href={{ pathname: "/NftDetails", query: item }} key={i + 1}>
          <div
            className={`flex h-[420px] md:h-[400px] flex-col overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition duration-200 ease-out shadow-xs shadow-black hover:shadow-xs`}
          >
            <div className="relative hover:scale-110 ease-in-out transition-all transform scale-100 w-full h-52">
              <Image
                className="rounded-tr-2xl rounded-tl-2xl z-50"
                src={item.image}
                alt="NFT Image"
                fill
                objectFit="contain"
                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
              />
            </div>
            <div className="flex justify-between gap-2 px-2 items-start mt-5">
              <div className="flex flex-col items-center justify-between w-[60%]">
                <small>Remaining time</small>
                <p className="font-extrabold">3h: 22m: 12s</p>
              </div>
              <div
                className="text-white bg-gray-500 rounded-full w-[40%] py-2 px-4 flex items-center justify-center gap-3"
                onClick={() => handleLikeNFT()}
              >
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
                {""} 22
              </div>
            </div>
            {/* abaixo div que vai ficar na parte de baixo */}
            <div className="mt-3  flex items-center justify-between">
              <div className="flex justify-between w-full items-center px-2">
                <div className="flex flex-col justify-center ">
                  <h4 className="text-base w-full font-extrabold text-center">
                    {item.name} #{item.tokenId}
                  </h4>
                  <div className="flex w-full justify-center">
                    <small className="w-full text-center">61 in stock</small>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col items-center px-2 justify-center rounded-lg border border-gray-500">
                    <small className="rounded-lg bg-gray-500 mt-[-10px] text-center text-white p-2">
                      Current bid
                    </small>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>
                {/* <div className="bg-red-400">
                                  <BsImages />
                              </div> */}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NFTCard;
