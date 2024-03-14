import React from 'react'
import NFTDescription from './NFTDescription'
import NFTTabs from './NFTTabs'
import NFTDetailsImage from './NFTDetailsImage'

function NFTDetailsPage () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] m-auto h-full">
            <NFTDetailsImage />
            <NFTDescription />
        </div>
    )
}

export default NFTDetailsPage