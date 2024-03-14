import React from 'react'
import images from '../../../img/index'
import Link from 'next/link'
import Image from 'next/image'
import Banner from './components/Banner'
import Brand from '@/components/Brand/Brand'
import Filter from '@/components/Filter/Filter'
import CollectionProfile from './components/CollectionProfile'
import Slider from '@/components/Slider/Slider'
import NFTCollectionCard from './components/NFTCollectionCard'
import Title from '@/components/Title/Title'

function CollectionPage () {
    const collectionArray = [images.nft_1, images.nft_image, images.nft_image_1, images.nft_1, images.nft_image, images.nft_image_1, images.nft_1, images.nft_image, images.nft_image_1]
    return (
        <div>
            <Banner bannerImage={images.categoryBackground1} />
            <CollectionProfile />
            <Filter />
            <NFTCollectionCard NFTData={collectionArray} />
            <Title title="Explore NFTs Video" subtitle="Click on play icon and enjoy NFTs video." />
            <Slider />
            <Brand />
        </div>
    )
}

export default CollectionPage