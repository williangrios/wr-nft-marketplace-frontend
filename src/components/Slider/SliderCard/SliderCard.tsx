"use client";
import React from "react";
import images from "../../../img/index";
import Image from "next/image";
import { motion } from "framer-motion";

interface SliderCardProps {
  item: any;
  i: number;
}

function SliderCard(props: SliderCardProps) {
  return (
    <motion.div>
      <div className="">
        <motion.div>
          <Image
            src={images.categoryBackground1}
            alt="slider profile"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>
        <div className="">
          <p className=" ">NFT Video #123</p>
          <div className="">
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>
        <div className="">
          <div className="">
            <small className="">Current Bid</small>
            <p className="">1.000 ETH</p>
          </div>
          <div className="">
            <small className="">Remaining time</small>
            <p className="">3h : 12m: 22s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SliderCard;
