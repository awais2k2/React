import React, { useContext } from "react";
// import profileImg from "../assests/imgs/main-img.jpg";
import AccountsContext, { Login } from "../contexts/AccountsContext";
import "./Account.css";

function Account() {
  const { loginSuccess, currentUserID } = useContext(Login);
  const accounts = useContext(AccountsContext);
  if (!loginSuccess) return <></>;
  const { fullName, balance, img } = accounts.filter(
    (account) => account.id === currentUserID
  )[0];
  const now = new Date();
  const locale = navigator.language;
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long", // 2-digit
    year: "numeric",
    weekday: "long",
  };
  const currentDate = new Intl.DateTimeFormat(locale, options).format(now);
  const numberOptions = {
    useGrouping: true,
  };
  const formatedBalance = new Intl.NumberFormat(locale, numberOptions).format(
    balance
  );

  const currentHours = new Date().getHours();
  let greetMsg;
  if (currentHours >= 4 && currentHours <= 11) {
    greetMsg = "Good Morning";
  } else if (currentHours >= 12 && currentHours <= 15) {
    greetMsg = "Good Noon";
  } else if (currentHours >= 16 && currentHours <= 17) {
    greetMsg = "Good Afternoon";
  } else if (currentHours >= 18 && currentHours <= 21) {
    greetMsg = "Good Evening";
  } else {
    greetMsg = "Good Night";
  }

  return (
    <div className={`Account ${loginSuccess ? "" : "hidden"}`}>
      <div className="Account-informations">
        <img src={img.src} className="Account-profile-img" />
        <div className="Account-informations-container">
          <p>{greetMsg}</p>
          <h1>{fullName}</h1>
        </div>
      </div>
      <div className="Account-methods">
        <p className="Account-balance">
          Current Balance: <span>{formatedBalance}RS</span>
        </p>
        <p className="Account-date">As of {currentDate}</p>
      </div>
    </div>
  );
}

export default Account;
