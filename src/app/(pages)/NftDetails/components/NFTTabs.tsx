import Image from 'next/image'
import React from 'react'

interface NFTTabsProps {
  dataTab: any[]
  icon: any
}

function NFTTabs ({ dataTab, icon }: NFTTabsProps) {
  return (
    <div className="p-2 flex flex-col gap-3">
      {dataTab.map((item, i) => (
        <div className="flex gap-4 border-b-gray-400 border border-t-0 border-x-0 py-2" key={i + 1}>
          <div className="">
            <Image src={item} alt="profile image" width={40} height={40} objectFit='cover' className='rounded-full' />
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-2 items-center">
              <span className="font-extrabold">Offer by $770 by Willian Rios </span>
              {icon}
            </div>
            <small>Jun 14 - 2:23PM</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTTabs
