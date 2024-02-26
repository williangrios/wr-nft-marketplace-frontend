import React from 'react'
import image from '../../img/index'
import { FaRegImage, FaUserAlt, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownload, TbDownloadOff } from 'react-icons/tb'
import images from '../../img/index'
import Link from 'next/link'
import Image from 'next/image'

function Profile() {
    return (
        <div className="">
            <div className="">
                <Image src={images.user1} alt='user image' width={50} height={50} className='' />
                <div className="">
                    <p className="">Willian</p>
                    <small className="">8923d98</small>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <FaUserAlt />
                        <p className="">
                            <Link href={{ pathname: '/my-profile' }}>My profile</Link>
                        </p>
                    </div>
                    <div className="">
                        <FaRegImage />
                        <p className="">
                            <Link href={{ pathname: '/my-items' }}>My items</Link>
                        </p>
                    </div>
                    <div className="">
                        <FaUserEdit />
                        <p className="">
                            <Link href={{ pathname: '/edit-profile' }}>Edit profile</Link>
                        </p>
                    </div>
                    <div className="">
                        <div className="">
                            <MdHelpCenter />
                            <p className="">
                                <Link href={{ pathname: '/help' }}>Help</Link>
                            </p>
                        </div>
                        <div className="">
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