import React from 'react'
import images from '../../img/index'

function Notification() {
    return (
        <div className=''>
            <p className="">Notification</p>
            <div className="">
                <div className="">
                    <img src={images.user1} alt='User image' width={50} height={50} />

                </div>
                <div className="">
                    <h4 className="">Willian Rios</h4>
                    <p className="">Measure action your user...</p>
                    <small className="">3 minutes ago</small>
                </div>
                <span className="">

                </span>
            </div>
        </div>
    )
}

export default Notification