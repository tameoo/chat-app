import React, { useState } from "react";
import { Link } from "react-router-dom";

import { setToken } from "../../redux";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { fetchUserSignUp } from "../../api";

import { Spinner } from "../../components/Spinner";
import { isEmail } from "validator";
import "./AuthPage.css";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [isResponseError, setResponseError] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [avatarError, setAvatarError] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, avatar } = e.target;

    const authData = {
      name: name.value,
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };

    if (!nameError && !emailError && !passwordError && !avatarError) {
      setLoading(true);

      fetchUserSignUp(authData)
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
      case "name":
        value.length < 3 ? setNameError(true) : setNameError(false);
        break;
      case "email":
        !isEmail(value) ? setEmailError(true) : setEmailError(false);
        break;
      case "password":
        value.length < 8 ? setPasswordError(true) : setPasswordError(false);
        break;
      case "avatar":
        value === "" ? setAvatarError(true) : setAvatarError(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="radio-wrapper">
          <h3 className="radio-text mb-form">Avatar</h3>
          <div className="radio-group">
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/knight.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/knight.png"
                alt="knight"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/astronaut.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/astronaut.png"
                alt="astronaut"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/ghost.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/ghost.png"
                alt="ghost"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/pharaoh.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/pharaoh.png"
                alt="pharaoh"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/pumpkin.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/pumpkin.png"
                alt="pumpkin"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/skeleton.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/skeleton.png"
                alt="skeleton"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/werewolf.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/werewolf.png"
                alt="werewolf"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/wizard.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/wizard.png"
                alt="wizard"
              />
            </label>
            <label className="avatars">
              <input
                className="radio-btn"
                type="radio"
                name="avatar"
                onChange={handleChange}
                value="./avatars/yurei.png"
              />
              <img
                className="avatar-icon"
                src="./avatars/yurei.png"
                alt="yurei"
              />
            </label>
          </div>
          {avatarError ? (
            <p className="error">Please select your option above</p>
          ) : (
            <p className="radio-text">
              Option is chosen but you can select another one.
            </p>
          )}
        </div>
        <TextField
          className="mb-form input-controll"
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
          className="mb-form input-controll"
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
          className="mb-form input-controll"
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
        <Link to="/sign-in" className="link center mb-form">
          Already have an account? Sign in now.
        </Link>
      </form>
    </div>
  );
};

export { SignUp };
