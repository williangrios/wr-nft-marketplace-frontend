import React from 'react'
import images from '../../img/index'
import Image from 'next/image'

function Notification () {
    const linkFormatClasses = ' hover:bg-gray-700 px-3 py-2 hover:text-gray-300 h rounded-xl text-gray-800  block'
    return (
        <div className='flex flex-col absolute z-10 bg-gray-300 rounded-xl p-3 shadow-right-bottom'>
            <p className="text-lg">Notification</p>
            <div className="flex gap-2 mt-4 hover:bg-gray-700 px-3 py-2 hover:text-gray-300 h rounded-xl text-gray-800 cursor-pointer">
                <div className="">
                    <Image className='rounded-full ' src={images.logo} alt='User image' width={40} height={40} />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm">Willian Rios</h4>
                    <p className="text-xs">Measure action your user...</p>
                    <small className="text-xs">3 minutes ago</small>
                </div>
                <span className="">

                </span>
            </div>
        </div>
    )
}

export default Notification