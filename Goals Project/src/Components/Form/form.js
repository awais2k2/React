import React, { useState } from "react";
import styled from "styled-components";
import "../Form/form.css";
import Card from "../UI/Card";

const Formcontrols = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
  &.invalid label {
    color: red;
  }
`;

const Form = (props) => {
  const [userinput, setinput] = useState("");
  const [isvalid, setisvalid] = useState(true);

  const inputchangehandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisvalid(true);
    }
    setinput(event.target.value);
  };
  const Submithandler = (event) => {
    event.preventDefault();
    if (userinput.trim().length === 0) {
      setisvalid(false);
      return;
    }
    const entereddata = {
      text: userinput,
      id: Math.random().toString(),
    };

    props.onSaveinputData(entereddata);
    setinput("");
  };
  return (
    <Card className="header">
      <form onSubmit={Submithandler}>
        <Formcontrols className={!isvalid ? "invalid" : ""}>
          <label>Course Goal</label>
          <input onChange={inputchangehandler} value={userinput}></input>
        </Formcontrols>
        <button type="Submit">Add Goal</button>
      </form>
    </Card>
  );
};

export default Form;
