import React from "react";
import { useState, useEffect } from "react";
export default function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideleft = () => {
    setCurrentIndex((pre) => {
      return pre - 1;
    });
    if (currentIndex > 4) {
      setCurrentIndex(0);
    }
    if (currentIndex <= 0) {
      setCurrentIndex(4);
    }
    console.log(currentIndex);
  };
  const sliderigth = () => {
    setCurrentIndex((pre) => {
      return pre + 1;
    });
    if (currentIndex >= 4) {
      setCurrentIndex(0);
    }
    if (currentIndex < 0) {
      setCurrentIndex(4);
    }
    console.log(currentIndex);
  };

  const images = [
    "../../../assets/burger.jpg",
    "../../../assets/burger2.jpg",
    "../../../assets/burger3.jpg",
    "../../../assets/burger4.jpg",
    "../../../assets/pizza1.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-[67%] mx-auto h-[461px] mt-[20px] overflow-hidden  relative">
      <img
        className="object-fit h-full w-full rounded-[15px] object-cover cursor-pointer"
        src={images[currentIndex]}
      />
      <button
        onClick={slideleft}
        className="absolute top-[50%] left-[10px] text-black px-[6px] py-[0px] text-[25px] rounded-[20px] bg-gray-400 transform -translate-y-[50%]">
        &#x2190;
      </button>
      <button
        onClick={sliderigth}
        className="absolute top-[50%] left-[97%] text-black px-[6px] py-[0px] text-[25px] rounded-[20px] bg-gray-400 transform -translate-y-[50%]">
        &#x2192;
      </button>
    </div>
  );
}
