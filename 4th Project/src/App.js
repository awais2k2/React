import React, { useState } from "react";
import Form from "./Components/Form";
import Login from "./Components/login";

function App() {
  const [isvalid, setisvalid] = useState(true);
  const dummyusers = [];
  const [user, setuser] = useState(dummyusers);

  const AddUser = (username, userpassword) => {
    setuser((previous) => {
      if (!user || user.length === 0) {
        return [...previous, { name: username, password: userpassword }];
      }
      let count = true;
      for (let i = 0; i < user.length; i++) {
        if (Object.is(username, user[i].name)) {
          count = false;
        }
      }
      if (count) {
        return [...previous, { name: username, password: userpassword }];
      } else {
        return [...previous];
      }
    });
  };
  console.log(user);
  const login = () => {
    setisvalid(false);
  };
  const logout = () => {
    setisvalid(true);
  };
  return (
    <React.Fragment>
      {isvalid ? (
        <Form onAddUser={AddUser} showlogin={login} />
      ) : (
        <Login onlogout={logout} />
      )}
    </React.Fragment>
  );
}

export default App;
