import Image from 'next/image'
import React from 'react'

interface NFTTabsProps {
  dataTab: any[]
  icon: any
}

function NFTTabs ({ dataTab, icon }: NFTTabsProps) {
  return (
    <div>
      <div className="">
        {dataTab.map((item, i) => (
          <div className="" key={i + 1}>
            <Image src={item} alt="profile image" width={40} height={40} />
            <div className="">
              <span className="">Offer by $770 by <span className="">Willian Rios</span></span>
              {icon}
              <small>Jun 14 - 2:23PM</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTTabs
