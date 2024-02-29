import Image from 'next/image'
import React from 'react'
import images from '../../img/index'
import ServiceItem from './ServiceItem'

function Service () {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 lg:w-[80%] m-auto p-4 justify-between text-center text-gray-500 my-14'>
            <ServiceItem step={1} title='Discover Unique NFTs' description='Explore a vast array of unique NFTs, ranging from digital art to collectibles, and find the perfect additions to your collection.' image={images.logo} />
            <ServiceItem step={2} title='Connect with Creators' description='Engage with talented creators, artists, and innovators within the NFT community. Connect, collaborate, and discover new opportunities.' image={images.logo} />
            <ServiceItem step={3} title='Buy & Sell with Ease' description='Effortlessly buy and sell your NFTs on our platform. Enjoy seamless transactions and explore new possibilities in the world of digital assets.' image={images.logo} />
            <ServiceItem step={4} title='Stay Informed & Engaged' description='Stay updated on the latest trends, news, and developments in the NFT space. Join discussions, share insights, and be part of the growing NFT community.' image={images.logo} />
        </div>
    )
}

export default Service