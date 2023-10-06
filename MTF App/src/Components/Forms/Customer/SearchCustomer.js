import React, { useState, useReducer, useEffect } from "react";

export default function SearchCustomer(props) {
  const [arr, setarr] = useState([]);
  const [search, setsearch] = useState("");

  const searchhandler = (e) => {
    setsearch(e.target.value);
  };

  const checkhandler = () => {
    let ar = [];
    ar = props.cus.filter((item) => search === item.referanceNo);
    setarr(ar);
  };

  return (
    <>
      <div className="w-[32%] mx-auto  mt-[30px] shadow-md rounded-[20px] p-[30px] bg-gray-300  flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <input
            onChange={searchhandler}
            type="text"
            className="outline-0 h-[18px]"
          />
          <button
            onClick={checkhandler}
            className="py-[10px] text-[18px] cursor-pointer w-[50%] bg-gray-700 hover:bg-gray-900 text-white border-0 self-center rounded-[20px]">
            Search by id
          </button>
        </div>
      </div>
      <div>
        {arr.map((user) => {
          return (
            <div className="w-[32%] mx-auto  mt-[30px] shadow-md rounded-[20px] p-[30px] bg-gray-900  flex flex-col gap-[20px]">
              <div className="  border-[1px] border-white border-solid p-[10px] text-white">
                <div className="">Name: {user.clientname}</div>
                <div>PhoneNumber: {user.Phonenumber}</div>
                <div>Date: {user.Date}</div>
                <div>Length: {user.Len}</div>
                <div>seleves: {user.Seleves}</div>
                <div>Shoulder: {user.Shoulder}</div>
                <div>Chest: {user.Chest}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
