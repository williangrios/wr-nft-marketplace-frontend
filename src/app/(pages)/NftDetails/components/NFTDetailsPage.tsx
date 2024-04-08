import React from "react";
import NFTDescription from "./NFTDescription";
import NFTDetailsImage from "./NFTDetailsImage";

interface NFTDetailsPageProps {
  nft: any;
}

function NFTDetailsPage({ nft }: NFTDetailsPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] m-auto h-full">
      <NFTDetailsImage nft={nft} />
      <NFTDescription nft={nft} />
    </div>
  );
}

export default NFTDetailsPage;
