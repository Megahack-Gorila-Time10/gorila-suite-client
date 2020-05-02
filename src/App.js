import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";

import { Login, Question } from "./containers";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/suitability" component={Question} />
      </Switch>
    </AppProvider>
  );
}

export default App;
