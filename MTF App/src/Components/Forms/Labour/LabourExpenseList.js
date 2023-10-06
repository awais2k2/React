import React, { useState, useEffect } from "react";
const TechnicianList = () => {
  const [showbackbutton, setshowbackbutton] = useState(false);
  const [users, setusers] = useState([]);
  const [array, setarray] = useState([]);
  const [search, setsearch] = useState("");
  let arr = [];
  const searchsubmithandler = () => {
    if (search.length > 0) {
      arr = users.filter(
        (item) => search.toLowerCase() === item.name.toLowerCase()
      );
      setarray(arr);
      setshowbackbutton(true);
    }
  };
  useEffect(() => {
    labourdatahandler();
  }, [searchsubmithandler]);

  async function labourdatahandler() {
    const response = await fetch(
      "https://react-http-ea7a3-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    const User = [];
    for (const key in data) {
      User.push({
        id: key,
        name: data[key].name,
        amount: data[key].amount,
        date: data[key].date,
        des: data[key].des,
      });
    }
    setusers(User);
  }

  const backsubmithandler = () => {
    setshowbackbutton(false);
  };
  const searchchangehandler = (e) => {
    setsearch(e.target.value);
  };

  return (
    <>
      <div className="w-[50%] mx-auto  mt-[30px] shadow-md rounded-[20px] p-[30px] bg-gray-900 flex flex-col gap-[20px]">
        <div className="flex gap-[20px] outline-0">
          <input type="text" onChange={searchchangehandler} />
          <button className="cursor-pointer" onClick={searchsubmithandler}>
            Search
          </button>
          {showbackbutton && (
            <button className="cursor-pointer" onClick={backsubmithandler}>
              Back
            </button>
          )}
        </div>
        {array.map((user) => {
          return (
            <div className=" flex justify-between border-[1px] border-white border-solid p-[10px] text-white">
              <div className="">Name: {user.name}</div>
              <div>Amount: {user.amount}</div>
              <div>Date: {user.date}</div>
              <div>Description: {user.des}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechnicianList;
