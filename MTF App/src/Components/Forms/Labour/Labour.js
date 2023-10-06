import React, { useState, useEffect } from "react";
import LabourExpenseList from "./LabourExpenseList";
const Labour = (props) => {
  const [name, setname] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [des, setDes] = useState("");

  const [amountisvalid, setAmountisvalid] = useState(false);
  const [dateisvalid, setDateisvalid] = useState(false);
  const [desisvalid, setDesisvalid] = useState(false);

  const [labour, setlabour] = useState([]);

  useEffect(() => {
    labourdatahandler();
  }, []);

  const namechangehandler = (e) => {
    return setname(e.target.value);
  };
  const amountchangehandler = (e) => {
    return setAmount(e.target.value);
  };
  const datechangehandler = (e) => {
    return setDate(e.target.value);
  };
  const deschangehandler = (e) => {
    return setDes(e.target.value);
  };

  useEffect(() => {
    if (amount.length >= 0) {
      setAmountisvalid(false);
    } else {
      setAmountisvalid(true);
    }

    if (date.length >= 0) {
      setDateisvalid(false);
    } else {
      setDateisvalid(true);
    }
    if (des.length >= 0) {
      setDesisvalid(false);
    } else {
      setDesisvalid(true);
    }
  }, [name, amount, date, des]);

  const user = { name, amount, date, des };
  const submithandler = (e) => {
    e.preventDefault();
    if (amount.length > 0) {
      setAmountisvalid(false);
    } else {
      setAmountisvalid(true);
    }

    if (date.length > 0) {
      setDateisvalid(false);
    } else {
      setDateisvalid(true);
    }
    if (des.length > 0) {
      setDesisvalid(false);
    } else {
      setDesisvalid(true);
    }
    if (
      name.length !== 0 &&
      amount.length !== 0 &&
      date.length !== 0 &&
      des.length !== 0
    ) {
      adduserdatahandler(user);
      async function adduserdatahandler(user) {
        const response = await fetch(
          "https://react-http-ea7a3-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      setname("");
      setAmount("");
      setDate("");
      setDes("");
    }
  };

  async function labourdatahandler() {
    const response = await fetch(
      "https://react-http-ea7a3-default-rtdb.firebaseio.com/labours.json"
    );
    const data = await response.json();
    const labour = [];
    for (const key in data) {
      labour.push({
        id: key,
        name: data[key].name,
      });
    }
    setlabour(labour);
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

            <select
              value={name}
              onChange={namechangehandler}
              className="h-[28px] text-[16px]">
              <option value=""></option>
              {labour.map((item) => {
                return (
                  <option className="text-[16px]" value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex   flex-col gap-[6px]">
            <label className="text-[20px] font-semibold " htmlFor="amount">
              Amount
            </label>
            <input
              onChange={amountchangehandler}
              value={amount}
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
          <div className=" flex  flex-col gap-[6px]">
            <label htmlFor="des" className=" text-[20px] font-semibold ">
              Description
            </label>
            <textarea
              onChange={deschangehandler}
              value={des}
              id="des"
              type="text"
              name="description"
              className={
                `h-[22px] outline-none max-w-[605px] min-w-[605px] max-h-[200px] min-h-[22px]` +
                (desisvalid ? " border-solid border-red-500 rounded-[5px]" : "")
              }></textarea>
          </div>

          <button
            className={`cursor-pointer px-[15px] py-[6px] bg-gray-900 text-white text-[18px] mt-[12px] w-[160px]`}>
            Add Expense
          </button>
        </form>
      </div>
      <LabourExpenseList />
    </>
  );
};

export default Labour;
