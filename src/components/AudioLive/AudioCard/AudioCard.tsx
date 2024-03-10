'use client'
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'
import images from "../../../img/index"
import Image from 'next/image'

function AudioCard () {
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)

    const handleLikeNFT = () => {
        if (!like) {
            setLike(true)
        } else {
            setLike(false)
        }
    }

    const playMusic = () => {
        if (!play) {
            setPlay(true)
        } else {
            setPlay(false)
        }
    }

    return (
        <div className={`flex relative flex-col overflow-hidden rounded-2xl hover:shadow-lg transition duration-200 ease-out shadow-xs shadow-black hover:shadow-xs`} >
            <div className="">
                <Image className='rounded-tr-2xl rounded-tl-2xl z-50' src={images.nft_1} alt='NFT Image' style={{
                    width: '100%',
                    height: 'auto',
                }} />
            </div>
            <div className="flex absolute justify-between gap-2 p-6 items-start " onClick={() => playMusic()}>
                {play ? (
                    <div className="bg-gray-600 text-gray-100 rounded-full p-4 shadow-right-bottom cursor-pointer">
                        <TbPlayerPlay />
                    </div>
                ) : (
                    <div className="bg-gray-600 text-gray-100 rounded-full p-4 shadow-right-bottom cursor-pointer">
                        <TbPlayerPause />
                    </div>
                )}
            </div>
            <div className="flex justify-between gap-2 p-2 items-start mt-5">
                <div className="flex flex-col items-center justify-between w-[60%]">
                    <small>Remaining time</small>
                    <p className="font-extrabold">3h: 22m: 12s</p>
                </div>
                <div className="text-white bg-gray-500 max-w-[100px] rounded-full w-[40%] py-2 px-4 flex items-center justify-center gap-3" onClick={() => handleLikeNFT()}>
                    {like ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
                    {""} 22
                </div>
            </div>
            <div className="mt-3 py-2 flex items-center justify-between">
                <div className="flex justify-between w-full items-center px-2">
                    <div className="flex flex-col justify-center ">
                        <h4 className="text-base w-full font-extrabold text-center">Music #23423</h4>
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
                </div>
            </div>
        </div>
    )
}

export default AudioCard