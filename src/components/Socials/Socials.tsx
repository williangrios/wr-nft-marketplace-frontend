import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

function Socials () {
    return (
        <div className="flex justify-center gap-5 text-gray-500">
            <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer  ">
                <TiSocialFacebook className='h-8 w-8 hover:transition-all ease-in-out hover:scale-110' />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer  ">
                <TiSocialLinkedin className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer 0 ">
                <TiSocialYoutube className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer ">
                <TiSocialInstagram className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 cursor-pointer ">
                <TiSocialTwitter className="h-8 w-8 hover:transition-all ease-in-out hover:scale-110" />
            </a>
        </div>
    )
}

export default Socials