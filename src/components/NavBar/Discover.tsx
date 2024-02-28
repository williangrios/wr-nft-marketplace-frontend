import Link from 'next/link'
import React from 'react'

function Discover () {
    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "search"
        },
        {
            name: "Author profile",
            link: "author-profile"
        },
        {
            name: "NFT Details",
            link: "NFT-details"
        },
        {
            name: "Account settings",
            link: "account-settings"
        },
        {
            name: "Connect wallet",
            link: "connect-wallet"
        },
        {
            name: "Blog",
            link: "blog"
        },
    ]
    return (
        <div className='mt-4'>
            {discover.map((item, i) =>
                <div key={i + 1}>
                    <Link className='w-full h-full hover:bg-gray-700 px-3 py-2 hover:text-gray-300 h rounded-xl text-gray-800  block' href={{ pathname: `${item.link}` }} >{item.name}</Link>
                </div>
            )}
        </div>
    )
}

export default Discover