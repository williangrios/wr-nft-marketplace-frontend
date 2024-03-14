'use client'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiDollar, BiTransfer, BiTransferAlt } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaPercentage, FaWallet } from 'react-icons/fa'
import { MdCloudUpload, MdOutlineDeleteSweep, MdReportProblem, MdTimer, MdVerified } from 'react-icons/md'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import NFTTabs from './NFTTabs'
import images from '../../../../img/index'

function NFTDescription () {
    const [social, setSocial] = useState(false)
    const [nftMenu, setNFTMenu] = useState(false)
    const [history, setHistory] = useState(true)
    const [provanance, setProvanance] = useState(false)
    const [owner, setOwner] = useState(false)

    const historyArray = [
        images.earn,
        images.logo,
        images.nft_1,
        images.earn,
        images.logo,
        images.nft_1
    ]

    const provananceArray = [
        images.nft_image_1,
        images.logo,
        images.nft_image_1,
        images.earn,
        images.logo,
        images.nft_1
    ]

    const ownerArray = [
        images.logo,
        images.logo,
        images.logo,
        images.logo,
        images.logo,
        images.logo
    ]

    const openSocial = () => {
        if (!social) {
            setSocial(true)
            setNFTMenu(false)
        } else {
            setSocial(false)
        }
    }

    const openNFTMenu = () => {
        if (!nftMenu) {
            setNFTMenu(true)
            setSocial(false)
        } else {
            setNFTMenu(false)
        }
    }

    const openOwner = () => {
        if (!owner) {
            setOwner(true)
            setHistory(false)
            setProvanance(false)
        } else {
            setOwner(false)
        }
    }

    const openTabs = (e: any) => {
        const btnText = e.target.innerText
        if (btnText === 'Bid History') {
            setHistory(true)
            setProvanance(false)
            setOwner(false)
        } else if (btnText === 'Provanance') {
            setHistory(false)
            setProvanance(true)
            setOwner(false)
        }
    }

    return (
        <div>
            <div className="text-gray-500 ">
                {/* PART ONE */}
                <div className="">
                    <p className="">Virtual worlds</p>
                    <div className="flex gap-5 items-center ">
                        <MdCloudUpload className='cursor-pointer rounded-full h-10 p-2 w-10 transition-all ease-in-out shadow-right-bottom hover:bg-gray-500 hover:text-white' onClick={() => openSocial()} />
                        {social && (
                            <div className="absolute mt-32 flex gap-3 bg-white rounded-xl p-3 shadow-right-bottom">
                                <a href="#" className="flex items-center w-8 h-8 cursor-pointer  ">
                                    <TiSocialFacebook className='h-8 w-8 hover:transition-all ease-in-out hover:scale-110' />
                                </a>
                                <a href="#" className="flex items-center w-8 h-8 cursor-pointer  ">
                                    <TiSocialLinkedin className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                                </a>
                                <a href="#" className="flex items-center w-8 h-8 cursor-pointer 0 ">
                                    <TiSocialYoutube className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                                </a>
                                <a href="#" className="flex items-center w-8 h-8 cursor-pointer ">
                                    <TiSocialInstagram className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                                </a>
                                <a href="#" className="flex items-center w-8 h-8 cursor-pointer ">
                                    <TiSocialTwitter className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
                                </a>
                            </div>
                        )}
                        <BsThreeDots onClick={() => openNFTMenu()} className='cursor-pointer rounded-full h-10 p-2 w-10 transition-all ease-in-out shadow-right-bottom hover:bg-gray-500 hover:text-white' />
                        {nftMenu && (
                            <div className="absolute mt-64 flex flex-col gap-3 bg-white rounded-xl p-3 shadow-right-bottom">
                                <a href="#" className="flex items-center w-full gap-2 h-8 cursor-pointer hover:transition-all ease-in-out hover:scale-110">
                                    <BiDollar /> Change Price
                                </a>
                                <a href="#" className="flex items-center w-full gap-2 h-8 cursor-pointer hover:transition-all ease-in-out hover:scale-110">
                                    <BiTransferAlt /> Transfer
                                </a>
                                <a href="#" className="flex items-center w-full gap-2 h-8 cursor-pointer hover:transition-all ease-in-out hover:scale-110">
                                    <MdReportProblem /> Report abouse
                                </a>
                                <a href="#" className="flex items-center w-full gap-2 h-8 cursor-pointer hover:transition-all ease-in-out hover:scale-110">
                                    <MdOutlineDeleteSweep /> Delete item
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {/* PART TWO */}
                <div className="">
                    <h1 className="text-3xl font-extrabold">BearX #23512</h1>
                    <div className="flex justify-around items-center my-6">
                        <div className="flex justify-between gap-2 items-start">
                            <Image src={images.logo} alt='profile' width={40} height={40} className='rounded-full' />
                            <div className="flex flex-col gap-2">
                                <small className="">Creator</small>
                                <span className="flex items-center gap-2 font-extrabold">Karli costa <MdVerified /></span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 items-start">
                            <Image src={images.logo} alt='profile' width={40} height={40} className='rounded-full' />
                            <div className="flex flex-col gap-2">
                                <small className="">Creator</small>
                                <span className="flex items-center gap-2 font-extrabold">Karli costa <MdVerified /></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="flex items-center gap-2">
                            <MdVerified />
                            <span className="">Auction ending in:</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center justify-center w-[50px]">
                                <p className="font-extrabold text-2xl">2</p>
                                <span>days</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[50px]">
                                <p className="font-extrabold text-2xl">22</p>
                                <span>hours</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[50px]">
                                <p className="font-extrabold text-2xl">21</p>
                                <span>mins</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[50px]">
                                <p className="font-extrabold text-2xl">44</p>
                                <span>secs</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 mt-10">
                            <div className="col-span-3 border-2 border-gray-600 rounded-xl md:grid-cols-4">
                                <small className="rounded-xl bg-gray-600 text-white p-2 ml-4 mt-[-20px] w-24 block">Current bid</small>
                                <p className="m-4">10 ETH <span className="">($3,216.51)</span></p>
                            </div>
                            <span className='col-span-2 md:grid-cols-1 text-right px-2'>[96] in stock</span>
                        </div>
                        <div className="flex gap-3 justify-center my-3">
                            <Button icon={<FaWallet />} btnText='Place a bid' handleClick={() => { }} classStyle='transition-all ease-in-out' />
                            <Button icon={<FaPercentage />} btnText='Make offer' handleClick={() => { }} classStyle='transition-all ease-in-out' />
                        </div>
                        <div className="flex gap-3 justify-center mb-3">
                            <button className='p-2 text-gray-600 bg-gray-200 transition-all ease-in-out hover:bg-gray-600 hover:text-white hover:border-gray-600 rounded-full w-32' onClick={(e) => openTabs(e)}>Bid History</button>
                            <button className='p-2 text-gray-600 bg-gray-200 transition-all ease-in-out hover:bg-gray-600 hover:text-white hover:border-gray-600 rounded-full w-32' onClick={(e) => openTabs(e)}>Provanance</button>
                            <button className='p-2 text-gray-600 bg-gray-200 transition-all ease-in-out hover:bg-gray-600 hover:text-white hover:border-gray-600 rounded-full w-32' onClick={() => openOwner()}>Owner</button>
                        </div>
                        {
                            history && (
                                <div className="">
                                    <NFTTabs dataTab={historyArray} icon={<MdVerified />} />
                                </div>
                            )
                        }
                        {
                            provanance && (
                                <div className="">
                                    <NFTTabs dataTab={provananceArray} />
                                </div>
                            )
                        }
                        {
                            owner && (
                                <div className="">
                                    <NFTTabs dataTab={ownerArray} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTDescription