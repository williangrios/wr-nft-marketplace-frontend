'use client'
import React, { useState } from 'react'
import images from '../../img/index'
import Link from 'next/link'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import { TiArrowSortedDown, TiArrowSortedUp, TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import Button from '../Button/Button'

function SideBar({ setOpenSideMenu }) {
    const [openDiscover, setOpenDiscover] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)

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

    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact us",
            link: "contact-us"
        },
        {
            name: "Sign up",
            link: "sign-up"
        },
        {
            name: "Sign in",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "subscription"
        },
    ]

    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true)
        } else {
            setOpenDiscover(false)
        }
    }

    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true)
        } else {
            setOpenHelp(false)
        }
    }

    const closeSideBar = () => {
        setOpenSideMenu(false)
    }

    return (
        <div className=''>
            <GrClose className='' onClick={() => closeSideBar()} />
            <div className="">
                <Image src={images.logo} alt='logo' width={150} height={150} />
                <p className="">Discover the most outstanding articles on all topics of NFT & your onw storeies and share them</p>
                <div className="">
                    <a href="#" className="">
                        <TiSocialFacebook />
                    </a>
                    <a href="#" className="">
                        <TiSocialLinkedin />
                    </a>
                    <a href="#" className="">
                        <TiSocialYoutube />
                    </a>
                    <a href="#" className="">
                        <TiSocialInstagram />
                    </a>
                    <a href="#" className="">
                        <TiSocialTwitter />
                    </a>
                </div>
                <div className="">
                    <div className="">
                        <div className="" onClick={() => { openDiscoverMenu() }}>
                            <p className="">Discover</p>
                            <TiArrowSortedDown />
                        </div>
                        {
                            openDiscover && (
                                <div className="">
                                    {discover.map((item, i) => (
                                        <p className="" key={i + 1}>
                                            <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                                        </p>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="">
                    <div className="" onClick={() => openHelpMenu()}>
                        <p className="">
                            Help Center
                        </p>
                        <TiArrowSortedDown />
                    </div>
                    {openHelp && (
                        <div className="">
                            {helpCenter.map((item, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="">
                <Button btnName="Create" />
                <Button btnName="Connect Walelt" />
            </div>
        </div>
    )
}

export default SideBar