import React, { Component, Fragment } from "react";
import { Header, Form, ColorFooter } from "../../components";
import SuitabilityContext from "../../context/SuitabilityContext";
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
                  currentValues={[this.context.state.name,this.context.state.email]}
                  handleInput={this.context.handleInput}
                  nextPath="/perfil/suitability"
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

FreeQuiz.contextType = SuitabilityContext;

export default FreeQuiz;
