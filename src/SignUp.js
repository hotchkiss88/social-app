import React, { useState } from "react";
import axios from "axios";
import useForm from "./useForm";
import validate from "./validateInfo";

const SignUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const [succesMessage, setSuccesMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    let newUser = {
      username: values.name,
      email: values.email,
      password: values.password,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "http://akademia108.pl/api/social-app/user/signup",
        JSON.stringify(newUser),
        { headers: headers }
      )
      .then((req) => {
        if (req.data.signedup === false) {
          if (req.data.message.username) {
            setSuccesMessage("The username has already been taken.");
          }
          if (req.data.message.email) {
            setSuccesMessage("The username has already been taken.");
          }
        } else {
          setSuccesMessage("Succes");
        }

        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="SignUp">
      <h1> Sign Up </h1>
      <p>{succesMessage}</p>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-box">
          <label forhtml="name" className="label name">
            <span className="text">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            onChange={handleChange}
            value={values.name}
            minLength="4"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="input-box">
          <label forhtml="email" className="label email">
            <span className="text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email}
        </div>
        <div className="input-box">
          <label forhtml="password" className="label password">
            <span className="text">Password</span>
          </label>
          <input
            type="text"
            id="password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password}
        </div>
        <div className="input-box">
          <label forhtml="passwordRepeat" className="label passwordRepeat">
            <span className="text">Confirm password</span>
          </label>
          <input
            type="text"
            id="passwordRepeat"
            name="passwordRepeat"
            autoComplete="off"
            onChange={handleChange}
            value={values.passwordRepeat}
          />
          {errors.passwordRepeat}
        </div>
        <div className="submit">
          <input type="submit" value="Create an account" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
