import React, { useState, useHistory } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import "../App.css";

const Login = (props) => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", state)
      .then((res) => {
        console.log("/login res", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log("err in login ", err);
      });
  };

  return (
    <div className="loginForm" onSubmit={login}>
      <h2>Login!</h2>
      <form>
        <input
          name="username"
          placeholder="username"
          type="text"
          value={state.username}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
        <input id="submit" placeholder="createaccount" type="submit" />
      </form>
    </div>
  );
};

export default Login;
