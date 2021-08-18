import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import "./AuthPage.css";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && !emailError && !passwordError) {
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
        <Button
          disabled={isLoading}
          className={`${isLoading ? "" : "btn"} mb-form`}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
        <Link to="/sign-in" className="link center mb-form">
          Already have an account? Sign in now.
        </Link>
      </form>
    </div>
  );
};

export { SignUp };
