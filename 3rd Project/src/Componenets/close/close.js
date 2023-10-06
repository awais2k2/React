import React from "react";

const Close = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
      <div className="fixed top-[28vh] left-[30%] w-[40%] z-[100] overflow-hidden  ">
        <div className=" bg-white mx-auto my-[40px] rounded-[10px] ;">
          <h1 className="bg-purple-900 p-[20px] rounded-t-[10px] text-[26px] text-white font-bold">
            {props.title}
          </h1>
          <p className="p-[25px] font-semibold text-[18px]">{props.message}</p>
          <div className="flex justify-end">
            <button
              onClick={props.closemodel}
              className="bg-purple-900 p-[1rem] text-center text-white py-[5px] text-[18px] font-semibold mr-[20px] mt-[60px] rounded-[10px] mb-[20px]">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Close;
