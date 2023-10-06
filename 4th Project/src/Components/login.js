import React, { Fragment, useState } from "react";

const Login = (props) => {
  const logouthandler = () => {
    props.onlogout();
  };

  return (
    <Fragment>
      <ul className="p-[25px] bg-purple-900 text-[white]  flex justify-between items-center">
        <div>
          <li className="text-[40px]">A Typical Page</li>
        </div>
        <div className="flex gap-[40px] text-[20px] items-center mr-[10px]">
          <li>User</li>
          <li>Admin</li>
          <button
            onClick={logouthandler}
            className="bg-pink-500 px-[30px] py-[8px] rounded-full hover:bg-pink-600">
            Logout
          </button>
        </div>
      </ul>
      <div className="w-[40%] mx-auto border-[2px]  py-[80px] mt-[30px] shadow-lg rounded-[12px] text-center ">
        <div className="text-[45px] font-bold">Welcome back!</div>
      </div>
    </Fragment>
  );
};

export default Login;
