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

function NavBar() {
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
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={images.logo} alt='WR NFT Marketplace' width={100} height={100} />
                    </div>
                    <div className="">
                        <div className="">
                            <input type="text" className="" placeholder='Search NFT' />
                            <BsSearch onClick={() => { }} className="" />

                        </div>
                    </div>
                </div>
                <div className="">
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