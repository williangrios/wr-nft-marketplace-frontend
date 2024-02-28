import React from 'react'
import image from '../../img/index'
import { FaRegImage, FaUserAlt, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownload, TbDownloadOff } from 'react-icons/tb'
import images from '../../img/index'
import Link from 'next/link'
import Image from 'next/image'

function Profile () {
    const linkFormatClasses = 'flex items-center gap-2 w-full h-full hover:bg-gray-700 px-3 py-2 hover:text-gray-300 h rounded-xl text-gray-800  block'
    return (
        <div className="flex flex-col absolute z-10 bg-gray-300 rounded-xl p-3 shadow-right-bottom">
            <div className="flex items-center justify-between w-full  gap-2">
                <Image src={images.logo} alt='user image' width={50} height={50} className='rounded-full' />
                <div className="flex flex-col flex-grow">
                    <p className="text-sm" text-sm>Willian</p>
                    <small className="text-xs">8923d98</small>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className={linkFormatClasses}>
                        <FaUserAlt />
                        <p className="">
                            <Link href={{ pathname: '/my-profile' }}>My profile</Link>
                        </p>
                    </div>
                    <div className={linkFormatClasses}>
                        <FaRegImage />
                        <p className="">
                            <Link href={{ pathname: '/my-items' }}>My items</Link>
                        </p>
                    </div>
                    <div className={linkFormatClasses}>
                        <FaUserEdit />
                        <p className="">
                            <Link href={{ pathname: '/edit-profile' }}>Edit profile</Link>
                        </p>
                    </div>
                    <div className="">
                        <div className={linkFormatClasses}>
                            <MdHelpCenter />
                            <p className="">
                                <Link href={{ pathname: '/help' }}>Help</Link>
                            </p>
                        </div>
                        <div className={linkFormatClasses}>
                            <TbDownload />
                            <p className="">
                                <Link href={{ pathname: '/disconnect' }}>Disconnect</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile