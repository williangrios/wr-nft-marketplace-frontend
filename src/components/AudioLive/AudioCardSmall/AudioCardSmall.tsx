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
        <div>
            <div className="">
                <Image src={images.categoryBackground1} alt='Music' width={100} height={100} className='' />
                <div className="">
                    <h4 className="">NFT Music #1123</h4>
                    <div className="">
                        {/* <LikeProfile /> */}
                        <div className="">
                            <small className="">Price</small>
                            <p className="">1.00 ETH</p>
                        </div>
                    </div>
                </div>
                <div className="" onClick={() => playMusic()}>
                    {play ? <TbPlayerPause /> : <TbPlayerPlay />}
                </div>
            </div>
        </div>
    )
}

export default AudioCardSmall