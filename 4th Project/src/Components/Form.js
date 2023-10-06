import React, { Fragment, useState, useEffect, useReducer } from "react";

const Form = (props) => {
  //   const [username, setusername] = useState("");
  const [isvalid, setisvalid] = useState(false);
  //const [userage, setuserage] = useState("");

  const change = (state, action) => {
    if (action.type === "Name") {
      return { ...state, name: action.name };
    }
    if (action.type === "Password") {
      return { ...state, Password: action.Password };
    }
    return { name: "", Password: "" };
  };

  const [inputs, userinput] = useReducer(change, { name: "", Password: "" });

  useEffect(() => {
    setisvalid(inputs.name.includes("@") && inputs.Password.trim().length > 6);
  }, [inputs.name, inputs.Password]);

  const namechangehandler = (event) => {
    userinput({ type: "Name", name: event.target.value });
  };
  const agechangehandler = (event) => {
    userinput({ type: "Password", Password: event.target.value });
    if (event.target.value.length > 7) {
      setisvalid(false);
    }
    if (event.target.value.length <= 7) {
      setisvalid(true);
    }
  };
  const Submithandler = (event) => {
    event.preventDefault();
    if (inputs.name.includes("@") && inputs.Password.length > 6) {
      props.showlogin();
      props.onAddUser(inputs.name, inputs.Password);
    }
  };
  console.log(inputs);
  return (
    <Fragment>
      <div className="p-[25px] bg-purple-900 text-[white] text-[40px] font-bold ">
        <h1>A Typical Page</h1>
      </div>
      <div className="w-[40%] mx-auto border-[2px] p-[50px] mt-[30px] shadow-lg rounded-[12px] h-[16rem]">
        <form className="flex flex-col gap-[25px]">
          <div className="flex gap-[80px]">
            <label className={"font-bold text-[22px] "}>Emial</label>
            <input
              id="username"
              type="text"
              className={
                "border-[1px] p-[2px] focus:outline-none w-[80%] focus:bg-purple-200 focus:border-purple-900 focus:border-[2px]"
              }
              onChange={namechangehandler}
              value={inputs.name}></input>
          </div>
          <div className="flex gap-[42px]">
            <label className={"font-bold text-[22px] "}>Password</label>
            <input
              id="age"
              type="text"
              className={
                "border-[1px] p-[2px] focus:outline-none w-[80%] focus:bg-purple-200 focus:border-purple-900 focus:border-[2px]"
              }
              onChange={agechangehandler}
              value={inputs.Password}></input>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={Submithandler}
              className={
                " text-center  py-[12px] px-[60px] text-[20px]  font-semibold rounded-full " +
                (isvalid
                  ? "bg-purple-900 text-[white] "
                  : " text-gray-600 bg-gray-300")
              }>
              Login
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
