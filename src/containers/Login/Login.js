import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
class Login extends Component {
  render() {
    const numberOfInputs = 2;
    const placeholders = ["Nome", "E-mail"];
    return (
      <Fragment>
        <G.fullPageWrapper>
          <Header sectionTitle="Perfil" />
          <Form
            formTitle="Faça o teste gratuito."
            formSubtitle="Entenda o seu perfil de investimento. "
            inputs={numberOfInputs}
            placeholders={placeholders}
          />
        </G.fullPageWrapper>
        <ColorFooter />
      </Fragment>
    );
  }
}

export default Login;
