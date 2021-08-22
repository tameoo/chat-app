import React, { useState } from "react";
import { Link } from "react-router-dom";

import { setUserID } from "../../redux";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { isEmail } from "validator";
import { Spinner } from "../../components/Spinner/Spinner";
import "./AuthPage.css";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [isResponseError, setResponseError] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target;

    const authData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (!nameError && !emailError && !passwordError) {
      setLoading(true);

      fetch("http://localhost:8000/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      })
        .then((data) => data.json())
        .then((response) => {
          setLoading(false);

          if (response.token) {
            localStorage.setItem("user", response.token);
            dispatch(setUserID(response.result._id));
          }

          if (response.message) {
            setResponseError(response.message);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;

    switch (input) {
      case "name":
        value.length < 3 ? setNameError(true) : setNameError(false);
        break;
      case "email":
        !isEmail(value) ? setEmailError(true) : setEmailError(false);
        break;
      case "password":
        value.length < 8 ? setPasswordError(true) : setPasswordError(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className="mb-form"
          name="name"
          type="text"
          label="Your name"
          variant="outlined"
          onBlur={handleChange}
          onChange={handleChange}
          error={nameError}
          helperText={nameError && "Invalid Name"}
          required
        />
        <TextField
          className="mb-form"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          onBlur={handleChange}
          onChange={handleChange}
          error={emailError}
          helperText={emailError && "Invalid Email"}
          required
        />
        <TextField
          className="mb-form"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          onBlur={handleChange}
          onChange={handleChange}
          error={passwordError}
          helperText={passwordError && "Password can be 8 or more character"}
          required
        />
        {isResponseError && (
          <Alert className="mb-form" variant="filled" severity="error">
            {isResponseError}
          </Alert>
        )}
        <Button
          disabled={isLoading}
          className={`${isLoading ? "" : "btn"} mb-form`}
          type="submit"
          variant="contained"
        >
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
        <Link to="/sign-in" className="link center mb-form">
          Already have an account? Sign in now.
        </Link>
      </form>
    </div>
  );
};

export { SignUp };
