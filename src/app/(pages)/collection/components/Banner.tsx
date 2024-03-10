import Image from 'next/image'
import React from 'react'

interface BannerProps {
    bannerImage: any
}

function Banner ({ bannerImage }: BannerProps) {
    return (
        <div className='w-[80%] m-auto'>
            <div className="hidden lg:flex">
                <Image src={bannerImage} objectFit='cover' alt='background' width={1600} height={300} style={{ maxHeight: '300px' }} />
            </div>
            <div className="flex lg:hidden">
                <Image src={bannerImage} objectFit='cover' alt='background' width={1600} height={800} style={{ maxHeight: '800px' }} />
            </div>
        </div>
    )
}

export default Banner