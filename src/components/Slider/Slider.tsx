"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard/SliderCard";

function Slider() {
  const sliderArray = [1, 2, 3, 4, 5, 6, 7];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef<any>();

  useEffect(() => {
    if (!dragSlider.current) return;
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, [dragSlider]);

  const handleScroll = (direction: string) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollRight += scrollAmount;
    }
  };

  return (
    <div className="w-full">
      <div className="w-[80%] m-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex w-full justify-end gap-2">
            <div className="border border-gray-700 shadow-lg p-4 rounded-full transition-all ease-in cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-800 hover:text-gray-100">
              <TiArrowLeftThick onClick={() => handleScroll("left")} />
            </div>
            <div className="border border-gray-700 shadow-lg p-4 rounded-full transition-all ease-in cursor-pointer bg-gray-200 text-gray-600 hover:bg-gray-800 hover:text-gray-100">
              <TiArrowRightThick onClick={() => handleScroll("right")} />
            </div>
          </div>
        </div>
        <motion.div ref={dragSlider} className="overflow-hidden">
          <motion.div
            className="grid grid-cols-6 gap-1 p-4 grid-rows-1"
            ref={dragSlider}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((item, i) => (
              <SliderCard key={i + 1} item={item} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Slider;
