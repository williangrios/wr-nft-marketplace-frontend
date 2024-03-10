import React from 'react'
import images from '../../../img/index'
import Link from 'next/link'
import Image from 'next/image'
import Banner from './components/Banner'
import Brand from '@/components/Brand/Brand'
import Filter from '@/components/Filter/Filter'
import CollectionProfile from './components/CollectionProfile'
import Slider from '@/components/Slider/Slider'

function CollectionPage () {
    return (
        <div>
            <Banner bannerImage={images.categoryBackground1} />
            <CollectionProfile />
        </div>
    )
}

export default CollectionPage