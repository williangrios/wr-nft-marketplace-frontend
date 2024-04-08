"use client";
import React, { useState } from "react";
import Image from "next/image";
import images from "../../../img/index";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RiAwardLine } from "react-icons/ri";

interface FollowerTabCardProps {
  i: number;
  item: any;
}

function FollowerTabCard({ i, item }: FollowerTabCardProps) {
  const [following, setFollowing] = useState(false);
  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(true);
    }
  };

  return (
    <div className="relative flex flex-col rounded-xl hover:shadow-right-bottom transition-all ease-in-out w-full gap-2 cursor-pointer grow">
      <div className="absolute m-2">
        <p className=" rounded-full px-3 py-2 flex items-center justify-between bg-gray-500 text-white gap-4">
          {i + 1}
          <span className="">
            <RiAwardLine />
          </span>
        </p>
      </div>
      <div className="">
        <Image
          src={item.backgruond ?? images.categoryBackground1}
          className="rounded-xl"
          alt="Profile backgruond"
          style={{
            width: "100%",
            height: "auto",
          }}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col p-2">
        <div className="flex justify-center">
          <Image
            className="mt-[-35px] rounded-full border-4 border-white"
            alt="profile picture"
            width={50}
            height={50}
            src={item.user ?? images.logo}
          />
        </div>
        <div className="flex mt-6 ">
          <div className="flex flex-col justify-start w-1/2">
            <div className="flex justify-start gap-2 items-center">
              <h4 className="">{item.seller.slice(0, 8)}...</h4>
              <span>
                <MdVerified />
              </span>
            </div>
            <p className="">{item.total || 0} ETH</p>
          </div>
          <div className="flex items-center justify-end w-1/2 text-white">
            {following ? (
              <a
                href=""
                className="flex items-center gap-2 rounded-full bg-gray-400 p-3"
                onClick={() => followMe()}
              >
                Follow{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a
                href=""
                className=" rounded-full bg-gray-400 p-3"
                onClick={() => followMe()}
              >
                Following
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowerTabCard;
