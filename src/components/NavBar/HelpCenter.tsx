import Link from 'next/link'
import React from 'react'

function HelpCenter() {
    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact us",
            link: "contact-us"
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
            link: "subscription"
        },
    ]
    return (
        <div className="">
            {helpCenter.map((item, i) => (
                <div className="" key={i + 1}>
                    <Link href={item.link}>{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default HelpCenter