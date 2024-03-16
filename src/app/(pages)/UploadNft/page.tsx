import React from 'react'
import UploadNftComponent from './components/UploadNftComponent'

function UploadNft() {
  return (
    <div>
        <div className="w-[80%] m-auto flex flex-col gap-4 text-gray-500">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-extrabold">Create New NFT</h1>
                <p className="">You can set preferred display name, create your profile and manage other personal settings.</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-xl font-extrabold">Image, video, audio or 3D model</h2>
                <p className="">Files supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, OGG. Max size: 100 Mb</p>
            </div>
            <div className="">
                <UploadNftComponent />
            </div>
        </div>
    </div>
  )
}

export default UploadNft