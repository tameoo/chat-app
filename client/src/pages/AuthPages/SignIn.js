import React, { useState } from "react";
import { Link } from "react-router-dom";

import { setToken } from "../../redux";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { fetchUserSignIn } from "../../api";

import { isEmail } from "validator";
import { Spinner } from "../../components/Spinner";
import "./AuthPage.css";

const SignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const [isResponseError, setResponseError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const authData = {
      email: email.value,
      password: password.value,
    };

    if (!emailError && !passwordError) {
      setLoading(true);

      fetchUserSignIn(authData)
        .then((response) => {
          setLoading(false);

          if (response.token) {
            localStorage.setItem("user", response.token);
            dispatch(setToken(response.token));
          }
        })
        .catch((err) => {
          setResponseError(err.message);
          setLoading(false);
        });
    }
  };

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;

    switch (input) {
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
          className="mb-form  input-controll"
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
          className="mb-form  input-controll"
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
          <Alert
            className="mb-form input-controll"
            variant="filled"
            severity="error"
          >
            {isResponseError}
          </Alert>
        )}
        <Button
          disabled={isLoading}
          className={`${isLoading ? "" : "btn"} mb-form input-controll`}
          type="submit"
          variant="contained"
        >
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
        <Link to="/sign-up" className="link center mb-form">
          Create an account? Sign up now.
        </Link>
      </form>
    </div>
  );
};

export { SignIn };
