import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import Image from 'next/image'
import images from '../../img/index'

function Category () {
    const categoryArray = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 pb-6 gap-4 m-auto w-[80%]'>
            {categoryArray.map((item, key) => (
                <div className="flex flex-col gap-4 transition-all hover:shadow-right-bottom rounded-lg ease-in overflow-hidden cursor-pointer pb-2" key={key + 1}>
                    <Image className='' src={images.categoryBackground1} alt='Background image' width={350} height={150} objectFit='cover' />
                    <div className="flex text-gray-600 items-start mt-1">
                        <span className="p-2">
                            <BsCircleFill className='h-8 w-8' />
                        </span>
                        <div className="">
                            <h4 className="">Entertainment</h4>
                            <small>1995 NFTs</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category