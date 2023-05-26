import React, { useState, useEffect } from "react";

export default function HeaderCardButton(props) {
  const [color, setcolor] = useState(false);
  useEffect(() => {
    if (props.cartlength > 0) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  }, [props.cartlength]);

  return (
    <div className="flex gap-[20px] ">
      <button
        onClick={props.onClick}
        className={
          ` ` +
          (color
            ? "bg-red-600  px-[10px] py-[2px] text-[20px] border-[1px] border-white font-medium rounded-[5px]"
            : "px-[10px] py-[5px]  border-[1px] border-white text-white rounded-[5px]")
        }>
        {props.cartlength}
      </button>

      <button className="tracking-[0.3px] text-white bg-red-600 py-[7px] px-[10px] rounded-[6px] text-[14px] font-bold hover:bg-red-800">
        Register / Sign in
      </button>
    </div>
  );
}
