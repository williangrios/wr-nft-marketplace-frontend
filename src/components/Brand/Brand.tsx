'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import images from '../../img/index'

function Brand () {
    return (
        <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between mb-10">
            <div className="flex flex-col text-gray-500 gap-4">
                <Image src={images.logo} alt='brand' width={100} height={100} />
                <h1 className="font-extrabold text-4xl leading-10">Earn free crypto with us</h1>
                <p className="">A creative agency that lead and inspire</p>
                <div className="flex items-center justify-center gap-3">
                    <Button btnText='Create' handleClick={() => { console.log('Botão "Create" clicado') }} />
                    <Button btnText='Discover' handleClick={() => { console.log('Botão "Discover" clicado') }} />
                </div>
            </div>
            <div className="hidden md:flex">
                <Image src={images.earn} alt='brand logo' width={800} height={600} />
            </div>
        </div>
    )
}

export default Brand