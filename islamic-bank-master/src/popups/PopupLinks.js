import React, { useContext } from "react";
import "./PopupLinks.css";
import { AiOutlineClose } from "react-icons/ai";

function PopupLinks({ popup, openLinkPopup }) {
  const navLinks = ["Home", "About", "features", "testimonials"];

  return (
    <div className={`PopupLinks ${popup ? "" : "hidden"}`}>
      <AiOutlineClose
        className="Popup-close close-btn"
        onClick={() => openLinkPopup(false)}
      />
      <ul className="PopupLinks-container">
        {navLinks.map((link, index) => {
          return (
            <li className="PopupLink" key={index}>
              <a hef="#">{link.toUpperCase()}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopupLinks;
