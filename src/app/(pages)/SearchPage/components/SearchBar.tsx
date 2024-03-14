import React from 'react'
import { BsArrowRight, BsSearch } from 'react-icons/bs'

function SearchBar () {
    return (
        <div>
            <div className="my-10 w-[350px] px-4 py-2 m-auto bg-gray-100 flex rounded-full justify-center items-center gap-3 shadow-right-bottom ">
                <BsSearch className='text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full w-8 p-2 h-8' />
                <input type='text' placeholder='Type your keyword...' className=' rounded-full p-2 placeholder:text-gray-500 text-gray-600' />
                <BsArrowRight className='text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full  w-8 p-2 h-8' />
            </div>
        </div>
    )
}

export default SearchBar