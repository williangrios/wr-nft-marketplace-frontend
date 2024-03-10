import Image from 'next/image'
import React from 'react'
import images from "../../img/index"

function Video () {
    return (
        <div className="w-[80%] m-auto mb-20">
            <div className="w-full relative justify-end flex">
                <div className="bg-gray-700 rounded-xl shadow-right-bottom w-[80%] md:w-[40%] h-[250px] md:h-[350px] xl:h-[550px] absolute">
                </div>
                <div className="w-[90%] md:w-[80%] z-50 my-16 m-auto">
                    <Image src={images.videos} className='rounded-xl shadow-right-bottom' alt='Video image' width={1920} height={1080} objectFit='cover' />
                </div>
            </div>
        </div>
    )
}

export default Video