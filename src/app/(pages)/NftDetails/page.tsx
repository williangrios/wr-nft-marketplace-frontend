"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NFTDescription from "./components/NFTDescription";
import NFTDetailsImage from "./components/NFTDetailsImage";
import NFTTabs from "./components/NFTTabs";
import Button from "@/components/Button/Button";
import Category from "@/components/Category/Category";
import Brand from "@/components/Brand/Brand";
import NFTDetailsPage from "./components/NFTDetailsPage";
import { WRNFTMarketplaceContext } from "@/context/WRNFTMarketplaceContext";

function NFTDetails() {
  const { currentAccount } = useContext(WRNFTMarketplaceContext);
  const [nft, setNft] = useState<any>({
    image: "",
    tokenId: "",
    name: "",
    description: "",
    owner: "",
    price: "",
    seller: "",
  });

  const params = useSearchParams();

  useEffect(() => {
    if (!params) return;
    const image = params.get("image");
    const tokenId = params.get("tokenId");
    const name = params.get("name");
    const owner = params.get("owner");
    const description = params.get("description");
    const price = params.get("price");
    const seller = params.get("seller");
    const nftData = {
      image,
      tokenId,
      name,
      owner,
      description,
      price,
      seller,
    };
    setNft(nftData);
  }, [params]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
}

export default NFTDetails;
