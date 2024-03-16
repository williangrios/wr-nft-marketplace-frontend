import Image from 'next/image'
import React from 'react'
import images from "../../img/index"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import Socials from '../Socials/Socials'
import { RiSendPlaneFill } from 'react-icons/ri'
import HelpCenter from '../NavBar/HelpCenter'
import Discover from '../NavBar/Discover'

function Footer () {
    return (
        <div className='flex flex-col w-[80%] p-2 items-center gap-8  m-auto'>
            <div className="flex flex-col lg:flex-row gap-6 mt-4 justify-start lg:justify-between ">
                <div className="flex lg:w-[30%] flex-col gap-6 items-center justify-center ">
                    <Image src={images.logo} alt='Footer logo' height={100} width={100} />
                    <p className="m-auto lg:mx-6 text-justify text-gray-500">Explore an exceptional world of digital art and exclusive treasures. Discover masterpieces by skilled creators and immerse yourself in the NFT realm. Begin an exciting journey, turning your passion for art into limitless discovery.</p>
                    <Socials />
                </div>
                <div className="w-[35%] lg:w-[19%] mt-4">
                    <h3 className="">Discover</h3>
                    <Discover />
                </div>
                <div className="w-[35%] lg:w-[19%] mt-4">
                    <h3 className="">Help Center</h3>
                    <HelpCenter />
                </div>
                <div className="w-[50%] lg:w-[19%] flex flex-col gap-4 mt-4">
                    <h3 className="">Subscribe</h3>
                    <div className="flex gap-1 items-center justify-between rounded-full px-4 py-2 bg-gray-700">
                        <input type='email' className='grow text-sm outline-none max-w-[75%] bg-transparent text-white' placeholder='Enter your email*' />
                        <RiSendPlaneFill className='text-white cursor-pointer h-4 w-4 mr-2 my-2 hover:scale-125 transition-all ease-in-outs' />
                    </div>
                    <p className="text-gray-500 text-justify">Discover the most outstanding articles on all topics of NFT & your onw storeies and share them.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer