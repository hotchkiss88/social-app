import React from "react";
import axios from "axios";
import useForm from "./useForm";

function LogIn(props) {
  const { values, handleSubmit, handleChange, errors } = useForm();

  let newUser = {
    username: values.name,
    password: values.password,
    ttl: 3600,
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  axios
    .post(
      "https://akademia108.pl/api/social-app/user/login",
      JSON.stringify(newUser),
      { headers: headers }
    )
    .then((req) => {
      localStorage.setItem("user", JSON.stringify(req.data));
      props.updateUser(true);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="LogIn">
      <h1> Log In </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label forhtml="name" className="label name">
            <span className="text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            minLength="4"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="input-box">
          <label forhtml="password" className="label password">
            <span className="text">Email</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            value={values.password}
          />
          <p>{errors.password}</p>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
