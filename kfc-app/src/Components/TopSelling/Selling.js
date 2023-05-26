import React from "react";
import SellingList from "./SellingList";
export default function Selling(props) {
  const addtocart = (item) => {
    props.addtocart(item);
  };
  return (
    <div className="">
      <div className="flex  items-center  gap-[15px] mt-[65px] w-[67%] mx-auto">
        <div className="text-gray-300 text-[28px] font-bold mb-[8px]">
          Top Selling
        </div>
        <div className="border-t-[1px] border-gray-500 h-[1px] flex-1"></div>
      </div>
      <div className="flex  justify-between w-[67%] mx-auto mt-[30px]">
        {props.items.map((item) => {
          return (
            <SellingList
              amount={item.amount}
              key={item.id}
              addtocart={addtocart}
              name={item.name}
              price={item.price}
              des={item.description}
              img={item.img}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
