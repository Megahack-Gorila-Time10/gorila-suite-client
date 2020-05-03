import React, { Component } from "react";
import Logo from "../Logo";
import * as S from "./style";
import Button from "../Button";

class Card extends Component {
  handleClick = () => {
    console.log(this.props.router);
    this.props.router.history.push(this.props.to)
  };
  render() {
    return (
      <S.CardWrapper>
        <S.Header>
          <S.Title>{this.props.title}</S.Title>
          <Logo />
        </S.Header>
        <S.Info>{this.props.info}</S.Info>
        <Button lg text={this.props.btnText} handleClick={this.handleClick} />
      </S.CardWrapper>
    );
  }
}

export default Card;
