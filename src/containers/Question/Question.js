import React, { Component, Fragment } from "react";
import { Header, ColorFooter, LinearScale } from "../../components";
import * as G from "../../resources/globalStyle";
import SuitabilityContext from "../../context/SuitabilityContext";

class Question extends Component {
  componentDidMount = () => {
    if (this.context.state.name == "") {
      this.context.goHome();
    }
  };

  render() {
    return (
      <Fragment>
        <Header sectionTitle="Perfil" name={this.context.state.name} />
        <G.Wrapper>
          <G.FullPageWrapper>
            <LinearScale />
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter btnText="Próxima" />
      </Fragment>
    );
  }
}

Question.contextType = SuitabilityContext;

export default Question;
