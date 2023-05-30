import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/form";
import Addgoal from "./Components/Goal/Addgoal";

function App() {
  const dummygoals = [
    { text: "Hello sir how are u??", id: "1" },
    { text: "Wants to drink water", id: "2" },
  ];

  const [goals, setgoals] = useState(dummygoals);

  const addgoals = (add) => {
    setgoals((pregoal) => {
      return [add, ...pregoal];
    });
  };
  return (
    <div>
      <Form onSaveinputData={addgoals} />
      {goals.map((goals) => (
        <Addgoal text={goals.text} key={goals.id} />
      ))}
    </div>
  );
}

export default App;
