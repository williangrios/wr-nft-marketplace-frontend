import React from 'react'
import NFTDescription from './components/NFTDescription'
import NFTDetailsImage from './components/NFTDetailsImage'
import NFTTabs from './components/NFTTabs'
import Button from '@/components/Button/Button'
import Category from '@/components/Category/Category'
import Brand from '@/components/Brand/Brand'
import NFTDetailsPage from './components/NFTDetailsPage'

function NFTDetails () {
    return (
        <div>
            <NFTDetailsPage />
            <Category />
            <Brand />
        </div>
    )
}

export default NFTDetails