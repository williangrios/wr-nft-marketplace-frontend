"use client";
import React, { useEffect, useState, useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import { WRNFTMarketplaceContext } from "@/context/WRNFTMarketplaceContext";
import axios from "axios";
import Image from "next/image";

function ReSell() {
  const { createSale } = useContext(WRNFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  // const params = useSearchParams();
  // const id = params.get("id");
  // const tokenURI = params.get("tokenURI");

  // const fetchNFT = async () => {
  //   if (!tokenURI) return;
  //   const { data } = await axios.get(tokenURI);
  //   // setPrice(data.price);
  //   setImage(data.image);
  // };

  // useEffect(() => {
  //   fetchNFT();
  // }, [id]);

  // const resell = async () => {
  //   try {
  //     await createSale(tokenURI, price, true, id);
  //     // router.push('/author')
  //   } catch (error) {
  //     console.log("Log while ressel token", error);
  //   }
  // };

  // const inputClasses =
  //   "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  // const divClasses =
  //   "flex rounded-full items-center justify-center text-white bg-gray-600 pl-2 mb-6";
  // const iconsClasses = "w-8 h-8 mx-2";

  return (
    <div className="w-[80%] m-auto flex flex-col gap-4 text-gray-500">
      Under construction
      {/* <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold">
          ReSell your token, set price
        </h1>
        <div className="mt-3 flex flex-col gap-8">
          <label htmlFor="price" className="block">
            Price
          </label>
          <div className={divClasses}>
            <AiOutlineUser className={iconsClasses} />
            <input
              type="number"
              min={1}
              placeholder="ReSell Price"
              className={inputClasses}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="">
            {image && (
              <Image
                src={image}
                className="shadow-right-bottom rounded-xl"
                alt="resell nft"
                width={400}
                height={400}
              />
            )}
          </div>
          <div className="">
            <Button btnText="Resell NFT" handleClick={() => resell()} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ReSell;
