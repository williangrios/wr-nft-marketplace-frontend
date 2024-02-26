import Link from 'next/link'
import React from 'react'

function Discover() {
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
        <div>
            {discover.map((item, i) =>
                <div className="" key={i + 1}>
                    <Link href={{ pathname: `${item.link}` }} >{item.name}</Link>
                </div>
            )}
        </div>
    )
}

export default Discover