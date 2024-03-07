import AudioLive from "@/components/AudioLive/AudioLive";
import BigNFTSlider from "@/components/BigNFTSlider/BigNFTSlider";
import Category from "@/components/Category/Category";
import Collection from "@/components/Collection/Collection";
import Filter from "@/components/Filter/Filter";
import FollowerTab from "@/components/FollowerTab/FollowerTab";
import HeroSection from "@/components/HeroSection/HeroSection";
import NFTCard from "@/components/NFTCard/NFTCard";
import Service from "@/components/Service/Service";
import Subscribe from "@/components/Subscribe/Subscribe";
import Title from "@/components/Title/Title";

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
      <Collection />
      <Title title="Featured NFTs" subtitle="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title title="Browse by category" subtitle="Exlpore the NFTs in the most featured categories." />
      <Category />
      <Subscribe />
    </main>
  );
}
