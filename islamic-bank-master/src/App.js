import React, { useState } from "react";
import Nav from "./components/Nav";
import HeaderBody from "./components/HeaderBody";
import PopupLinks from "./popups/PopupLinks";
import Overlay from "./components/Overlay";
import LoginPopup from "./popups/LoginPopup";
import CreatePopup from "./popups/CreatePopup";
import Account from "./components/Account";
import AccountMethods from "./components/AccountMethods";
import "./App.css";

import AccountsContext, { Login } from "./contexts/AccountsContext";

function App() {
  const [linkPopup, setLinkPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setcreatePopup] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [currentUserID, setCurrentUserID] = useState("");
  const [resetLogCreate, setResetLogCreate] = useState({
    login: false,
    create: false,
  });

  let accounts = JSON.parse(localStorage.getItem("accounts"));

  function openLinkPopup(popup) {
    setLinkPopup(popup);
  }
  function logCreatePopup(popup, type) {
    setOverlay(popup);
    if (type === "login") {
      setLoginPopup(popup);
      if (popup === true)
        setResetLogCreate({ ...resetLogCreate, create: true });
      else setResetLogCreate({ ...resetLogCreate, create: false });
    } else if (type === "create") {
      setcreatePopup(popup);
      if (popup === true) setResetLogCreate({ ...resetLogCreate, login: true });
      else setResetLogCreate({ ...resetLogCreate, login: false });
    }
  }
  function accountLogin(success, userId) {
    if (success) {
      setLoginSuccess(true);
      setCurrentUserID(userId);
    }
  }
  function accountLogout(logout) {
    if (logout) {
      setLoginSuccess(false);
      setCurrentUserID("");
    }
  }

  return (
    <AccountsContext.Provider value={accounts}>
      <Login.Provider value={{ loginSuccess, currentUserID }}>
        <div className="App">
          <Overlay overlay={overlay}>
            <LoginPopup
              loginPopup={loginPopup}
              logCreatePopup={logCreatePopup}
              resetLogCreate={resetLogCreate}
              accountLogin={accountLogin}
            />
            <CreatePopup
              createPopup={createPopup}
              logCreatePopup={logCreatePopup}
              resetLogCreate={resetLogCreate}
            />
          </Overlay>
          <PopupLinks openLinkPopup={openLinkPopup} popup={linkPopup} />
          <Nav
            openLinkPopup={openLinkPopup}
            logCreatePopup={logCreatePopup}
            accountLogout={accountLogout}
          />
          <Account />
          <AccountMethods />
          <HeaderBody logCreatePopup={logCreatePopup} />
        </div>
      </Login.Provider>
    </AccountsContext.Provider>
  );
}
export default App;
