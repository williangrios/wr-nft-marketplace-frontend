'use client'
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'
import images from "../../../img/index"
import Image from 'next/image'

function AudioCard () {
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)

    const likeNFT = () => {
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
        <div>
            <div className="">
                <div className="">
                    <div className="" onClick={() => likeNFT()}>
                        {like ? (
                            <AiFillHeart />
                        ) : (
                            <AiOutlineHeart />
                        )}
                        <span>24</span>
                    </div>
                    <div className="">
                        <div className="">
                            <small>Remaining time</small>
                            <h5>3h:15m:22s</h5>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image src={images.nft_image} alt='music' width={200} />
                    <div className="" onClick={() => playMusic()}>
                        {play ? (
                            <div className="">
                                <TbPlayerPause />
                            </div>
                        ) : (
                            <div className="">
                                <TbPlayerPause />
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <h4 className="">NFT music #123</h4>
                        <div className="">
                            <small className="">Price</small>
                            <p className="">$342,39</p>
                        </div>
                    </div>
                    <div className="">
                        <small className="">33 IN STOCK</small>
                    </div>
                </div>
                <div className="">
                    <Image src={images.categoryBackground1} alt='Background' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default AudioCard