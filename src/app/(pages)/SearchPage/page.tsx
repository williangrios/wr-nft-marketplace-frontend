"use client";
import React, { useEffect, useState, useContext } from "react";
import Brand from "@/components/Brand/Brand";
import Slider from "@/components/Slider/Slider";
import SearchBar from "./components/SearchBar";
import Filter from "@/components/Filter/Filter";
import NFTCollectionCard from "../collection/components/NFTCollectionCard";
import Banner from "../collection/components/Banner";
import images from "../../../img/index";
import { WRNFTMarketplaceContext } from "@/context/WRNFTMarketplaceContext";
import Loader from "@/components/Loader/Loader";

function SearchPage() {
  const { fetchNFTs, setError, setOpenError } = useContext(
    WRNFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      fetchNFTs().then((item: any) => {
        setNfts(item);
        setNftsCopy(item);
      });
    } catch (error) {
      setError("Please reload the browser");
      setOpenError(true);
    }
  }, [fetchNFTs]);

  const onHandleSearch = (value: string) => {
    const filteredNFTs = nfts.filter(({ name }: { name: string }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredNFTs.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTs);
    }
  };

  const onClearSearch = () => {
    if (nfts?.length && nftsCopy?.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div>
      <Banner bannerImage={images.categoryBackground1} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCollectionCard NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  );
}

export default SearchPage;
