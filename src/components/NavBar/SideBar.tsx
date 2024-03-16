'use client'
import React, { useState } from 'react'
import images from '../../img/index'
import Link from 'next/link'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import { TiArrowSortedDown, TiArrowSortedUp, TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import Button from '../Button/Button'
import Socials from '../Socials/Socials'

function SideBar ({ setOpenSideMenu }) {
    const [openDiscover, setOpenDiscover] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)

    const discover = [
        {
            name: "Collection",
            link: "collection"
        },
        {
            name: "Search",
            link: "SearchPage"
        },
        {
            name: "Author profile",
            link: "AuthorProfile"
        },
        {
            name: "NFT Details",
            link: "NftDetails"
        },
        {
            name: "Account settings",
            link: "account"
        },
        {
            name: "Upload NFT",
            link: "UploadNft"
        },
        {
            name: "Connect wallet",
            link: "ConnectWallet"
        },
        {
            name: "Blog",
            link: "Blog"
        },
    ]

    const helpCenter = [
        {
            name: "About",
            link: "AboutUs"
        },
        {
            name: "Contact us",
            link: "ContactUs"
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
            link: "Subscription"
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
        <div className='lg:hidden text-gray-500 mt-10'>
            <div className="flex flex-col justify-center gap-14 text-lg">
                <GrClose className='self-end cursor-pointer mr-4 bg-gray-400 text-gray-100 rounded-full w-10 h-10 p-3' onClick={() => closeSideBar()} />
                <Image className='m-auto' src={images.logo} alt='logo' width={110} height={110} />
                <p className="m-auto mx-16 text-center">Discover the most outstanding articles on all topics of NFT & your onw storeies and share them.</p>
                <p className="m-auto mx-16 text-center">By Willian Rios</p>
                <Socials />
                <div className="flex flex-col w-full border-t-gray-500 border-t-2 cursor-pointer">
                    <div className="">
                        <div className="flex justify-between items-center" onClick={() => { openDiscoverMenu() }}>
                            <p className="py-5 text-2xl pl-4">Discover</p>
                            <TiArrowSortedDown />
                        </div>
                        {
                            openDiscover && (
                                <div className="">
                                    {discover.map((item, i) => (
                                        <p className="ml-10 hover:text-gray-800" key={i + 1}>
                                            <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                                        </p>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col w-full mb-6 cursor-pointer">
                    <div className="">
                        <div className="flex justify-between items-center" onClick={() => openHelpMenu()}>
                            <p className="py-5 text-2xl pl-4 ">
                                Help Center
                            </p>
                            <TiArrowSortedDown />
                        </div>
                        {openHelp && (
                            <div className="">
                                {helpCenter.map((item, i) => (
                                    <p className='ml-10 hover:text-gray-800' key={i + 1}>
                                        <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-around gap-4">
                <Button btnText="Create" />
                <Button btnText="Connect Wallet" />
            </div>
        </div>
    )
}

export default SideBar