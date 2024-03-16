"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import images from "../../../img/index";

function ConnectWalletPage() {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletlink",
    },
  ];

  return (
    <div className="text-gray-600 w-[80%] m-auto flex flex-col gap-20 h-[60vh] justify-center">
      <div className="">
        <h1 className="text-2xl font-extrabold">Connect your wallet</h1>
        <p className="text-lg">
          Connect with one of our available wallet provider or create a new one
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-10">
        {providerArray.map((item, i) => (
          <div
            className={`flex flex-col gap-8 p-8 justify-center items-center cursor-pointer ${activeBtn === i + 1 ? "bg-gray-200 rounded-xl shadow-right-bottom" : ""}`}
            key={i + 1}
            onClick={() => setActiveBtn(i + 1)}
          >
            <Image
              src={item.provider}
              alt="provider"
              width={50}
              height={50}
              className=""
            />
            <p className="">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectWalletPage;
