import AudioLive from "@/components/AudioLive/AudioLive";
import BigNFTSlider from "@/components/BigNFTSlider/BigNFTSlider";
import Brand from "@/components/Brand/Brand";
import Category from "@/components/Category/Category";
import Collection from "@/components/Collection/Collection";
import Filter from "@/components/Filter/Filter";
import FollowerTab from "@/components/FollowerTab/FollowerTab";
import HeroSection from "@/components/HeroSection/HeroSection";
import NFTCard from "@/components/NFTCard/NFTCard";
import Service from "@/components/Service/Service";
import Slider from "@/components/Slider/Slider";
import Subscribe from "@/components/Subscribe/Subscribe";
import Title from "@/components/Title/Title";
import Video from "@/components/Video/Video";

export default function Home () {
  return (
    <main>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title title="Latest Audio Collection" subtitle="Discover amazing audios." />
      <AudioLive />
      <Title title="New Collection" subtitle="Discover amazing things by collection." />
      <FollowerTab />
      <Title title="Explore NFTs Video" subtitle="Click on play icon and enjoy NFTs video." />
      <Collection />
      <Title title="Featured NFTs" subtitle="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title title="Browse by category" subtitle="Exlpore the NFTs in the most featured categories." />
      <Category />
      <Subscribe />
      <Brand />
      <Title title="The videos" subtitle="Check out our hottest videos. View more and share more new perspectives on just about any topic." />
      <Video />
    </main>
  );
}
