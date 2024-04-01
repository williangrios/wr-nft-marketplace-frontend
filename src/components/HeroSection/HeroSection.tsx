'use client'
import Image from 'next/image'
import React, {useState, useEffect, useContext} from 'react'
import Button from '../Button/Button'
import images from '../../img/index'
import { WRNFTMarketplaceContext } from '@/context/WRNFTMarketplaceContext'

function HeroSection () {
    return (
        <div className='flex flex-col lg:flex-row w-[100%] lg:w-[80%] p-4 lg:px-0 gap-10 m-auto justify-center items-center'>
            <div className="flex flex-col text-gray-500 gap-8">
                <h1 className="text-5xl font-bold">Uncover, amass, and market NFTs</h1>
                <p className="text-2xl font-semibold ">Explore remarkable NFTs spanning various aspects of life. Craft unique NFTs and distribute them.</p>
                <div>
                    <Button btnText='Start your search' />
                </div>
            </div>
            <div>
                <Image className='rounded-lg shadow-right-bottom' src={images.nft_image} width={600} height={600} alt='Hero Image' />
            </div>
        </div>
    )
}

export default HeroSection