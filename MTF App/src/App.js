import React, { useState } from "react";
import Labour from "./Components/Forms/Labour/Labour";
import AddLabour from "./Components/Forms/AddLabour/AddLabour";
import Customersize from "./Components/Forms/Customer/customersize";

import Header from "./Components/Header/header";

function App() {
  const [addlabourisvalid, setaddlabourisvalid] = useState(false);
  const [labourisvalid, setlabourisvalid] = useState(false);
  const [customerisvalid, setcustomerisvalid] = useState(false);
  const showaddlabour = () => {
    setaddlabourisvalid(true);
    setlabourisvalid(false);
    setcustomerisvalid(false);
  };
  const showlabourexpense = () => {
    setlabourisvalid(true);
    setaddlabourisvalid(false);
    setcustomerisvalid(false);
  };
  const showcustomer = () => {
    setcustomerisvalid(true);
    setaddlabourisvalid(false);
    setlabourisvalid(false);
  };

  return (
    <>
      <Header
        showaddlabour={showaddlabour}
        showlabourexpense={showlabourexpense}
        showcustomer={showcustomer}
      />
      {addlabourisvalid && <AddLabour />}
      {labourisvalid && <Labour />}
      {customerisvalid && <Customersize />}
    </>
  );
}

export default App;
