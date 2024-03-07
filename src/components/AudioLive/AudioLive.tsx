'use client'
import React from 'react'
import AudioCard from './AudioCard/AudioCard'
import AudioCardSmall from './AudioCardSmall/AudioCardSmall'

function AudioLive () {
    return (
        <div className='justify-center items-center w-[80%] m-auto py-2 px-8 grid grid-cols-2'>
            <div className="">
                <div className="">
                    <AudioCard />
                    <AudioCard />
                </div>
                <div className="">
                    <AudioCardSmall />
                    <AudioCardSmall />
                    <AudioCardSmall />
                </div>
            </div>
        </div>
    )
}

export default AudioLive