import React from 'react'

interface TitleProps {
    title: string
    subtitle: string
}

function Title (props: TitleProps) {
    return (
        <div className='flex flex-col w-[80%] m-auto my-10 text-gray-600 gap-4'>
            <h2 className="text-4xl font-extrabold">{props.title}</h2>
            <h4 className="text-xl">{props.subtitle}</h4>
        </div>
    )
}

export default Title