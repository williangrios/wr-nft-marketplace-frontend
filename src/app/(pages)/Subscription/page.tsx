import React from 'react'
import Subscription from './components/Subscription'

function SubscriptionPage() {
    const subscriptionArray =[
        {
            plan: "Starter",
            price: "$5/mo",
            popular: "",
            service: ["Automated reporting", "Fasteer processing", "Customizations"],
            info: "Literally you probably haven't heart of them jean shorts."
        },
        {
            plan: "Basic",
            price: "$15/mo",
            popular: "(Popular)",
            service: ["Everything in starter", "100 builds", "Progress reports"],
            info: "Literally you probably haven't heart of them jean shorts."
        },
        {
            plan: "Pro",
            price: "$25/mo",
            popular: "",
            service: ["Everything in basic", "Unlimited builds", "Advanced analytics"],
            info: "Literally you probably haven't heart of them jean shorts."
        }
    ]
  return (
    <div>
        <div className="text-gray-500 flex h-[80vh] w-[80%] flex-col m-auto items-center gap-10">
            <div className="w-full mt-10">
                <h1 className="text-3xl">Subscription</h1>
                <p className="text-xl">Pricing to fit the needs of any company size</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                {subscriptionArray.map((item, i) => (
                    <Subscription key={i+1} i={i} item={item} />
                ))}
            </div>
        </div>        
    </div>
  )
}

export default SubscriptionPage