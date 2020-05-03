import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";

class FreeQuiz extends Component {
  render() {
    const numberOfInputs = 2;
    const placeholders = ["Nome", "E-mail"];
    const names = ["name", "email"];
    return (
      <Fragment>
        <Header sectionTitle="Perfil" />
        <G.Wrapper>
          <G.FullPageWrapper>
            <S.Content>
              <div>
                <Form
                  formTitle="Faça o teste gratuito."
                  formSubtitle="Entenda o seu perfil de investimento. "
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

export default FreeQuiz;
