import React, { useState } from "react";
import Form from "./Componenets/Form/form";
import List from "./Componenets/listelement/listelement";

function App() {
  const dummyobj = [];

  const [obj, setdummyobj] = useState(dummyobj);

  const addelement = (element) => {
    setdummyobj((previous) => {
      return [element, ...previous];
    });
  };

  return (
    <div>
      <Form onsubmit={addelement} />
      <List items={obj}></List>
    </div>
  );
}

export default App;
