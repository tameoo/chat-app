import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import "./AuthPage.css";

const SignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError) {
      setLoading(true);
      console.log("success");
      //fetch
      setLoading(false);
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
        <Button
          disabled={isLoading}
          className={`${isLoading ? "" : "btn"} mb-form`}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
        <Link to="/sign-up" className="link center mb-form">
          Create an account? Sign up now.
        </Link>
      </form>
    </div>
  );
};

export { SignIn };
