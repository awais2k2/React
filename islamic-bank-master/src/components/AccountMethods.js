import React, { useContext } from "react";
import "./AccountMethods.css";
import { RiBillLine } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineMobile } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { FaGetPocket } from "react-icons/fa";
import { MdGetApp } from "react-icons/md";
import { Login } from "../contexts/AccountsContext";

function AccountMethods() {
  const movementMethods = [
    { text: "Send Money", icon: <BiSend /> },
    { text: "Pay Bills", icon: <RiBillLine /> },
    { text: "Mobile Load", icon: <AiOutlineMobile /> },
    { text: "Get Loan", icon: <FaGetPocket /> },
    { text: "Shopping", icon: <AiOutlineShoppingCart /> },
    { text: "Request Money", icon: <MdGetApp /> },
  ];
  const { loginSuccess, currentUserID } = useContext(Login);

  return (
    <ul className={`AccountMethods ${loginSuccess ? "" : "hidden"}`}>
      {movementMethods.map((method, index) => (
        <React.Fragment key={`${method.text}-${index}`}>
          <li
            onClick={() => {
              console.log(method.text);
            }}
          >
            <span className="AccountMethods-icons">{method.icon}</span>
            <br />
            {method.text}
          </li>
          {window.innerWidth < 900
            ? !(index === 2 || index + 1 === movementMethods.length) && (
                <div className="line"></div>
              )
            : index + 1 !== movementMethods.length && (
                <div className="line"></div>
              )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default AccountMethods;
