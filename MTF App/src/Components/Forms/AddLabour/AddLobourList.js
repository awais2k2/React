import React from "react";
const AddLobourList = (props) => {
  return (
    <>
      <div className="w-[32%] mx-auto  mt-[30px] shadow-md rounded-[20px] p-[30px] bg-gray-900  flex flex-col gap-[20px]">
        {props.labour.map((user) => {
          return (
            <div className=" flex justify-between border-[1px] border-white border-solid p-[10px] text-white">
              <div className="">Name: {user.name}</div>
              <div>PhoneNumber: {user.phone}</div>
              <div>Date: {user.date}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddLobourList;
