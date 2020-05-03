import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import SiteContext from "../../context/SiteContext";

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
                  currentValues={[this.context.state.name,this.context.state.email]}
                  handleInput={this.context.handleInput}
                  nextPath="/sites/onboarding"
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

SignUp.contextType = SiteContext;

export default SignUp;
