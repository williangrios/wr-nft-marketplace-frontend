import Image from 'next/image'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import images from '../../img'

function Subscribe () {
    return (
        <div className="w-[80%] m-auto p-6 my-10">
            <div className="flex flex-col lg:flex-row gap-4 justify-around">
                <div className="flex flex-col gap-8 text-gray-600 w-full lg:[w-40%] justify-center">
                    <h2 className="text-4xl font-extrabold">Never miss a drop</h2>
                    <p className="text-lg ">Subscribe to our super-exclusive drop list and be the first to know about upcoming drops</p>
                    <div className="flex items-center gap-6">
                        <span className="bg-gray-600 py-3 px-4 rounded-full font-bold text-white">01</span>
                        <small className="font-extrabold">Get more</small>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="bg-gray-600 py-3 px-4 rounded-full font-bold text-white">02</span>
                        <small className="font-extrabold">Get premium magazines</small>
                    </div>
                    <div className="flex gap-3 items-center justify-between rounded-full px-4 py-2 bg-gray-600 text-white">
                        <input type='email' className='grow outline-none bg-transparent placeholder-white ' placeholder='Enter your email*' />
                        <RiSendPlaneFill className='text-white cursor-pointer h-8 w-8 mr-2 my-2' />
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:[w-60%] p-14">
                    <Image src={images.update} alt='get more' className='rounded-lg shadow-right-bottom' height={600} width={800} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe