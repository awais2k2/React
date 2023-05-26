import React, { useEffect, useState } from "react";

export default function SellingList(props) {
  const [cartchange, setCartchange] = useState(false);
  const [context, setContext] = useState("Add to Bucket");

  const addtocart = () => {
    setContext("Added!!");
    setTimeout(() => {
      setContext("Add to Bucket");
    }, 1000);

    props.addtocart(props);
  };

  useEffect(() => {
    setCartchange(!cartchange);
  }, [addtocart]);
  return (
    <div className="py-[30px] pb-[10px] px-[15px] bg-[#1C1816]  h-auto w-[310px] flex flex-col  rounded-[15px] cursor-pointer">
      <div className=" flex justify-center">
        <img
          className="w-[290px] h-[276px] rounded-[10px] object-cover transition duration-500  transform hover:scale-105"
          src={props.img}
        />
      </div>
      <div className="text-[white] text-[1.5rem] mt-[10px]">{props.name}</div>
      <div className="text-[white] text-[0.9rem] pb-[12px] leading-6 mt-[10px]">
        {props.des}
      </div>
      <div className="flex justify-between items-center mt-[25px] mb-[5px]">
        <div className="text-[white] text-[1.5rem] font-bold tracking-tighter ">
          {props.price}
        </div>
        <button
          onClick={addtocart}
          className=" tracking-[0.3px] text-white bg-red-600 py-[7px] px-[10px] rounded-[6px] text-[14px] font-bold hover:bg-red-800">
          {context}
        </button>
      </div>
    </div>
  );
}
