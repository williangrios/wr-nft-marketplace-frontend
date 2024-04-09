"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Category from "@/components/Category/Category";
import Brand from "@/components/Brand/Brand";
import NFTDetailsPage from "./components/NFTDetailsPage";

function NFTDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NFTDetailsContent />
    </Suspense>
  );
}

function NFTDetailsContent() {
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
