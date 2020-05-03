import React, { Component, Fragment } from "react";
import {
  Header,
  ColorFooter,
  SuitabilityType,
} from "../../components";
import * as G from "../../resources/globalStyle";
import SuitabilityContext from "../../context/SuitabilityContext";

class SuitabilityProfile extends Component {
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
            <SuitabilityType />
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter btnText="Compartilhar" />
      </Fragment>
    );
  }
}

SuitabilityProfile.contextType = SuitabilityContext;

export default SuitabilityProfile;
