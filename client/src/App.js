import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainPage } from "./pages/MainPage";
import { SignIn, SignUp } from "./pages/AuthPages";

const App = () => {
  const token = useSelector((state) => state.userAuth.token);

  if (token) {
    return (
      <Switch>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Redirect to="/main" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/sign-in" exact>
        <SignIn />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Redirect to="/sign-in" />
    </Switch>
  );
};

export { App };
