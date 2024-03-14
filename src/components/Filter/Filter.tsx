'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import images from '../../img/index'
import { FaUserAlt, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImage, FaFilter } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

function Filter () {
    const [filter, setFilter] = useState(true)
    const [image, setImage] = useState(true)
    const [video, setVideo] = useState(true)
    const [music, setMusic] = useState(true)

    const openFilter = () => {
        if (!filter) {
            setFilter(true)
        } else {
            setFilter(false)
        }
    }

    const openImage = () => {
        if (!image) {
            setImage(true)
        } else {
            setImage(false)
        }
    }

    const openMusic = () => {
        if (!music) {
            setMusic(true)
        } else {
            setMusic(false)
        }
    }

    const openVideo = () => {
        if (!video) {
            setVideo(true)
        } else {
            setVideo(false)
        }
    }

    return (
        <div className='flex flex-col w-[80%] m-auto mt-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                <div className="grid grid-cols-3 lg:grid-cols-5 text-gray-500 text-lg gap-6 ">
                    <button className='border border-transparent w-[90px] hover:border hover:border-gray-500 rounded-full bg-transparent px-2 py-1' onClick={() => { }}>NFTs</button>
                    <button className='border border-transparent w-[90px] hover:border hover:border-gray-500 rounded-full bg-transparent px-2 py-1' onClick={() => { }}>Arts</button>
                    <button className='border border-transparent w-[90px] hover:border hover:border-gray-500 rounded-full bg-transparent px-2 py-1' onClick={() => { }}>Musics</button>
                    <button className='border border-transparent w-[90px] hover:border hover:border-gray-500 rounded-full bg-transparent px-2 py-1' onClick={() => { }}>Sports</button>
                    <button className='border border-transparent w-[90px] hover:border hover:border-gray-500 rounded-full bg-transparent px-2 py-1' onClick={() => { }}>Photos</button>
                </div>
                <div className="flex mt-6 lg:mt-0 justify-center lg:justify-end text-gray-500">
                    <div className="flex justify-center items-center w-full lg:w-[200px] gap-4 rounded-full bg-transparent border border-gray-500 px-6 py-4 " onClick={() => openFilter()}>
                        <FaFilter />
                        <div className="flex items-center justify-around gap-2">
                            Filter{filter ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                    </div>
                </div>
            </div>
            {filter && (
                <div className="grid grid-cols-2 lg:grid-cols-5 pt-10 border-t lg:border-t-transparent mt-10 lg:mt-0 border-t-gray-300 text-gray-500 gap-4">
                    <div className="">
                        <div className="flex gap-2 bg-gray-500 text-white items-center justify-center lg:gap-4  border border-gray-500 rounded-full p-4">
                            <FaWallet /> <span className="">10 ETH</span>
                            <AiFillCloseCircle />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center justify-center lg:gap-4  border border-gray-500 rounded-full bg-transparent p-4 cursor-pointer" onClick={() => openImage()}>
                            <FaImage />
                            <small className="">Images</small>
                            {image ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center justify-center lg:gap-4  border border-gray-500 rounded-full bg-transparent p-4 cursor-pointer" onClick={() => openVideo()}>
                            <FaVideo />
                            <small className="">Video</small>
                            {video ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center justify-center lg:gap-4  border border-gray-500 rounded-full bg-transparent p-4 cursor-pointer" onClick={() => openMusic()}>
                            <FaMusic />
                            <small className="">Music</small>
                            {music ? <AiFillCloseCircle /> : <TiTick />}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-2 bg-gray-500 text-white items-center justify-center lg:gap-4  border border-gray-500 rounded-full p-4">
                            <FaUserAlt />
                            <small className="">Verified</small>
                            <MdVerified />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Filter