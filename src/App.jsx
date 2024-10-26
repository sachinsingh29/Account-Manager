import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import Account from "./account";

import "./APP.css"; //importing styling

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //State to store users data
  const [users, setUsers] = useState([]);

  //state to store current user for account details
  const [currentUser, setcurrentUser] = useState(null);

  //set current  user on login
  const handlelogin = (user) => {
    setcurrentUser(user);
    console.log(currentUser);
  };

  //upadte user
  const handleupdateUsers = (updatedUser) => {
    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.email === updatedUser.email ? updatedUser : user
      )
    );
    setcurrentUser(updatedUser); //update current user
    //console.log(updatedUser);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Login users={users} onlogin={handlelogin} />}
          />
          <Route
            path="/register"
            element={<Register users={users} setUsers={setUsers} />}
          />
          <Route
            path="/account"
            element={
              <Account
                currentUser={currentUser}
                onUpdateUser={handleupdateUsers}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
