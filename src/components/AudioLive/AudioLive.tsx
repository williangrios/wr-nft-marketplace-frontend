'use client'
import React from 'react'
import AudioCard from './AudioCard/AudioCard'
import AudioCardSmall from './AudioCardSmall/AudioCardSmall'

function AudioLive () {
    return (
        <div className='items-start w-[80%] m-auto py-2 gap-8 p-2 grid grid-cols-2 lg:grid-cols-3'>
            <AudioCard />
            <AudioCard />
            <div className="col-span-full lg:col-span-1">
                <div className="flex flex-col gap-4">
                    <AudioCardSmall />
                    <AudioCardSmall />
                    <AudioCardSmall />
                </div>
            </div>
        </div>
    )
}

export default AudioLive