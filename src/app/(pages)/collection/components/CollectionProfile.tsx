import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import images from '../../../../img/index'
import Image from 'next/image'

interface CollectionProfileProps {
    bannerImage: any
}

function CollectionProfile () {
    const cardArray = [1, 2, 3, 4, 5]
    return (
        <div className='w-full mt-6'>
            <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-4 bg-gray-100 rounded-xl shadow-right-bottom p-4">
                <div className="col-span-1">
                    <Image className='rounded-xl' src={images.nft_1} objectFit='cover' alt='nft image' width={800} height={800} />
                    <div className="text-gray-500  my-4 flex gap-2 items-center mt-6 w-full justify-center">
                        <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer  ">
                            <TiSocialFacebook className='h-8 w-8 hover:transition-all ease-in-out hover:scale-110' />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer  ">
                            <TiSocialLinkedin className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer 0 ">
                            <TiSocialYoutube className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer ">
                            <TiSocialInstagram className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer ">
                            <TiSocialTwitter className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                        </a>
                    </div>
                </div>
                <div className="col-span-3 text-gray-600">
                    <h1 className="font-extrabold text-2xl mb-4 ">Awesome NFTs Collection</h1>
                    <p className="my-4 leading-4 w-[70%]">COLLECTION DESCRIPTIONCOLLECTION DESCRIPTIONCOLLECTION DESCRIPTIONCOLLECTION DESCRIPTION</p>
                    <div className="flex flex-col lg:flex-row lg:justify-start gap-4">
                        {
                            cardArray.map((item, i) => (
                                <div className="flex flex-col p-8 bg-gray-50 rounded-xl shadow-md items-center justify-center " key={i + 1}>
                                    <small className="">Floor price</small>
                                    <p className="text-lg">${i + 1}94,225</p>
                                    <span className="">+ {i + 2}.11%</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionProfile