import React from "react";
import "../UI/Card.css";

const Card = (props) => {
  const classes = "layout " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
