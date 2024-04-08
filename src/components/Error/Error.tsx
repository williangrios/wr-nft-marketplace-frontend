"use client";
import React, { useContext } from "react";
import { WRNFTMarketplaceContext } from "@/context/WRNFTMarketplaceContext";
import { IoIosWarning } from "react-icons/io";

function Error() {
  const { error, setOpenError } = useContext(WRNFTMarketplaceContext);

  return (
    <div
      onClick={() => setOpenError(false)}
      className="w-full h-[100vh] fixed z-100 bg-slate-100 top-0 cursor-pointer flex opacity-95"
    >
      <div className="top-[25%] flex m-auto bg-slate-400 py-2 px-5 rounded-xl shadow-right-bottom opacity-100 text-center gap-2 w-[90%] lg:w-[50%]">
        <div className="text-gray-900 flex gap-6 items-center justify-center">
          <IoIosWarning className="h-16 w-16 text-yellow-500" />
          <p className="">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
