import React, { useState, useEffect } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [state, setState] = useState(initialValues);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", state)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={onChange}
        />
        <label htmlFor="name">Password</label>
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
      {(state.username || state.password === "") && (
        <h1>Username or Password not valid.</h1>
      )}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.