import React, { Component, Fragment } from "react";
import * as S from "./style";
import SuitabilityContext from "../../context/SuitabilityContext";

class SuitabilityType extends Component {
  render() {
    return (
      <S.InfoWrapper>
        <S.GorilaImg color={"#4CDE93"} />
        <S.Paragraph>Seu Perfil Gorila é</S.Paragraph>
        <S.Type>{this.context.state.profileResult.title}</S.Type>
        <S.Paragraph>
          {this.context.state.profileResult.description}
        </S.Paragraph>
      </S.InfoWrapper>
    );
  }
}

SuitabilityType.contextType = SuitabilityContext;

export default SuitabilityType;
