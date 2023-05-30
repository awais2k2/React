import React from "react";
import "./Addgoal.css";
import Card from "../UI/Card";

const AddGoal = (props) => {
  return (
    <Card className="goal-box">
      <p className="goal-text">{props.text}</p>
    </Card>
  );
};

export default AddGoal;
