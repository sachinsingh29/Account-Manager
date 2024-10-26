import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login({ users, onlogin }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  //function to handle submission of form
  const handleSubmit = (e) => {
    e.preventDefault();

    //check user is registerd or not by emial
    const existingUser = users.find((user) => user.email === email);
    console.log(existingUser);
    if (!existingUser) {
      alert("User not found. Please register first.");
      return;
    }

    //check if passwod is corerct or not
    if (existingUser.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    onlogin(existingUser);
    alert("Login successful!");

    setTimeout(() => {
      navigate("/account");
    }, 0);
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
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-center">Login</h2>

        {/*form to get data from user*/}

        <form onSubmit={handleSubmit}>
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
                placeholder="Enetr email"
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
                id="passsword"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <br></br>
        <p style={{ color: "white" }}>
          Don't have an account?
          <a href="/register" style={{ fontWeight: "800" }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
