import React, { useEffect, useState, useRef, useContext } from "react";
import AccountsContext from "../contexts/AccountsContext";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import "./LogCreatePopup.css";

const regexGetString = /[A-Za-z]/g;
const regexGetNumber = /\d/g;
const regexWhiteSpace = /\s/;
let imgRef;

function CreatePopup({ createPopup, logCreatePopup, resetLogCreate }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fullNameEl = useRef(null);
  const usernameEl = useRef(null);
  const passwordEl = useRef(null);
  const imageEl = useRef(null);

  const fullNameErrorEl = useRef(null);
  const usernameErrorEl = useRef(null);
  const passwordErrorEl = useRef(null);
  const imageErrorEl = useRef(null);

  const accounts = useContext(AccountsContext);

  const resetHandler = () => {
    setFullName("");
    setUsername("");
    setPassword("");
    imgRef && (imgRef.target.value = null);
  };
  useEffect(() => {
    if (resetLogCreate.create) {
      resetHandler();
      imageEl.current.style.borderColor = "green";
      imageErrorEl.current.classList.add("hide");
      fullNameEl.current.style.borderColor = "green";
      fullNameErrorEl.current.classList.add("hide");
      usernameEl.current.style.borderColor = "green";
      usernameErrorEl.current.classList.add("hide");
      passwordEl.current.style.borderColor = "green";
      passwordErrorEl.current.classList.add("hide");
    }
  }, [resetLogCreate.create]);

  const imgHandler = () => {
    if (
      !(
        imageEl.current.files[0] &&
        imageEl.current.files[0]["type"].split("/")[0] === "image"
      )
    ) {
      imageEl.current.style.borderColor = "red";
    } else {
      imageEl.current.style.borderColor = "green";
      imageErrorEl.current.classList.add("hide");
    }
  };

  useEffect(() => {
    if (
      fullName.match(regexWhiteSpace) &&
      fullName[fullName.match(regexWhiteSpace)["index"] + 1]
    ) {
      fullNameEl.current.style.borderColor = "green";
      fullNameErrorEl.current.classList.add("hide");
    } else if (fullName.length > 0) {
      fullNameEl.current.style.borderColor = "red";
    }

    if (
      username.match(regexGetNumber)?.length > 1 &&
      username.match(regexGetString)?.length > 1
    ) {
      usernameEl.current.style.borderColor = "green";
      usernameErrorEl.current.classList.add("hide");
    } else if (username.length > 0) {
      usernameEl.current.style.borderColor = "red";
    }

    if (password.length > 0 && password.length < 6) {
      passwordEl.current.style.borderColor = "red";
    } else if (password.length >= 6) {
      passwordEl.current.style.borderColor = "green";
      passwordErrorEl.current.classList.add("hide");
    }
  }, [fullName, username, password]);

  const createAccHandler = () => {
    let validate = true;
    if (
      !(
        fullName.match(regexWhiteSpace) &&
        fullName[fullName.match(regexWhiteSpace)["index"] + 1]
      )
    ) {
      fullNameErrorEl.current.classList.remove("hide");
      validate = false;
    }
    if (
      !(
        username.match(regexGetNumber)?.length > 1 &&
        username.match(regexGetString)?.length > 1
      )
    ) {
      usernameErrorEl.current.classList.remove("hide");
      usernameErrorEl.current.innerText =
        "Username must consist 2 numbers and alphabets!";
      validate = false;
    }

    if (password.length < 6) {
      passwordErrorEl.current.classList.remove("hide");
      validate = false;
    }
    if (
      !(
        imageEl.current.files[0] &&
        imageEl.current.files[0]["type"].split("/")[0] === "image"
      )
    ) {
      imageErrorEl.current.classList.remove("hide");
      validate = false;
    }
    accounts?.forEach((acc) => {
      if (acc.userName === username) {
        usernameEl.current.style.borderColor = "red";
        usernameErrorEl.current.classList.remove("hide");
        usernameErrorEl.current.innerText = "Sorry, username already exsits!";
        validate = false;
        return;
      }
    });
    if (validate) {
      const acc = {
        id: uuid(),
        date: new Date(),
        fullName,
        userName: username,
        password,
        balance: 20000,
        movements: [
          {
            id: uuid().slice(0, 7),
            date: new Date(),
            type: "deposit",
            amount: 20000,
          },
        ],
      };
      let reader = new FileReader();
      reader.onload = function (e) {
        let accounts = JSON.parse(localStorage.getItem("accounts"));
        acc["img"] = { src: e.target.result, alt: fullName[0].toUpperCase() };
        if (accounts) {
          accounts.push(acc);
        } else {
          accounts = [acc];
        }
        localStorage.setItem("accounts", JSON.stringify(accounts));
        resetHandler();
      };
      reader.readAsDataURL(imageEl.current.files[0]);
      logCreatePopup(false, "create");
    } else {
      return;
    }
  };

  return (
    <div className={`CreatePopup ${createPopup || "hidden"}`}>
      <AiOutlineClose
        className="CreatePopup-btn-close close-btn"
        onClick={() => {
          logCreatePopup(false, "create");
        }}
      />
      <h1 className="CreatePopup-head">Create account</h1>
      <div className="CreatePopup-field">
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="Muhammad Salman"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          ref={fullNameEl}
        />
        <p
          className="error-msg CreatePopup-error-name hide"
          ref={fullNameErrorEl}
        >
          Please enter your full name!
        </p>
      </div>
      <div className="CreatePopup-field">
        <label>Create username</label>
        <input
          type="text"
          placeholder="msk2029"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          ref={usernameEl}
        />
        <p
          className="error-msg CreatePopup-error-uname hide"
          ref={usernameErrorEl}
        >
          Username must consist 2 numbers and alphabets!
        </p>
      </div>
      <div className="CreatePopup-field">
        <label>Create password</label>
        <input
          type="password"
          placeholder="●●●●●●●"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          ref={passwordEl}
        />
        <p
          className="error-msg CreatePopup-error-pass hide"
          ref={passwordErrorEl}
        >
          Password length must be 6 or above!
        </p>
      </div>
      <div className="CreatePopup-field">
        <label>Upload profile</label>

        <input
          type="file"
          onChange={(e) => {
            imgRef = e;
            imgHandler(e);
          }}
          ref={imageEl}
        />
        <p className="error-msg CreatePopup-error-file hide" ref={imageErrorEl}>
          Make sure to upload image!
        </p>
      </div>
      <button className="CreatePopup-btn" onClick={() => createAccHandler()}>
        Create
      </button>
      <p className="CreatePopup-login">
        Already have an account?{" "}
        <a
          className="login-account"
          onClick={() => {
            logCreatePopup(false, "create");
            logCreatePopup(true, "login");
          }}
        >
          login here
        </a>
      </p>
    </div>
  );
}

export default CreatePopup;
