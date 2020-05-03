import React, { Component, Fragment } from "react";
import { Header, ColorFooter } from "../../components";
import * as G from "../../resources/globalStyle";
import SiteContext from "../../context/SiteContext";
import { Redirect } from "react-router-dom";
import Fraction from "../../components/Fraction/Fraction";

class Onboarding extends Component {
  componentDidMount = () => {
    if (this.context.state.name == "") {
      this.context.goHome();
    }
  };
  render() {
    return (
      <Fragment>
        <Header sectionTitle="Sites" name={this.context.state.name} />
        <G.Wrapper>
          <G.FullPageWrapper>
            <Fraction step="1" denominator="6" category="Setup do site" />
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter btnText="Próxima" />
      </Fragment>
    );
  }
}

Onboarding.contextType = SiteContext;

export default Onboarding;
