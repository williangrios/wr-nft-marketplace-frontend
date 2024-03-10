import React, { useState } from 'react'
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'
import images from "../../../img/index"
import Image from 'next/image'

function AudioCardSmall () {
    const [play, setPlay] = useState(false)
    const playMusic = () => {
        if (!play) {
            setPlay(true)
        } else {
            setPlay(false)
        }
    }

    return (
        <div className="flex justify-center lg:justify-start items-center gap-10 lg:gap-4 text-gray-500 bg-gray-100 rounded-xl p-4">
            <Image src={images.categoryBackground1} alt='Music' style={{
                width: '50px',
                height: '50px',
            }} height={100} className='rounded-xl' />
            <div className="flex flex-col gap-2 ">
                <h4 className="font-bold">NFT Music #1123</h4>
                <div className="">
                    {/* <LikeProfile /> */}
                    <div className="flex items-center justify-center gap-4 border border-gray-500 rounded-xl">
                        <small className="">Price</small>
                        <p className="">1.00 ETH</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-600 text-gray-100 rounded-full flex w-10 h-10 items-center justify-center shadow-right-bottom cursor-pointer" onClick={() => playMusic()}>
                {play ? <TbPlayerPause /> : <TbPlayerPlay />}
            </div>
        </div>
    )
}

export default AudioCardSmall