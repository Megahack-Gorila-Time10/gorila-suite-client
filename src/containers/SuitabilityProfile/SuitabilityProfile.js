import React, { Component, Fragment } from "react";
import {
  Header,
  ColorFooter,
  SuitabilityType,
  RadarGraph,
} from "../../components";
import * as G from "../../resources/globalStyle";
import * as S from "./style";
import SuitabilityContext from "../../context/SuitabilityContext";
import Loader from "react-loader-spinner";

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
            {Object.values(this.context.state.profileResult).length === 0 ? (
              <S.LoaderWrapper>
                <Loader type="Puff" color="#4CDE93" height={100} width={100} />
                <S.LoadingText>Estamos calculando seu perfil...</S.LoadingText>
              </S.LoaderWrapper>
            ) : (
              <S.Content>
                <SuitabilityType />
                <RadarGraph />
              </S.Content>
            )}
          </G.FullPageWrapper>
        </G.Wrapper>
        <ColorFooter btnText="Compartilhar" />
      </Fragment>
    );
  }
}

SuitabilityProfile.contextType = SuitabilityContext;

export default SuitabilityProfile;
