import React from "react";
import "./Overlay.css";

export default function Overlay({ overlay, children }) {
  const styles = {
    display: `${overlay ? "flex" : "none"}`,
  };
  return (
    <div className="overlay" style={styles}>
      {children}
    </div>
  );
}
