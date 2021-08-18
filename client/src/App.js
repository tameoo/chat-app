import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { Route, Redirect, Switch } from "react-router-dom";
import { MainPage } from "./pages";
import { SignIn, SignUp } from "./pages/AuthPages";

function App(props) {
  const [isAuthorized, setAuthorized] = useState(false);

  // useEffect(() => {
  //   io("http://localhost:8000", {
  //     transports: ["websocket", "polling", "flashsocket"],
  //   });
  // }, []);

  if (isAuthorized) {
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
}

export default App;
