"use client";
import Button from "@/components/Button/Button";
import React from "react";
import { TiTick } from "react-icons/ti";

interface SubscriptionProps {
  i: number;
  item: any;
}

function Subscription({ i, item }: SubscriptionProps) {
  return (
    <div>
      <div className="flex flex-col justify-center gap-4 p-3 items-center rounded-xl border max-w-[300px] border-gray-500 shadow-right-bottom">
        <span className="flex gap-14 text-2xl w-full font-extrabold">
          {item.plan}
          {item.popular ? (
            <span className="bg-gray-600 text-white p-2 rounded-xl text-xs">
              Popular
            </span>
          ) : (
            ""
          )}
        </span>
        <p className="flex gap-2 text-xl font-extrabold">{item.price}</p>
        <div className="">
          {item.service.map((itemService: any, i: number) => (
            <p className="flex gap-3" key={i + i}>
              <span>
                <TiTick />
              </span>
              {itemService}
            </p>
          ))}
        </div>
        <div className="">
          <Button
            btnText="Submit"
            classStyle=""
            handleClick={() => alert("Test")}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
