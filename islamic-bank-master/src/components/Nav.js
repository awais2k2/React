import React, { useContext } from "react";
import { RiBankLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CgKey, CgMail } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { StyledLink } from "../styles/StyledLink";
import "./Nav.css";
import AccountsContext, { Login } from "../contexts/AccountsContext";

function Nav({ openLinkPopup, logCreatePopup, accountLogout }) {
  const navLinks = ["Home", "About", "features", "testimonials"];
  const styleBorder = { borderBottom: "2px solid  var(--color-border)" };
  const { loginSuccess, currentUserID } = useContext(Login);
  const accounts = useContext(AccountsContext);
  function closeAccountHandler() {
    accounts.splice(
      accounts.findIndex((account) => account.id === currentUserID),
      1
    );
    localStorage.setItem("accounts", JSON.stringify(accounts));
    accountLogout(true);
  }

  return (
    <div className="Nav" style={loginSuccess ? styleBorder : {}}>
      <nav className="Nav-information">
        <RiBankLine className="Nav-logo" />
        <div className="Nav-contact">
          <AiOutlineWhatsApp className="Nav-icons icon-whatsapp" />
          <span className="Nav-number">+92 301 2345678</span>
          <CgMail className="Nav-icons icon-gmail" />
          <span className="Nav-number">msk@gmail.com</span>
        </div>
      </nav>
      <nav className="Nav-main">
        <h1 className="Nav-head">
          <FaBars className="Nav-bars" onClick={() => openLinkPopup(true)} />
          Islamic Bank
        </h1>
        <ul className="Nav-links-container">
          {navLinks.map((link, index) => {
            return (
              <StyledLink
                className="Nav-link"
                length={navLinks.length}
                last={index + 1 === navLinks.length ? true : false}
                key={index}
              >
                <a hef="#">{link.toUpperCase()}</a>
              </StyledLink>
            );
          })}
        </ul>
        <div className="Nav-btns">
          <button
            className={`Nav-btn Nav-btn--${loginSuccess ? "big" : "small"}`}
            onClick={() => {
              loginSuccess
                ? closeAccountHandler()
                : logCreatePopup(true, "login");
            }}
          >
            {loginSuccess ? "Close account" : "Login"}
          </button>
          <button
            className={`Nav-btn Nav-btn--${loginSuccess ? "small" : "big"}`}
            onClick={() => {
              loginSuccess
                ? accountLogout(true)
                : logCreatePopup(true, "create");
            }}
          >
            {loginSuccess ? "Logout" : "create account"}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
