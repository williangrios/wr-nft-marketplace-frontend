'use client'
import React, { useState } from 'react'
import Button from '../Button/Button'
import images from '../../img/index'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsImage, BsImages } from 'react-icons/bs'
import Image from 'next/image'


function NFTCard () {
    const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [like, setLike] = useState(true)

    const handleLikeNFT = () => {
        if (!like) {
            setLike(true)
        } else {
            setLike(false)
        }
    }

    return (
        <div className='w-[80%] m-auto mt-10 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
            {featureArray.map((item, i) => (
                <div className={`flex h-[420px] md:h-[400px] flex-col overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition duration-200 ease-out shadow-xs shadow-black hover:shadow-xs`} key={i + 1}>
                    {/* <div key={i + 1} className='relative cursor-pointer m-auto shadow-right-bottom grid grid-rows-[auto,auto,auto] bg-green-300  rounded-lg h-[230px] w-[230px] overflow-hidden' > */}
                    {/* abaixo div que vai ficar na parte de cima */}
                    <div className="hover:scale-110 bg-gray-600 ease-in-out transition-all transform scale-100">
                        <Image className='rounded-tr-2xl rounded-tl-2xl z-50' src={images.nft_1} alt='NFT Image' style={{
                            width: '100%',
                            height: 'auto',
                        }} />
                        {/* <Image className='rounded-tr-2xl rounded-tl-2xl z-50' src={images.nft_1} alt='NFT Image' fill={true} objectFit='cover' style={{ objectFit: "contain" }} /> */}
                    </div>
                    <div className="flex justify-between gap-2 px-2 items-start mt-5">
                        <div className="flex flex-col items-center justify-between w-[60%]">
                            <small>Remaining time</small>
                            <p className="font-extrabold">3h: 22m: 12s</p>
                        </div>
                        <div className="text-white bg-gray-500 rounded-full w-[40%] py-2 px-4 flex items-center justify-center gap-3" onClick={() => handleLikeNFT()}>
                            {like ? (
                                <AiFillHeart />
                            ) : (
                                <AiOutlineHeart />
                            )}
                            {""} 22
                        </div>
                    </div>
                    {/* abaixo div que vai ficar na parte de baixo */}
                    <div className="mt-3  flex items-center justify-between">
                        <div className="flex justify-between w-full items-center px-2">
                            <div className="flex flex-col justify-center ">
                                <h4 className="text-base w-full font-extrabold text-center">Clone #23423</h4>
                                <div className="flex w-full justify-center">
                                    <small className="w-full text-center">61 in stock</small>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col items-center px-2 justify-center rounded-lg border border-gray-500">
                                    <small className="rounded-lg bg-gray-500 mt-[-10px] text-center text-white p-2">Current bid</small>
                                    <p className="text-gray-500">1 ETH</p>
                                </div>
                            </div>
                            {/* <div className="bg-red-400">
                                <BsImages />
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTCard