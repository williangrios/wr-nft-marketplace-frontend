import React from 'react'

interface ButtonProps {
    btnText: string
    handleClick: () => void;
}

function Button ({ btnText, handleClick }: ButtonProps) {
    return (
        <div className='bg-gray-500 text-white rounded-full py-3 cursor-pointer hover:bg-gray-700 px-5 text-sm font-bold' onClick={handleClick}>{btnText}</div>
    )
}

export default Button