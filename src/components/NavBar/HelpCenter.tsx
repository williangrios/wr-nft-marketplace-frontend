import Link from 'next/link'
import React from 'react'

function HelpCenter () {
    const helpCenter = [
        {
            name: "About",
            link: "AboutUs"
        },
        {
            name: "Contact us",
            link: "ContactUs"
        },
        {
            name: "Sign up",
            link: "sign-up"
        },
        {
            name: "Sign in",
            link: "sign-in"
        },
        {
            name: "Subscription",
            link: "Subscription"
        },
    ]

    return (
        <div className="mt-4">
            {helpCenter.map((item, i) => (
                <div key={i + 1}>
                    <Link className='w-full h-full hover:bg-gray-700 px-3 py-2 hover:text-gray-300 h rounded-xl text-gray-800  block' href={item.link}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default HelpCenter