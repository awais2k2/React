import React, { useContext } from "react";
import "./HeaderBody.css";
import { Login } from "../contexts/AccountsContext";

function HeaderBody({ logCreatePopup }) {
  const { loginSuccess } = useContext(Login);
  return (
    <div className={`Header-Body ${loginSuccess ? "HeaderBody-media" : ""}`}>
      <div className="Header-Body-container">
        <h1 className="Header-Body--head">net banking</h1>
        <p className="Header-Body--para">
          A simpler banking experience for a simpler life.
        </p>
        <div className="Header-Body-btn--container">
          {loginSuccess || (
            <>
              <button
                className="Header-Body-btn Header-btn-login"
                onClick={() => {
                  logCreatePopup(true, "login");
                }}
              >
                Login
              </button>
              <button
                className="Header-Body-btn Header-btn-create"
                onClick={() => {
                  logCreatePopup(true, "create");
                }}
              >
                create account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderBody;
