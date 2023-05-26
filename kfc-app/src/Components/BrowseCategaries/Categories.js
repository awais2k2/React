import React from "react";

export default function Categories() {
  return (
    <div className=" ">
      <div className="flex  items-center  gap-[25px] mt-[55px] w-[67%] mx-auto">
        <div className="text-gray-300 text-[28px] font-bold mb-[8px]">
          Browse Categories
        </div>
        <div className="border-t-[1px] border-gray-500 h-[1px] flex-1"></div>
      </div>
      <div className="mt-[30px]  flex gap-[20px] justify-center ">
        <div className="w-[163px] cursor-pointer ">
          <img
            className=" h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/burger3.jpg"
          />
        </div>
        <div className="w-[163px] cursor-pointer">
          <img
            className="h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/burger2.jpg"
          />
        </div>
        <div className="w-[163px] cursor-pointer">
          <img
            className="h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/burger.jpg"
          />
        </div>
        <div className="w-[163px] cursor-pointer">
          <img
            className="h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/airburger.jpg"
          />
        </div>
        <div className="w-[163px] cursor-pointer">
          <img
            className="h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/pizza1.jpg"
          />
        </div>
        <div className="w-[163px] cursor-pointer">
          <img
            className="h-[163px] w-full object-cover  border-[1px] border-dashed rounded-[10px] transition duration-200  transform hover:scale-105"
            src="../../../assets/friesburger.jpg"
          />
        </div>
      </div>
    </div>
  );
}
