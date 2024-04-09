"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { MdTimer } from "react-icons/md";

interface NFTCollectionCardProps {
  NFTData: any;
}

function NFTCollectionCard({ NFTData }: NFTCollectionCardProps) {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);
  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };
  return (
    <div className="w-[80%] mt-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {NFTData?.map((item: any, i: number) => (
        <Link
          href={{
            pathname: "/NftDetails",
            query: { ...item, tokenId: item?.tokenId?.toString() },
            // query: { ...item, tokenId: 1 },
          }}
          key={i + 1}
        >
          <div className="grid relative cursor-pointer text-gray-600 bg-gray-100 transition-all ease-in rounded-lg hover:shadow-right-bottom p-2">
            <div className="flex w-full absolute mx-2 my-2">
              <div className="flex justify-between items-center w-full p-4 ">
                <BsImage className="text-gray-600" />
                <p
                  className="flex items-center justify-center gap-2 bg-gray-600 mr-2 text-white rounded-full p-2"
                  onClick={() => likeNFT()}
                >
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  <span className="">{likeInc + 1}</span>
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src={item.image}
                alt={"NFT"}
                width={350}
                height={350}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-between p-2 self-start">
              <div className="">
                <p className="font-semibold ">{item.name}</p>
              </div>
              <small className="">4{i + 2}</small>
            </div>
            <div className="flex justify-between w-full self-end">
              <div className="flex flex-col w-1/2 justify-center items-center rounded-xl border border-gray-500">
                <small className="font-semibold">Current Bid</small>
                <p className="">{item.price} ETH</p>
              </div>
              <p className="flex w-1/2 items-center gap-2 justify-end text-sm self-end">
                <MdTimer />
                <span className="">{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NFTCollectionCard;
