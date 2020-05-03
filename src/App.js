import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SuitabilityProvider from "./context/SuitabilityProvider";

import {
  FreeQuiz,
  Question,
  SuitabilityProfile,
  Home,
  SignUp,
  Onboarding,
} from "./containers";
import SiteProvider from "./context/SiteProvider";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <SuitabilityProvider>
        <Switch>
          <Route exact path="/perfil/" component={FreeQuiz} />
          <Route exact path="/perfil/suitability" component={Question} />
          <Route
            exact
            path="/perfil/suitability/meu-perfil"
            component={SuitabilityProfile}
          />
        </Switch>
      </SuitabilityProvider>
      <SiteProvider>
        <Switch>
          <Route exact path="/sites" component={SignUp} />
          <Route exact path="/sites/onboarding" component={Onboarding} />
        </Switch>
      </SiteProvider>
    </Fragment>
  );
}

export default App;
