import React from 'react'
import Image from 'next/image'
import images from '../../../img/index'
import { MdVerified } from 'react-icons/md'

function DaysComponent () {
    return (
        <div className='rounded-xl w-full grow hover:shadow-right-bottom transition-all ease-in-out w=[100%]'>
            <div className="flex flex-col gap-1">
                <div className="">
                    <Image src={images.categoryBackground1} className='rounded-xl' alt='Profile backgruond' style={{
                        width: '100%',
                        height: 'auto',
                    }} objectFit='cover' />
                </div>
                <div className="flex gap-1">
                    <div className="w-1/3">
                        <Image src={images.categoryBackground1} alt='Profile' style={{
                            width: '100%',
                            height: 'auto',
                        }} className='rounded-bl-xl' objectFit='cover' />
                    </div>
                    <div className="w-1/3">
                        <Image src={images.categoryBackground1} alt='Profile' style={{
                            width: '100%',
                            height: 'auto',
                        }} className='' objectFit='cover' />
                    </div>
                    <div className="w-1/3">

                        <Image src={images.categoryBackground1} alt='Profile' style={{
                            width: '100%',
                            height: 'auto',
                        }} className='rounded-br-xl' objectFit='cover' />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-2">
                    <h2 className="">Amazing collection</h2>
                    <div className="flex justify-between">
                        <div className="flex justify-start items-center gap-3 w-4/5">
                            <Image src={images.nft_1} alt='profile' width={30} height={30} objectFit='cover' className='rounded-full' />
                            <p className="">Creator <span className="">Willian Rios </span></p>
                            <small className=""><MdVerified /></small>
                        </div>
                        <div className="w-1/5 flex items-center justify-center"><small className="rounded-lg border border-gray-400 text-center p-3">1.4 Eth</small></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponent