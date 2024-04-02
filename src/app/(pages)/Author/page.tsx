"use client";
import { WRNFTMarketplaceContext } from "@/context/WRNFTMarketplaceContext";
import React, { useContext, useEffect, useState } from "react";

function Author() {
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    WRNFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [myNfts, setMyNfts] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNfts(items);
    });
  }, [fetchMyNFTsOrListedNFTs]);

  return (
    <div className="flex w-[80%] h-[50vh] m-auto items-center justify-center">
      <p className="text-center w-full">Under Construction</p>
    </div>
  );
}

export default Author;
