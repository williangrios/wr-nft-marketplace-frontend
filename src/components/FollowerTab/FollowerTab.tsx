'use client'
import React, { useState } from 'react'
import { RiAwardLine, RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard'

function FollowerTab () {
    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const followingArray = [1, 2, 3, 4, 5, 6]
    const newsArray = [1, 2, 3, 4]
    const [popular, setPopular] = useState(true)
    const [following, setFollowing] = useState(false)
    const [news, setNews] = useState(false)

    const openPopular = () => {
        if (!popular) {
            setPopular(true)
            setFollowing(false)
            setNews(false)
        }
    }
    const openFollowing = () => {
        if (!following) {
            setPopular(false)
            setFollowing(true)
            setNews(false)
        }
    }
    const openNews = () => {
        if (!news) {
            setPopular(false)
            setFollowing(false)
            setNews(true)
        }
    }

    return (
        <div className='flex flex-col w-[80%] m-auto gap-6 items-center justify-center'>
            <div className="flex flex-col gap-4 items-center my-4">
                <h2 className="text-gray-600 text-4xl font-extrabold">Top Creators List..</h2>
                <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-full lg:shadow-right-bottom ">
                    <div className="flex flex-col lg:flex-row w-full px-4 lg:py-2 justify-center gap-4 lg:gap-10 items-center">
                        <button className={`p-3 w-[180px] rounded-full flex gap-2 justify-center items-center ${popular ? 'border border-gray-500 bg-white text-gray-500' : 'bg-gray-500 text-white'}`} onClick={() => openPopular()}>
                            <RiUserUnfollowFill />Popular
                        </button>
                        <button className={`p-3 w-[180px] rounded-full flex gap-2 justify-center items-center ${following ? 'border border-gray-500 bg-white text-gray-500' : 'bg-gray-500 text-white'}`} onClick={() => openFollowing()}>
                            <RiUserFollowFill />Following
                        </button>
                        <button className={`p-3 w-[180px] rounded-full flex gap-2 justify-center items-center ${news ? 'border border-gray-500 bg-white text-gray-500' : 'bg-gray-500 text-white'}`} onClick={() => openNews()}>
                            <RiAwardLine />NoteWorthy
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] m-auto">
                {
                    popular && (
                        <>
                            {cardArray.map((item, i) => (
                                <FollowerTabCard key={i + 1} i={i} item={item} />
                            ))}
                        </>
                    )
                }
                {
                    following && (
                        <>
                            {followingArray.map((item, i) => (
                                <FollowerTabCard key={i + 1} i={i} item={item} />
                            ))}
                        </>
                    )
                }
                {
                    news && (
                        <>
                            {newsArray.map((item, i) => (
                                <FollowerTabCard key={i + 1} i={i} item={item} />
                            ))}
                        </>
                    )
                }
            </div>
            <div className="flex w-[80%] gap-4 m-auto my-10 justify-center">
                <a href='' className='px-3 py-2 border border-gray-500 text-gray-500 rounded-full hover:text-white hover:bg-gray-500 shadow-right-bottom'>Show me more</a>
                <a href='' className='px-3 py-2 text-white bg-gray-500 border border-gray-500 rounded-full hover:border hover:bg-white hover:text-gray-500 shadow-right-bottom'>Become an author</a>
            </div>
        </div>
    )
}

export default FollowerTab