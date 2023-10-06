import AddLobourList from "./AddLobourList";
import React, { useState, useEffect } from "react";
const AddLabour = (props) => {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [date, setDate] = useState("");
  const [nameisvalid, setNameisvalid] = useState(false);
  const [amountisvalid, setAmountisvalid] = useState(false);
  const [dateisvalid, setDateisvalid] = useState(false);

  const namechangehandler = (e) => {
    return setname(e.target.value);
  };
  const phonechangehandler = (e) => {
    return setphone(e.target.value);
  };
  const datechangehandler = (e) => {
    return setDate(e.target.value);
  };
  useEffect(() => {
    useuserdatahandler();
  }, [users]);
  useEffect(() => {
    useuserdatahandler();
  }, []);

  useEffect(() => {
    if (phone.length >= 0) {
      setAmountisvalid(false);
    } else {
      setAmountisvalid(true);
    }
    if (name.length >= 0) {
      setNameisvalid(false);
    } else {
      setNameisvalid(true);
    }

    if (date.length >= 0) {
      setDateisvalid(false);
    } else {
      setDateisvalid(true);
    }
  }, [name, phone, date]);

  const Labour = { name, phone, date };
  const submithandler = (e) => {
    e.preventDefault();
    if (phone.length > 0) {
      setAmountisvalid(false);
    } else {
      setAmountisvalid(true);
    }
    if (name.length > 0) {
      setNameisvalid(false);
    } else {
      setNameisvalid(true);
    }

    if (date.length > 0) {
      setDateisvalid(false);
    } else {
      setDateisvalid(true);
    }

    if (name.length !== 0 && phone.length !== 0 && date.length !== 0) {
      adduserdatahandler(Labour);
      async function adduserdatahandler(Labour) {
        const response = await fetch(
          "https://react-http-ea7a3-default-rtdb.firebaseio.com/labours.json",
          {
            method: "POST",
            body: JSON.stringify(Labour),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        useuserdatahandler();
      }

      setname("");
      setphone("");
      setDate("");
    }
  };

  async function useuserdatahandler() {
    const response = await fetch(
      "https://react-http-ea7a3-default-rtdb.firebaseio.com/labours.json"
    );
    const data = await response.json();
    const User = [];
    for (const key in data) {
      User.push({
        id: key,
        name: data[key].name,
        phone: data[key].phone,
        date: data[key].date,
      });
    }
    setusers(User);
  }
  return (
    <>
      <div
        className={`w-[35%] mx-auto  mt-[30px] shadow-md rounded-[20px] bg-slate-100`}>
        <form
          onSubmit={submithandler}
          className="p-[30px] flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="name" className="text-[20px] font-semibold">
              Name
            </label>

            <input
              onChange={namechangehandler}
              value={name}
              type="text"
              id="name"
              className={
                `h-[22px]` +
                (nameisvalid
                  ? " border-solid border-red-500 rounded-[5px] "
                  : "")
              }
            />
          </div>
          <div className="flex   flex-col gap-[6px]">
            <label className="text-[20px] font-semibold " htmlFor="amount">
              Phone Number
            </label>
            <input
              onChange={phonechangehandler}
              value={phone}
              id="amount"
              type="number"
              name="number"
              className={
                ` h-[22px] outline-none` +
                (amountisvalid
                  ? " border-solid border-red-500 rounded-[5px]"
                  : "")
              }></input>
          </div>

          <div className="flex   flex-col gap-[6px]">
            <label htmlFor="date" className="text-[20px] font-semibold">
              Date
            </label>
            <input
              onChange={datechangehandler}
              value={date}
              id="date"
              type="date"
              name="date"
              className={
                ` h-[22px] outline-none` +
                (dateisvalid
                  ? " border-solid border-red-500 rounded-[5px]"
                  : "")
              }
            />
          </div>

          <button
            className={`cursor-pointer px-[15px] py-[6px] bg-gray-900 text-white text-[18px] mt-[12px] w-[160px]`}>
            Add Labour
          </button>
        </form>
      </div>
      <AddLobourList labour={users} />
      {/* <div>Total Labours: {Labour.lenght}</div> */}
    </>
  );
};

export default AddLabour;
