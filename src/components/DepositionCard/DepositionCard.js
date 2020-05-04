import React, { Component } from "react";
import * as S from "./style";

class DepositionCard extends Component {
  render() {
    return (
      <S.CardWrapper>
        <S.Info>{this.props.info}</S.Info>
        <S.Header>
          <S.Title>{this.props.title}</S.Title>
        </S.Header>
      </S.CardWrapper>
    );
  }
}

export default DepositionCard;
