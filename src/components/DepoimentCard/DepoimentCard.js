import React, { Component } from "react";
import Logo from "../Logo";
import * as S from "./style";
import Button from "../Button";

class DepoimentCard extends Component {
  handleClick = () => {
    console.log(this.props.router);
    this.props.router.history.push(this.props.to)
  };
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

export default DepoimentCard;
