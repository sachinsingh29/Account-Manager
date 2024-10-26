import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ users, setUsers }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const navigate = useNavigate();

  //function to handleregister button
  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (confirmpass !== password) {
      alert("Passwords do not match! Please confirm your password again.");
      return;
    }

    // Check if the user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("User already registered with this email.");
      return;
    }

    // Create new user object
    const newUser = { name, email, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);

    //reset input filed after register
    setname("");
    setemail("");
    setpassword("");
    setconfirmpass("");

    //Route to login page
    navigate("/");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card"
        style={{
          width: "500px",
          padding: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          backgroundColor: "rgba(255, 255, 255, 0.2)"
        }}
      >
        <h2 className="text-center">Register</h2>

        {/*form for user registertaion */}

        <form onSubmit={handleRegister}>
          <div className="mb-3 row">
            <label htmlFor="name" className="form-label col-form-label">
              Name:
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enetr name"
                id="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="form-label col-form-label">
              Email:
            </label>
            <div className="col">
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="form-label col-form-label">
              Password:
            </label>
            <div className="col">
              <input
                type="password"
                placeholder="Enetr password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="confirm_password"
              className="form-label col-form-label"
            >
              Confirm Password:
            </label>
            <div className="col">
              <input
                type="password"
                placeholder="Enetr password again"
                id="confirm_passsword"
                className="form-control"
                value={confirmpass}
                onChange={(e) => setconfirmpass(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}
