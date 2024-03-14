import React from 'react'
import Brand from '@/components/Brand/Brand'
import Slider from '@/components/Slider/Slider'
import SearchBar from './components/SearchBar'
import Filter from '@/components/Filter/Filter'
import NFTCollectionCard from '../collection/components/NFTCollectionCard'
import Banner from '../collection/components/Banner'
import images from '../../../img/index'

function SearchPage () {
    const collectionArray = [
        images.nft_1,
        images.nft_image,
        images.nft_image_1,
        images.nft_1,
        images.nft_image,
        images.nft_image_1,
        images.nft_1,
        images.nft_image,
        images.nft_image_1
    ]
    return (
        <div>
            <Banner bannerImage={images.categoryBackground1} />
            <SearchBar />
            <Filter />
            <NFTCollectionCard NFTData={collectionArray} />
            <Slider />
            <Brand />
        </div>
    )
}

export default SearchPage