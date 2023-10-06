import React, { useState } from "react";
import Close from "../close/close";

const Form = (props) => {
  const [username, setname] = useState("");
  const [userage, setage] = useState("");
  const [error, seterror] = useState("");
  const namechangehandler = (event) => {
    setname(event.target.value);
  };
  const agechangehandler = (event) => {
    setage(event.target.value);
  };
  const obj = {
    name: username,
    age: userage,
  };
  const Submithandler = (event) => {
    event.preventDefault();
    if (+userage < 1) {
      seterror({
        title: "Invalid input",
        message: "Please enter the valid age (> 0)",
      });
    }
    if (username.trim().length === 0 || userage.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Please enter the valid username and age (non-empty values)",
      });
    }

    if (
      username.trim().length !== 0 &&
      userage.trim().length !== 0 &&
      userage > 0
    ) {
      props.onsubmit(obj);
    }

    setage("");
    setname("");
  };
  const errorhandler = () => {
    seterror(null);
  };
  return (
    <div>
      {error && (
        <Close
          title={error.title}
          message={error.message}
          closemodel={errorhandler}
        />
      )}
      <div className="w-[40%] bg-white mx-auto my-[40px] rounded-[10px] p-[20px]">
      <form className="flex flex-col gap-[10px] ">
          <label className={"font-bold text-[20px] "}>Username</label>
          <input
            id="username"
            type="text"
            class={"border-[1px] p-[2px] focus:outline-none "}
            onChange={namechangehandler}
            value={username}></input>
          <label className={"font-bold text-[20px] "}>Age (Year)</label>
          <input
            id="age"
            type="number"
            class={"border-[1px] p-[2px] focus:outline-none"}
            onChange={agechangehandler}
            value={userage}></input>
          <button
            className="bg-purple-900 w-[15%] text-center text-white py-[5px] text-[18px] font-semibold"
            onClick={Submithandler}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
