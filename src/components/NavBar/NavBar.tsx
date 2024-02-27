'use client'
import React, { useEffect, useState } from 'react'
import Discover from './Discover'
import HelpCenter from './HelpCenter'
import Notification from './Notification'
import Profile from './Profile'
import Sidebar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import Button from '../Button/Button'
import images from '../../img/index'

function NavBar () {
    const [discover, setDiscover] = useState(false)
    const [help, setHelp] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)

    const openProfile = () => {
        if (!profile) {
            setProfile(true)
            setNotification(false)
            setDiscover(false)
            setHelp(false)
        } else {
            setProfile(false)
        }
    }

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true)
        } else {
            setOpenSideMenu(false)
        }
    }

    const openNotifications = () => {
        if (!notification) {
            setNotification(true)
            setDiscover(false)
            setHelp(false)
            setProfile(false)
        } else {
            setNotification(false)
        }
    }

    const openMenu = (e: any) => {
        const btnText = e.target.innerText;
        if (btnText == "Discover") {
            setDiscover(true)
            setHelp(false)
            setNotification(false)
            setProfile(false)
        } else if (btnText == "Help Center") {
            setDiscover(false)
            setHelp(true)
            setNotification(false)
            setProfile(false)
        } else {
            setDiscover(false)
            setHelp(false)
            setNotification(false)
            setProfile(false)
        }
    }

    return (
        <div className="w-full relative bg-green-50 z-50 py-6">
            <div className="w-[80%] m-auto flex items-center bg-red-100 justify-between">
                <div className="flex items-center w-[50%] justify-around bg-yellow-300">
                    <div className="">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image src={images.logo} alt='WR NFT Marketplace' width={75} height={75} />
                    </div>
                    <div className="">
                        <div className="flex items-center justify-center gap-2 border border-black rounded-full py-2 px-3">
                            <input type="text" className="px-3 py-1" placeholder='Search NFT' />
                            <BsSearch onClick={() => { }} className="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-[50%] justify-around bg-yellow-600">
                    <div className="">
                        <p className="" onClick={(e) => { openMenu(e) }}>Discover</p>
                        {discover &&
                            <div className="">
                                <Discover />
                            </div>
                        }
                    </div>
                    <div className="">
                        <p className="" onClick={(e) => { openMenu(e) }}>Help Center</p>
                        {help &&
                            <div className="">
                                <HelpCenter />
                            </div>
                        }
                    </div>
                    <div className="">
                        <MdNotifications className='' onClick={() => { openNotifications() }} />
                        {notification &&
                            <Notification />
                        }
                    </div>
                    <div className="">
                        <Button btnText="Create" />
                    </div>
                    <div className="">
                        <div className="">
                            <img src={images.user1} alt="Profile" width={40} height={40} onClick={() => { openProfile() }} />
                            {profile && <Profile />}
                        </div>
                    </div>
                    <div className="">
                        <CgMenuRight className="" onClick={() => openSideBar()} />
                    </div>
                </div>
            </div>
            {
                openSideMenu &&
                <div className="">
                    <Sidebar setOpenSideMenu={setOpenSideMenu} />
                </div>
            }
        </div>
    )
}

export default NavBar