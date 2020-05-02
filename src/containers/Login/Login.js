import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
class Login extends Component {
  render() {
    const numberOfInputs = 2;
    const placeholders = ["Nome", "E-mail"];
    const names = ["name", "email"];
    return (
      <Fragment>
        <Header sectionTitle="Perfil" />
        <G.Wrapper>
          <G.FullPageWrapper>
            <Form
              formTitle="Faça o teste gratuito."
              formSubtitle="Entenda o seu perfil de investimento. "
              inputs={numberOfInputs}
              placeholders={placeholders}
              names={names}
            />
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter />
      </Fragment>
    );
  }
}

export default Login;
