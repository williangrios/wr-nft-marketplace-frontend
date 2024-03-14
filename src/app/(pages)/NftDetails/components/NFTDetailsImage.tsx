'use client'
import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import images from '../../../../img/index'
import Image from 'next/image'

function NFTDetailsImage
  () {
  const [description, setDescription] = useState(true)
  const [details, setDetails] = useState(true)
  const [like, setLike] = useState(false)

  useEffect(() => {

  }, [])

  const openDescription = () => {
    if (!description) {
      setDescription(true)
    } else {
      setDescription(false)
    }
  }

  const openDetails = () => {
    if (!details) {
      setDetails(true)
    } else {
      setDetails(false)
    }
  }

  const likeNFT = () => {
    if (!like) {
      setLike(true)
    } else {
      setLike(false)
    }
  }

  return (
    <div className="w-full h-full m-auto flex flex-col gap-8">
      <div className="relative flex flex-col mx-auto ">
        <div className="absolute flex gap-2 items-center p-4 justify-between w-full">
          <BsImages className='' />
          <p className="flex gap-3 bg-gray-600 text-white px-3 py-2 rounded-full cursor-pointer items-center" onClick={() => likeNFT()}>
            {
              like ?
                <AiOutlineHeart className='' />
                :
                <AiFillHeart className='' />
            }
            <span className="">23</span>
          </p>
        </div>
        <div className="">
          <Image src={images.nft_1} className='rounded-xl shadow-right-bottom' width={700} height={800} objectFit='cover' alt='NFT Image' />
        </div>
      </div>
      <div className="" >
        <div className="flex bg-gray-200 rounded-xl p-2 justify-between items-center cursor-pointer" onClick={() => openDescription()}>
          <p className="">Description</p>
          {
            description ? <TiArrowSortedUp /> : <TiArrowSortedDown />
          }
        </div>
        {
          description && <div className="">
            <p className="p-2">Description collection, description collection, description collection, description collection, description collection, description collection</p>
          </div>
        }
      </div>
      <div className="" >
        <div className="flex bg-gray-200 rounded-xl p-2 justify-between items-center cursor-pointer" onClick={() => openDetails()}>
          <p className="">Details</p>
          {
            details ? <TiArrowSortedUp /> : <TiArrowSortedDown />
          }
        </div>
        {details && (
          <div className="p-2">
            <small className="">2000 x 2000 px.image(658px)</small>
            <p className="">
              <small className="">Contract adderss</small>
              0x51651651651a56165as1df56a1565
            </p>
            <p className="">
              <small className="">Token Id</small>
              1321032a103
            </p>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default NFTDetailsImage
