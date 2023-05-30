import React, { useState, useRef, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./LogCreatePopup.css";
import AccountsContext from "../contexts/AccountsContext";

const LoginPopup = ({
  loginPopup,
  logCreatePopup,
  accountLogin,
  resetLogCreate,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userinputEl = useRef(null);
  const passinputEl = useRef(null);
  const LogErrorEl = useRef(null);
  const accounts = useContext(AccountsContext);

  const resetHandler = () => {
    setUsername("");
    setPassword("");
  };
  useEffect(() => {
    if (resetLogCreate.login) {
      resetHandler();
      userinputEl.current.style.borderColor = "green";
      passinputEl.current.style.borderColor = "green";
      LogErrorEl.current.classList.add("hide");
    }
  }, [resetLogCreate.login]);

  function loginHandler() {
    let found = false;
    accounts?.forEach((account) => {
      if (account.userName === username && account.password === password) {
        userinputEl.current.style.borderColor = "green";
        passinputEl.current.style.borderColor = "green";
        LogErrorEl.current.classList.add("hide");
        logCreatePopup(false, "login");
        accountLogin(true, account.id);
        resetHandler();
        found = true;
      }
    });
    if (!found) {
      userinputEl.current.style.borderColor = "red";
      passinputEl.current.style.borderColor = "red";
      LogErrorEl.current.classList.remove("hide");
    }
  }

  return (
    <div className={`LoginPopup ${loginPopup || "hidden"}`}>
      <AiOutlineClose
        className="LoginPopup-btn-close close-btn"
        onClick={() => {
          logCreatePopup(false, "login");
        }}
      />
      <h1 className="LoginPopup-head">login</h1>
      <div className="LoginPopup-field">
        <label>Username:</label>
        <input
          type="text"
          placeholder="msk2029"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          ref={userinputEl}
        />
      </div>
      <div className="LoginPopup-field">
        <label>Password:</label>
        <input
          type="password"
          placeholder="●●●●●●●"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          ref={passinputEl}
        />
        <p className="Login-error hide" ref={LogErrorEl}>
          Username or Password is wrong!
        </p>
      </div>
      <button className="LoginPopup-btn" onClick={loginHandler}>
        Login
      </button>
      <p className="LoginPopup-create">
        Not have an account yet?{" "}
        <a
          className="create-account"
          onClick={() => {
            logCreatePopup(false, "login");
            logCreatePopup(true, "create");
          }}
        >
          create here
        </a>
      </p>
    </div>
  );
};

export default LoginPopup;
