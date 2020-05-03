import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SuitabilityProvider from "./context/SuitabilityProvider";

import { FreeQuiz, Question, SuitabilityProfile, Home } from "./containers";

function App() {
  return (
    <SuitabilityProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/perfil/" component={FreeQuiz} />
        <Route exact path="/perfil/suitability" component={Question} />
        <Route
          exact
          path="/perfil/suitability/meu-perfil"
          component={SuitabilityProfile}
        />
      </Switch>
    </SuitabilityProvider>
  );
}

export default App;
