import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SuitabilityProvider from "./context/SuitabilityProvider";

import { Login, Question } from "./containers";

function App() {
  return (
    <SuitabilityProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/suitability" component={Question} />
      </Switch>
    </SuitabilityProvider>
  );
}

export default App;
