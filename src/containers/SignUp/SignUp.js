import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class SignUp extends Component {
  state = {};
  render() {
    const numberOfInputs = 2;
    const placeholders = ["Nome", "E-mail"];
    const names = ["name", "email"];
    return (
      <Fragment>
        <Header sectionTitle="Sites" />
        <G.Wrapper>
          <G.FullPageWrapper>
            <S.Content>
              <div>
                <Form
                  formTitle="Monte seu Site."
                  formSubtitle="Escale sua carteira de clientes."
                  inputs={numberOfInputs}
                  placeholders={placeholders}
                  names={names}
                  router={this.props}
                />
              </div>
              <S.Illustration />
            </S.Content>
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter />
      </Fragment>
    );
  }
}

export default SignUp;
