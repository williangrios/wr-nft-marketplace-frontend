import Image from 'next/image'
import React from 'react'

interface ServiceItemProps {
    image: any
    step: number
    title: string
    description: string
}

function ServiceItem (props: ServiceItemProps) {
    return (
        <div className="flex flex-col gap-6 items-center mt-4">
            <Image src={props.image} alt={props.title} width={100} height={100} />
            <p className=""><span className="">Step {props.step}</span></p>
            <h3 className="text-2xl font-bold px-4">{props.title}</h3>
            <p className="px-4">{props.description}</p>
        </div>
    )
}

export default ServiceItem