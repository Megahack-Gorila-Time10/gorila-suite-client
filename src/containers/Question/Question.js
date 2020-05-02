import React, { Component, Fragment } from "react";
import { Header, ColorFooter, LinearScale } from "../../components";
import * as G from "../../resources/globalStyle";

class Question extends Component {
  render() {
    return (
      <Fragment>
        <Header sectionTitle="Perfil" name="Gabriel" />
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
export default Question;
